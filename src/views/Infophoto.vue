<template>
    <div class="row">
     <div class="col-10">
       <div class="card my-4">
         <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
           <div
             class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
           >
             <h6 class="text-white text-capitalize ps-3">Projects table</h6>
           </div>
         </div>
         <div class="card-body px-2 pb-2">
           <div class="table-responsive p-0">
            <vue-good-table
            ref="my-table"
            mode="remote"
            v-on:selected-rows-change="selectionChanged"
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
            :select-options="{
                enabled: true,
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
            
            }"
            :rows="rows"
            :columns="columns">
        
            <template #table-row="props">
                <span v-if="props.column.field == 'webp_img'">
       
                <img v-bind:src="props.row.webp_img" style="width:200px">
                </span>
                <span v-if="props.column.field == 'info_targets'">
                    {{ props.row.info_targets.data.length }}
                </span>
                
            </template>
            <template #selected-row-actions>
                <button @click="ChangeTypeManager('main')">main</button>
                <button @click="ChangeTypeManager('manager')">manager</button>
                <button @click="ChangeTypeManager('course')">course</button>
                <button @click="ChangeTypeManager('option')">option</button>
                <button @click="ChangeTypeManager('event')">event</button>
                <button @click="ChangeTypeManager('notice')">notice</button>
                <button @click="ChangeTypeManager('phone')">phone</button>
                <button @click="ChangeTypeManager('banner')">banner</button>
                <button @click="ChangeTypeManager('etc')">etc</button>
            </template>
          </vue-good-table>
           </div>
         </div>
       </div>
     </div>
   </div>

</template>

<script>
// import MiniStatisticsCard from "./components/MiniStatisticsCard.vue";
import axios from 'axios'
export default {
   components:{
      //  MiniStatisticsCard
   },
   data () {
      return {
        error: null,
        search_keyword : null,
        columns: [
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
            {
              label: "Type",
              field: "type",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },
            {
              label: "img",
              field: "webp_img",
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
          let param = '/api/info-photos?pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage+'&[fields][0]=type&[fields][1]=webp_img&'+'&sort[0]='+this.serverParams.sort[0].field+'%3A'+this.serverParams.sort[0].type+keyword
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
                this.rows.push({
                    id:element.id,
                    type:element.attributes.type,
                    webp_img:element.attributes.webp_img
                })
              })
              this.isLoading = false;
              
     
        });
      },
      ChangeTypeManager(param){ //main,manager,course,event,notice,phone,etc
      
        let rows = this.$refs['my-table'].selectedRows
        rows.forEach(async element =>{    
            let id = element.id
            let params = '/api/info-photos/'+id
            let data = {'data':{'type':param}}
            await axios.put('https://op.cc-oo.club'+params,data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
        })
        this.loadItems()
        
        
      }
    },
    async mounted (){
      this.loadItems()
    }
   
  }
</script>