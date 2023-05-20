<template>
     
<div class="card my-4">
  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
    <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
      <h6 class="text-white text-capitalize ps-3">Projects table</h6>
    </div>
  </div>
  <div class="card-body px-5 pb-2">
        <vue-good-table
          mode="remote"
          v-on:page-change="onPageChange"
          v-on:column-filter="onColumnFilter"
          v-on:sort-change="onSortChange"
          v-on:per-page-change="onPerPageChange"
          :totalRows="totalRecords"
          :isLoading="isLoading" 

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
              <span v-if="props.column.field == 'level'">
                <select class="form-select-sm" id="input-custom" v-model="props.row.level">
                  <option value="-2">-2</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
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
                    </ul>
                  </div>
              </span>
              <span v-if="props.column.field == 'id'">
                <router-link :to="`/info/${props.row.id}`" style="color: #dee2e6">
                      <a class="dropdown-item"> 프로필수정 </a>
                </router-link>
                
              </span>
             
          </template>
        </vue-good-table>
  
  </div>
</div>
  
 
</template>

<script>
import axios from 'axios'
export default {
    components:{
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
    
    updateParams(newProps) {
      
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      console.log(params.currentPerPage)
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
        this.$store.state.token = '39de653b0ad79aadd75aa29cfb209715d64349aa5027c444bb9a0fcb87a881f9ad84e43d6448590b45b5cb8c1c59a97c975fd90f75d1224d9eb668b2da57667dab4dc7324b57835641423ac88825d48ebd000d4bb44588b41cb44fd066d4a2feec06675af3a06154c3c170e61d252ca7dde03e29fb81e3b77c54f0655bf62657'
        const response =  await axios.get('https://op.cc-oo.club'+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
   
        this.totalRecords = response.data.meta.pagination.total;
        return response
        
      } catch (error) {
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