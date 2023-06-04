<template>
<vue-good-table
  mode="remote"
  v-on:page-change="onPageChange"
  v-on:column-filter="onColumnFilter"
  v-on:sort-change="onSortChange"
  v-on:per-page-change="onPerPageChange"
  :totalRows="totalRecords"
  :isLoading="isLoading" 
  :select-options="{
        enabled: true,
        selectionText: 'rows selected',
        selectOnCheckboxOnly: true,
        clearSelectionText: 'clear',
    
    }"
  :pagination-options="{
    enabled: true,        
    perPage: 25,
    perPageDropdown: [50, 100],
  }"
  
  :rows="rows"
  :columns="columns">
  
  <template #table-row="props">
      <span v-if="props.column.field == 'name'">
        {{ props.row.name }} [ {{ props.row.id }} ]
      </span>
      <span v-if="props.column.field == 'activate'">
        <!-- <span class="badge badge-success" v-if="props.row.activate">영업중</span>
        <span class="badge badge-danger" v-else>영업중지</span> -->
        <div class="d-flex justify-content-center text-success text-gradient text-sm font-weight-bold" v-if="props.row.activate"> 영업중 </div>
        <div class="d-flex justify-content-center text-danger text-gradient text-sm font-weight-bold" v-else> 중지 </div>
        <!-- <button class="btn btn-success btn-sm" v-if="props.row.activate" @click="console.log('sdf')">영업중</button>
        <button class="btn btn-danger btn-sm" v-else @click="console.log('sdf')">영업중지</button> -->
      </span>
      <span v-if="props.column.field == 'info_targets'">
          <div class="dropdown float-lg-center pe-4">
            <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
              <button class="btn mb-0 btn-outline-primary btn-sm null null">{{ props.row.info_targets.data.length }}</button>
              <!-- <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i> -->
            </a>
            <ul class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable" style="">
              <li v-for="list,index in props.row.info_targets.data" :key="index">
                <a class="dropdown-item border-radius-md text-center" href="javascript:;">
                  {{ list.attributes.name }} [{{ list.attributes.storetype }}]
                </a>
              </li>
              
              <textarea rows=3></textarea>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary">저장</button>
              </div>
           
            </ul>
          </div>
      </span>
      <span v-if="props.column.field == 'id'">
        <div class="d-flex justify-content-center">
        <a class="mx-2" style="cursor:pointer;" @click="openModalInfo(`${props.row.id}`)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:24px;"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </a>
        <a class="mx-2" style="cursor:pointer;" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width:24px;"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
        </a> 
        <div class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable" style="">
            <textarea rows=3></textarea>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary">저장</button>
            </div>
        </div>
        <router-link :to="`/info/${props.row.id}`" class="mx-2"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width:18px;filter: invert(85%) sepia(84%) saturate(430%) hue-rotate(359deg) brightness(90%) contrast(106%);"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width:24px;filter: invert(85%) sepia(84%) saturate(430%) hue-rotate(359deg) brightness(90%) contrast(106%);"><path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/></svg> -->
        </router-link>
       
          </div>
      </span>
  </template>
  <template #selected-row-actions>
    <div class="d-flex content-justify-end">
        <button class="btn btn-warning btn-sm">업데이트파일 다운로드</button>
        <div class="dropdown float-lg-center pe-4">
            <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
              <button class="btn mb-0 btn-outline-warning btn-sm null null">전체변경</button>
              <!-- <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i> -->
            </a>
            <ul class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable" style="">
          
              <li>
                <a class="dropdown-item border-radius-md text-center" href="javascript:;">
                  영업중 
                </a>
                <a class="dropdown-item border-radius-md text-center" href="javascript:;">
                  영업중지 
                </a>
                
              </li>
            </ul>
          </div>
      </div>
      
      
    </template>
</vue-good-table>

<ModalForInfo ref="myPreviewModalRef"></ModalForInfo>
</template>

<script>
import axios from 'axios'
import ModalForInfo from '../modals/ModalForInfo.vue'

