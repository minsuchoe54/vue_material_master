<template>
    <div class="row">
        <div class="col-lg-4 col-12 d-flex justify-content-start">
            <VueDatePicker v-model="date" locale="kr" style="width:70%;"></VueDatePicker>
            <button class="btn btn-info btn-xs" style="width:90px;" @click="loadItems">검색</button>
        </div>

    </div>

    <div class="d-flex justify-content-start">
        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle(null)" v-if="select_title==null">전체 <span class="badge bg-light text-dark">{{totalRecords}}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle(null)" v-else>전체 <span class="badge bg-light text-dark">{{totalRecords}}</span></button>

        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NEW_INFO')" v-if="select_title=='NEW_INFO' ">새로운업소 <span class="badge bg-light text-dark">{{ select_count_obj.NEW_INFO }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NEW_INFO')" v-else>새로운업소 <span class="badge bg-light text-dark">{{ select_count_obj.NEW_INFO }}</span></button>

        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NEW_TARGET')" v-if="select_title=='NEW_TARGET' ">새로운타겟 <span class="badge bg-light text-dark">{{ select_count_obj.NEW_TARGET }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NEW_TARGET')" v-else>새로운타겟 <span class="badge bg-light text-dark">{{ select_count_obj.NEW_TARGET }}</span></button>

        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('PHONE')" v-if="select_title=='PHONE' ">전화번호 <span class="badge bg-light text-dark">{{ select_count_obj.PHONE }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('PHONE')" v-else>전화번호 <span class="badge bg-light text-dark">{{ select_count_obj.PHONE }}</span></button>

        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NAME')" v-if="select_title=='NAME' ">업소명 <span class="badge bg-light text-dark">{{ select_count_obj.NAME }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('NAME')" v-else>업소명 <span class="badge bg-light text-dark">{{ select_count_obj.NAME }}</span></button>
        
        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('STORETYPE')" v-if="select_title=='STORETYPE' ">업종 <span class="badge bg-light text-dark">{{ select_count_obj.STORETYPE }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('STORETYPE')" v-else>업종 <span class="badge bg-light text-dark">{{ select_count_obj.STORETYPE }}</span></button>
        
        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('SIDO')" v-if="select_title=='SIDO' ">지역 <span class="badge bg-light text-dark">{{ select_count_obj.SIDO }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('SIDO')" v-else>지역 <span class="badge bg-light text-dark">{{ select_count_obj.SIDO }}</span></button>
        
        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('DELETE')" v-if="select_title=='DELETE' ">사라진업소 <span class="badge bg-light text-dark">{{ select_count_obj.DELETE }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('DELETE')" v-else>사라진업소 <span class="badge bg-light text-dark">{{ select_count_obj.DELETE }}</span></button>
        
        <button class="btn btn-primary btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('ACTIVATE')" v-if="select_title=='ACTIVATE' ">복구된업소 <span class="badge bg-light text-dark">{{ select_count_obj.ACTIVATE }}</span></button>
        <button class="btn btn-info btn-md mx-1 font-weight-bold text-xs" @click="SelectTitle('ACTIVATE')" v-else>복구된업소 <span class="badge bg-light text-dark">{{ select_count_obj.ACTIVATE }}</span></button>

    </div>
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
            perPage: 100,
            perPageDropdown: [25, 50, 100],
        }"
        :select-options="{
            enabled: true,
            selectionText: 'rows selected',
            selectOnCheckboxOnly: true,
            clearSelectionText: 'clear',
        
        }"
        :rows="rows"
        :columns="columns">
        <template #table-row="props">
            <span v-if="props.column.field == 'title'" >
                <template v-if="props.row.status == true" >
                    <input type="text" v-model="props.row.title" style="width:100%" class="bg-success" disabled>
                </template>
                <template v-else>
                    <input type="text" v-model="props.row.title" style="width:100%" >
                </template>
            </span>
            
            <span v-if="props.column.field == 'name'" >
                <input type="text" v-model="props.row.name">
            </span>
            <span v-if="props.column.field == 'storetype'" >
                <input type="text" v-model="props.row.storetype">
            </span>
            <span v-if="props.column.field == 'phone'" >
                <input type="text" v-model="props.row.phone" style="width:100%">
            </span>
            <span v-if="props.column.field == 'latlon'" >
                <template v-if="props.row.title=='NEW_INFO'">
                    <input type="text" v-model="props.row.latlon" style="width:100%">
                </template>
                <template v-else>
                    <input type="text" v-model="props.row.latlon" style="width:100%" disabled>
                </template>
            </span>
            <span v-if="props.column.field == 'info'" >
                <a class="font-weight-bold text-xs" style="cursor:pointer;" v-if="props.row.info.data!=null" @click="openModalInfo(`${props.row.info.data.id}`)">
                    {{ props.row.info.data.attributes.name }}|{{ props.row.info.data.id }}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:24px;"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                </a>
            </span>
            <span v-if="props.column.field == 'info_target'" >
                {{ props.row.info_target.data }}
            </span>
         
        </template>
        <template #selected-row-actions>
            <div class="d-flex content-justify-end">
                <button class="btn btn-success btn-md mx-2" @click="ChangeData">변경하기</button>    
                <button class="btn btn-danger btn-md mx-2" @click="DeleteData">삭제하기</button>    
            </div>
        </template>
    </vue-good-table>
    <ModalForInfo ref="myPreviewModalRef"></ModalForInfo>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import ModalForInfo from '../modals/ModalForInfo.vue'

