<template>
  <div class="position-fixed top-13 end-10 z-index-2" style="margin: auto;width: 50%;padding: 10px;">
    <material-snackbar
        v-if="snackbar === 'danger'"
        title="delete"
        date="1 seconds ago"
        description="삭제되었습니다"
        :icon="{ component: 'campaign', color: 'white' }"
        color="danger"
        :close-handler="closeSnackbar"
    />
  </div>
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
            <span v-if="props.column.field == 'id'" >
              <a class="font-weight-bold text-xs text-danger" style="cursor:pointer;" @click="DeleteComment(`${props.row.id}`)">삭제하기</a>
            </span>
            <span v-if="props.column.field == 'storetype'" >
             {{ props.row.storetype }} - {{ props.row.sido }}
            </span>
            <span v-if="props.column.field == 'content'" >
            <p v-html="props.row.content"></p>
            </span>
        
            <span v-if="props.column.field == 'updatedAt'">
              {{ FilterDate(props.row.updatedAt) }}
            </span>
            
          
            <span v-if="props.column.field == 'info_id'">
              <a class="font-weight-bold text-xs">{{ props.row.info_id }}[ {{ props.row.name }}]</a>
            <a class="mx-2" style="cursor:pointer;" @click="openModalInfo(`${props.row.info_id}`)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:24px;"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </a>
            </span>
        </template>
        
    </vue-good-table>
    <ModalForInfo ref="myPreviewModalRef"></ModalForInfo>
</template>
    
<script>
import axios from 'axios'
import ModalForInfo from '../modals/ModalForInfo.vue'
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
export default {
        components:{
          ModalForInfo,
          MaterialSnackbar
        },
        data () {
          return {
            error: null,
            snackbar : null,
            columns: [
                {
                  label: "id",
                  field: "id",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  
                },
                {
                  label: "info",
                  field: "info_id",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  
                },
                {
                  label: "storetype",
                  field: "storetype",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  
                },
         
                {
                  label: "content",
                  field: "content",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  filterOptions: {
                      enabled: true,
                      placeholder: '',
                  }
                },
                {
                  label: "update",
                  field: "updatedAt",
                  filterable: true,
                  tdClass: 'text-center',
                  thClass: 'text-center',
                  filterOptions: {
                      enabled: true,
                      placeholder: '',
                  }
                },
                {
                  label: "ip",
                  field: "ip",
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
        FilterDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
            return [year, month, day].join('-');
        },
        closeSnackbar(){
          this.snackbar = null;
        },
        async DeleteComment(id){
          if (confirm("정말 삭제하시겠습니까??") == true){
            let param = '/api/info-comments/'+id
            await axios.delete(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(res=>{
              if(res.status==200){
                let index = this.rows.findIndex((x) => x.id == id);
                this.rows.splice(index,1)
                this.snackbar = 'danger'
              
              }
              
            })
          }
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
            let case1 = '[fields][0]=content&[fields][1]=ip&[fields][2]=updatedAt&[sort][0]=updatedAt%3Adesc'
            let case2 = 'populate[info][fields][0]=name&populate[info][fields][0]=storetype&populate[info][fields][0]=sido'
            let case3 = 'populate[info][populate][info_targets][fields][0]=name'
            let param = '/api/info-comments?pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage

            +'&'+case1
            +'&'+case2
            +'&'+case3
            +'&sort[0]='+this.serverParams.sort[0].field+'%3A'+this.serverParams.sort[0].type+keyword
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
                  if(element.attributes.info.data !=null){
                    this.rows.push({
                      id:element.id,
                      content:element.attributes.content,
                      updatedAt:element.attributes.updatedAt,
                      ip:element.attributes.ip,
                      info_id:element.attributes.info.data.id,
                      name:element.attributes.info.data.attributes.name,
                      storetype:element.attributes.info.data.attributes.storetype,
                      sido:element.attributes.info.data.attributes.sido,
                      
                    })
                  }
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