export default {
    components:{
      ModalForInfo
    },
    data () {
      return {
        error: null,
        search_keyword : null,
   
        columns: [
            {
              label: "Name",
              field: "name",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },
            {
                  label: "업종",
                  field: "storetype",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  width: '90px',
                  filterOptions: {
                      enabled: true,
                      filterDropdownItems: [
                      { text: '오피', value: '오피' },
                      { text: '휴게텔', value: '휴게텔' },
                      { text: '건마', value: '건마' },
                      { text: '안마', value: '안마' },
                      { text: '핸플/립', value: '핸플/립' },
                      { text: '트젠/리얼', value: '트젠/리얼' },
                      { text: '유흥주점', value: '유흥주점' },
                      { text: '출장', value: '출장' },
                      ]
                  }
              },      
          {
              label: "Phone",
              field: "phone",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },       
          {
              label: "Activte",
              field: "activate",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                      enabled: true,
                      filterDropdownItems: [
                      { text: 'true', value: 1 },
                      { text: 'false', value: 0 },
                     
                      ]
                  }
            },       
          {
              label: "Sido",
              field: "sido",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },       
          {
              label: "Sigugun",
              field: "sigugun",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },       
          {
              label: "level",
              field: "level",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },       
          {
              label: "info_targets",
              field: "info_targets",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            }, 
            {
              label: "Id",
              field: "id",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },      
        ],
        

        isLoading: true,
        
        rows: [],
        totalRecords: 0,
        serverParams: {
          columnFilters: {
            
          },
          sort: [
            {
              field: 'id',
              type: 'ASC'
            }
          ],
          page: 1, 
          perPage: 25
        }
      }
    },
    methods:{
      
    openModalInfo(id){
        this.$refs.myPreviewModalRef.openModalFnSet(id);  
    },
    updateParams(newProps) {
      
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
   
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      let sort = []
      if(params[0]['type']=='none'){
        sort.push({ type:'ASC', field:params[0].field })
      }else{
        sort.push({ type:params[0].type, field:params[0].field })
      }
      
      this.updateParams({
        sort: sort
      });
      this.loadItems();
    },
    
    onColumnFilter(params) {
      this.serverParams.page = 1
      this.updateParams(params);
      this.loadItems();
    },
    async getFromServer(params){
      try {
        let keyword = ''
        Object.keys(params.columnFilters).forEach(element => {
          keyword = keyword + '&filters['+element+'][$contains]='+params.columnFilters[element] 
        })
        let param = '/api/infos?pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage+'&[fields][0]=name&[fields][1]=storetype&[fields][2]=phone&[fields][3]=activate&[fields][4]=sido&[fields][5]=sigugun&[fields][6]=level&populate[info_targets][fields][0]=name&populate[info_targets][fields][1]=storetype&populate[info_targets]'+'&sort[0]='+this.serverParams.sort[0].field+'%3A'+this.serverParams.sort[0].type+keyword
        // this.$store.state.token = '39de653b0ad79aadd75aa29cfb209715d64349aa5027c444bb9a0fcb87a881f9ad84e43d6448590b45b5cb8c1c59a97c975fd90f75d1224d9eb668b2da57667dab4dc7324b57835641423ac88825d48ebd000d4bb44588b41cb44fd066d4a2feec06675af3a06154c3c170e61d252ca7dde03e29fb81e3b77c54f0655bf62657'
        const response =  await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
   
        this.totalRecords = response.data.meta.pagination.total;
        return response
        
      } catch (error) {
        console.log(error)
        this.error = error;
      }
    },
    loadItems() {
          this.getFromServer(this.serverParams).then(response => {
            this.rows = []
            response.data.data.forEach(element => {
              this.rows.push({id:element.id,name:element.attributes.name,storetype:element.attributes.storetype,phone:element.attributes.phone,activate:element.attributes.activate,sido:element.attributes.sido,sigugun:element.attributes.sigugun,level:element.attributes.level,info_targets:element.attributes.info_targets})
            })
            this.isLoading = false;
          });
    }
  },
  async mounted (){
    this.loadItems()
  }
 
}
</script>

<style>
.vgt-responsive{
  overflow: hidden;
}
</style>