import axios from 'axios'
export default {
    components:{
        VueDatePicker,
        ModalForInfo,

    },
    data () {
      return {
        post_test:null,
        date: new Date(),
        error: null,
        select_title : null,
        select_count_obj : {
            'NEW_INFO':0,
            'NEW_TARGET':0,
            'PHONE':0,
            'NAME':0,
            'STORETYPE':0,
            'SIDO':0,
            'ACTIVATE':0,
            'DELETE':0,
        },
        columns: [
            {
              label: "TITLE",
              field: "title",
              filterable: true,
              tdClass: 'text-center',
              thClass: 'text-center',
              width: '240px',
              filterOptions: {
                    enabled: true,
                    filterDropdownItems: [
                    { text: '새로운업소', value: 'NEW_INFO' },
                    { text: '새로운타겟', value: 'NEW_TARGET' },
                    { text: '전화번호', value: 'PHONE' },
                    { text: '업소명', value: 'NAME' },
                    { text: '업종', value: 'TYPE' },
                    { text: '위치', value: 'SIDO' },
                    { text: '사라진업소', value: 'DELETE' },
                    { text: '복구된업소', value: 'ACTIVATE' },
               
                    ]
                }
            },
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
                width: '255px',
                filterOptions: {
                    enabled: true,
                    placeholder: '',
                },
                
            },       
            {
                label: "adress",
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
                label: "latlon",
                field: "latlon",
                filterable: true,
                tdClass: 'text-center',
                thClass: 'text-center',
                width: '200px',
            },       

            {
                label: "info",
                field: "info",
                filterable: true,
                tdClass: 'text-center',
                thClass: 'text-center',
                filterOptions: {
                    enabled: true,
                    placeholder: '',
                }
            },       
                  
            {
                label: "info_target",
                field: "info_target",
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
          perPage: 100
        }
      }
    },
    methods:{
  
        DeleteData(){
            if (confirm("정말 삭제하시겠습니까??") == true){
                let data = this.$refs['my-table'].selectedRows
                data.forEach(async element => {
                    let param = '/api/bot-histories/'+element.id
                    await axios.delete(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                    .then(response=>{
                        if(response.status==200){
                            let index = this.rows.findIndex((x) => x.id == element.id);
                            this.rows.splice(index,1)
                        }
              
                    })
                })
            }
        },
        ChangeData(){
            let data = this.$refs['my-table'].selectedRows;
            //foreach start
            data.forEach(async element=>{ 
                let update_data = {}
                let titles = element.title.trim().split(' ')
                // NEW_INFO
                if(titles.includes('NEW_INFO')){
                    let latlon = element.latlon
                    if(latlon==undefined){
                        alert(element.name+"- 위치정보 미입력")
                    }else{
                        let param = '/api/bot-histories/'+element.id+'?[fields][0]=content&[fields][1]=idx&[fields][2]=url&[fields][3]=adress&populate[info_target_default][fields][0]=id'
                        await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                        .then(async response1=>{
                            if(response1.status==200){
                                let lat = latlon.split(',')[0].trim()
                                let lon = latlon.split(',')[1].trim()
                                await axios.get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x='+lon+'&y='+lat,{headers:{Authorization:'KakaoAK '+this.$store.state.KAKAO_KEY}})
                                .then(async response2=>{ 
                                    if(response2.status==200){
                                        let info_data = {'data':{ name:element.name,storetype:element.storetype, phone:element.phone, lat:lat, lon:lon, activate:false, level:2,
                                        sido:response2.data.documents[0].region_1depth_name, sigugun:response2.data.documents[0].region_2depth_name, adress:response2.data.documents[0].address_name,
                                        }}
                                        await axios.post(this.$store.state.API_URL+'/api/infos',info_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                                        .then(async response3=>{
                                            if(response3.status==200){
                                                let target_data = {'data':{
                                                    name:element.name,
                                                    storetype:element.storetype,
                                                    phone:element.phone,
                                                    adress:element.adress,
                                                    content:response1.data.data.attributes.content,
                                                    idx:response1.data.data.attributes.idx,
                                                    url:response1.data.data.attributes.url,
                                                    info:response3.data.data.id,
                                                    info_target_default:response1.data.data.attributes.info_target_default.data.id,
                                                    bot_histories:response1.data.data.id
                                                }}
                                                await axios.post(this.$store.state.API_URL+'/api/info-targets',target_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                                                .then(async response4=>{
                                                    if(response4.status==200){
                                                        let bot_data = {'data':{
                                                            status:true,
                                                            info:response3.data.data.id,
                                                        }}
                                                        await axios.put(this.$store.state.API_URL+'/api/bot-histories/'+response1.data.data.id,bot_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                                                        .then(response5=>{
                                                            if(response5.status==200){
                                                                let index = this.rows.findIndex(x=> x.id == element.id)
                                                                this.rows[index].status = true
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                        
                    }
                    
                }
                
                else if(titles.includes('NEW_TARGET')){
                    // NEW_TARGET
                    let data = {'data':{
                        name : element.name,
                        storetype : element.storetype,
                        phone : element.phone,
                        info : element.info.data.id,
                    }}
                    let param1 = '/api/bot-histories/'+element.id+'?[fields][0]=content&[fields][1]=idx&[fields][2]=url&[fields][3]=adress&populate[info_target_default][fields][0]=id'
                    await axios.get(this.$store.state.API_URL+param1,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                    .then(async response=>{
                        if(response.status==200){
                            data.data.content = response.data.data.attributes.content
                            data.data.idx = response.data.data.attributes.idx
                            data.data.url = response.data.data.attributes.url
                            data.data.adress = response.data.data.attributes.adress
                            data.data.info_target_default = response.data.data.attributes.info_target_default.data.id
                            data.data.bot_histories = element.id
                            let param2 = '/api/info-targets'
                            await axios.post(this.$store.state.API_URL+param2,data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                            .then(res=>{
                                if (res.status==200){
                                    let param3 = '/api/bot-histories/'+element.id
                                    let history_data = {'data':{status:true}}
                                    axios.put(this.$store.state.API_URL+param3,history_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                                    .then(res2=>{
                                        if (res2.status==200){
                                            let index = this.rows.findIndex(x=> x.id == element.id)
                                            this.rows[index].status = true
                                        }
                                    })
                                }
                            })
                        }
                    })
                }else{ 
                    // NAME PHONE ACTIVATE .....
                    titles.forEach(el=>{
                        if(el=='NAME'){
                            update_data.name = element.name.split('>')[1]
                        }else if(el=='STORETYPE'){
                            update_data.storetype = element.storetype.split('>')[1]
                        }else if(el=='PHONE'){
                            update_data.phone = element.phone.split('>')[1]
                        }else if(el=='ACTIVATE'){
                            update_data.activate = true
                        }else if(el=='DELETE'){
                            update_data.activate = false
                        }
                    })
                    let info_data = {'data':update_data}
                    let param = '/api/infos/'+element.info.data.id
                    await axios.put(this.$store.state.API_URL+param,info_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                    .then(async response=>{
                        if(response.status==200){
                            let bot_data = {'data': {status:true,title:element.title.trim()} }
                            let param2 = '/api/bot-histories/'+element.id
                            await axios.put(this.$store.state.API_URL+param2,bot_data,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                            .then(res=>{
                                if(res.status==200){
                                    let index = this.rows.findIndex(x=> x.id == element.id)
                                    this.rows[index].status = true
                                }
                            })
                        }
                    })
                }
                
            }) 
            //foreach finish
        },
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
        SelectTitle(title){
            this.select_title = title
            if(title==null){
                this.serverParams.columnFilters = {}
            }else{
                this.serverParams.columnFilters.title = title
                
            }
            
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
                let case1 = '[fields][0]=name&[fields][1]=storetype&[fields][2]=phone&[fields][3]=title&[fields][4]=adress&[fields][5]=activate&[fields][6]=createdAt&[fields][7]=status&sort[0]=createdAt%3Adesc'
                let case2 = 'populate[info][fields][0]=name'
                let case3 = 'populate[info_target][fields][0]=name'
                let case4 = 'filters[createdAt][$contains]='+this.FilterDate(this.date)

                let param = '/api/bot-histories?'
                +case1+'&'
                +case2+'&'
                +case3+'&'
                +case4+'&'
                +'pagination[page]='+this.serverParams.page+'&pagination[pageSize]='+this.serverParams.perPage+'&'+'&sort[0]='+this.serverParams.sort[0].field+'%3A'+this.serverParams.sort[0].type+keyword
                const response =  await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
            
                this.totalRecords = response.data.meta.pagination.total;

                let new_info = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=NEW_INFO'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let new_target = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=NEW_TARGET'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let phone = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=PHONE'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let name = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=NAME'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let storetype = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=STORETYPE'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let sido = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=SIDO'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let activate = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=ACTIVATE'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                let deleted = await axios.get(this.$store.state.API_URL+'/api/bot-histories?filters[title][$contains]=DELETE'+'&[fields][0]=id'+'&filters[createdAt][$contains]='+this.FilterDate(this.date),{headers: {Authorization: "Bearer "+this.$store.state.token}})
                
                this.select_count_obj.NEW_INFO = new_info.data.meta.pagination.total
                this.select_count_obj.NEW_TARGET = new_target.data.meta.pagination.total
                this.select_count_obj.PHONE = phone.data.meta.pagination.total
                this.select_count_obj.NAME = name.data.meta.pagination.total
                this.select_count_obj.STORETYPE = storetype.data.meta.pagination.total
                this.select_count_obj.SIDO = sido.data.meta.pagination.total
                this.select_count_obj.ACTIVATE = activate.data.meta.pagination.total
                this.select_count_obj.DELETE = deleted.data.meta.pagination.total
                return response
            } catch (error) {
            this.error = error;
            }
        },
        
        loadItems() {
                this.isLoading = true
                this.getFromServer(this.serverParams).then(response => {
                    this.rows = []
                    response.data.data.forEach(element => {
                        this.rows.push({
                            id:element.id,
                            name:element.attributes.name,
                            storetype:element.attributes.storetype,
                            phone:element.attributes.phone,
                            adress:element.attributes.adress,
                            info:element.attributes.info,
                            info_target:element.attributes.info_target,
                            title:element.attributes.title,
                            activate:element.attributes.activate,
                            createdAt:element.attributes.createdAt,
                            status:element.attributes.status,
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