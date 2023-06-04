<template>
  <button class="btn btn-primary mx-1" @click="SelectSite(0)" v-if="select_site_id==0">전체</button>
  <button class="btn btn-success mx-1" @click="SelectSite(0)" v-else>전체</button>
  <template v-for="list,index in default_sites" :key="index">
    <button class="btn btn-primary mx-1" @click="SelectSite(list.id)" v-if="select_site_id==list.id">{{ list.name }}</button>
    <button class="btn btn-success mx-1" @click="SelectSite(list.id)" v-else>{{ list.name }}</button>
  </template>


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
            clearSelectionText: 'clear',
            selectOnCheckboxOnly: true,
        
        }"
      :pagination-options="{
        enabled: true,        
        perPage: 25,
        perPageDropdown: [50, 100],
      }"
      
      :rows="rows"
      :columns="columns">
      <template #table-row="props">

        <span v-if="props.column.field == 'id'">
          <a class="font-weight-bold text-xs">{{ props.row.info_id }}</a>
          <a class="mx-2" style="cursor:pointer;" @click="openModalInfo(`${props.row.info_id}`)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:24px;"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
          </a>
          &nbsp;
          <a :href="props.row.origin_url+props.row.url" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="width:24px;"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
          </a>
        </span>
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
        default_sites : [],
        select_site_id : 0,
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
                label: "Adress",
                field: "adress",
                filterable: true,
                tdClass: 'text-center',
                thClass: 'text-center',
                filterOptions: {
                    enabled: true,
                    placeholder: '',
                }
            },       
            {
                label: "site",
                field: "site",
                filterable: true,
                tdClass: 'text-center',
                thClass: 'text-center',
           
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
        },
     }
   },
   methods:{
    SelectSite(id){
      this.select_site_id = id
      this.loadItems()
    },
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
    
    async getFromServer(){
        try{
          let keyword = ''
          Object.keys(this.serverParams.columnFilters).forEach(element => {
            keyword = keyword + '&filters['+element+'][$contains]='+this.serverParams.columnFilters[element] 
          })
          let case1 = '[fileds][0]=name&[fileds][1]=storetype&[fileds][2]=phone&[fileds][3]=activate&[fileds][4]=adress&[fileds][5]=url'
          let case2 = 'populate[info_target_default][fields][0]=name&populate[info_target_default][fields][1]=url'
          let case3 = 'populate[info][fields][0]=id&populate[info][fields][1]=name'
          let param = '/api/info-targets?pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage+'&'+case1+'&'+case2+'&'+case3+keyword
          let response = await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
          console.log(response)
          this.totalRecords = response.data.meta.pagination.total;
          return response
        }catch(error){
          this.error = error;
          console.log(error)
        }
    },
    async getFromDefault(){
      try{
          let keyword = ''
          Object.keys(this.serverParams.columnFilters).forEach(element => {
            keyword = keyword + '&filters['+element+'][$contains]='+this.serverParams.columnFilters[element] 
          })
          let case1 = 'populate[info_targets][fields][0]=name&populate[info_targets][fields][1]=storetype&populate[info_targets][fields][2]=phone&populate[info_targets][fields][3]=activate&populate[info_targets][fields][4]=adress&populate[info_targets][fields][5]=url&populate[info_targets][limit]='+this.serverParams.perPage+'&populate[info_targets][start]='+((this.serverParams.page*this.serverParams.perPage)-this.serverParams.perPage)
          let case2 = 'populate[info_targets][populate][info][fields][0]=name'
          let param = '/api/info-target-defaults/'+this.select_site_id+'?'+case1+'&'+case2
          let response = await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
          // this.totalRecords = response.data.meta.pagination.total;
          return response
        }catch(error){
          this.error = error;
          console.log(error)
        }
    },
    async getDefaultSite(){
      let param = '/api/info-target-defaults'
      const response =  await axios.get('https://op.cc-oo.club'+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
      response.data.data.forEach(element=>{
          element.attributes['id'] = element.id
          this.default_sites.push(element.attributes)
      })
    },
    
    loadItems() {
          this.isLoading = true
          this.default_sites = []
          this.rows = []
          this.getDefaultSite()
          if(this.select_site_id == 0){
            this.getFromServer().then(response => {
              this.rows = []
              response.data.data.forEach(element => {
                this.rows.push({
                  id : element.id,
                  name:element.attributes.name,
                  storetype : element.attributes.storetype,
                  phone : element.attributes.phone,
                  activate:element.attributes.activate,
                  sido : element.attributes.sido,
                  sigugun : element.attributes.sigugun,
                  level : element.attributes.level,
                  url : element.attributes.url,
                  adress : element.attributes.adress,
                  site : element.attributes.info_target_default.data.attributes.name,
                  origin_url : element.attributes.info_target_default.data.attributes.url,
                  info_id : element.attributes.info.data.id
                })
              })
              this.isLoading = false;
            });
          }else{
         
            this.getFromDefault().then(response=>{
            
              response.data.data.attributes.info_targets.data.forEach(element=>{
                this.rows.push({
                  id : element.id,
                  name:element.attributes.name,
                  storetype : element.attributes.storetype,
                  phone : element.attributes.phone,
                  activate:element.attributes.activate,
                  adress : element.attributes.adress,
                  url : element.attributes.url,
                  site : response.data.data.attributes.name,
                  origin_url : response.data.data.attributes.url,
                  info_id : element.attributes.info.data.id
                })
              })
              this.isLoading = false;
            })
          }
          
    }
 },
 async mounted (){

   this.loadItems()
 }

}
</script>

<style>

</style>