<template>
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
            <span v-if="props.column.field == 'info_targets'">
                {{ props.row.info_targets.data.length }}
            </span>
            
        </template>
    </vue-good-table>
</template>

<script>
import axios from 'axios'
export default {
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
              label: "subject",
              field: "subject",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },
              
          {
              label: "blog_category_name",
              field: "blog_category_name",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              filterOptions: {
                  enabled: true,
                  placeholder: '',
              }
            },       
          {
              label: "createdAt",
              field: "createdAt",
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
          let param = '/api/blogs?pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage+'&[fields][0]=subject&[fields][1]=createdAt&populate=*&sort[0]='+this.serverParams.sort[0].field+'%3A'+this.serverParams.sort[0].type+keyword
          const response =  await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
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
                    subject:element.attributes.subject,
                    blog_category_name: element.attributes.blog_category.data.attributes.name,
                    createdAt:element.attributes.createdAt,
            
                })
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

</style>