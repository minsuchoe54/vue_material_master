<template>
<div class="card-body px-0 pb-2">
    <div class="table-responsive p-0">
        <div class="d-flex justify-content-center mx-3 card">
            <div class="comment-box ml-2 mx-3">
                <div class="rating"> 
                    <input type="radio" name="rating" value="5" id="5" v-model="star"><label for="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4" v-model="star"><label for="4">☆</label> 
                    <input type="radio" name="rating" value="3" id="3" v-model="star"><label for="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" v-model="star"><label for="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" v-model="star"><label for="1">☆</label>
                </div>
                <div class="comment-area">
                    <textarea class="form-control" placeholder="what is your review?"  rows="4" v-model="content"></textarea>
                </div>
                <div class="comment-btns mt-2 d-flex justify-content-center">
                    <div class="pull-right">
                        <button class="btn btn-success send btn-sm" @click="savecomment">댓글등록 <i class="fa fa-long-arrow-right ml-1"></i></button>      
                    </div>
                </div>
            </div>
        </div>
        <!-- <table class="table align-items-center mb-0">
            <thead>
                <tr class="">
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">  </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> date </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> ip  </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> content </th>
                
                    <th class="text-secondary opacity-7"></th>
                </tr>
            </thead>
            <tbody v-if="infoData.data.attributes.info_comments.data">
                <tr v-for="list,index in infoData.data.attributes.info_comments.data" :key="index">
                    
                    <td>
                        <a class="text-danger font-weight-bold text-xs" style="cursor:pointer;" @click="deletecomment(list.id)"> 삭제하기</a>
                    </td>
                    <td>
                        <div class="d-flex justify-content-start">
                            <span class="text-xs font-weight-bold mb-0">{{ formatDate(list.attributes.updatedAt) }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-start">
                            <span class="text-xs text-secondary mb-0">{{ list.attributes.ip }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-start px-2 py-1">
                            <span class="text-xs text-secondary mb-0" v-html="list.attributes.content"></span>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-start">
                            <span class="text-xs text-secondary mb-0">{{infoData.data.attributes.name}}[{{infoData.data.id}}]</span>
                        </div>
                    </td>
                    
                   
                    
                </tr>
            </tbody>
        </table> -->
    </div>
    

 
</div>

<div class="container" id="app">
  <div class="list-group-wrapper">
  
    <transition name="fade">
      <div class="loading" v-show="loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    <ul class="list-group" id="infinite-list">
      <li class="list-group-item" v-for="list,index in items" :key="index" :value="list">
        {{ list.attributes.content }}<br>
        <a class="text-danger font-weight-bold text-xs" style="cursor:pointer;" @click="deletecomment(list.id)"> 삭제하기</a><br>
        <span class="text-xs font-weight-bold mb-0">{{ formatDate(list.attributes.updatedAt) }}</span><br>
        <span class="text-xs text-secondary mb-0">{{ list.attributes.ip }}</span><br>
        <span class="text-xs text-secondary mb-0">{{infoData.data.attributes.name}}[{{infoData.data.id}}]</span>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
import axios from 'axios';
/* eslint-disable no-unused-vars */
export default {
    props:{
        infoData:Object
    },
    components:{
 
    },
    data(){
        return{
            star : 0,
            content : null,

            loading: false,
            nextItem: 0,
            
            page : 1,
            items: [],

        }
    },
    mounted(){
        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-list');
        listElm.addEventListener('scroll', e => {
            if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
                this.loadMore();
            }
        });
        
        // Initially load some items.
        if(this.nextItem==0){
            this.infoData.data.attributes.info_comments.data.forEach(element=>{
                this.items.push(element)
                this.nextItem++
            })
        }
        

    },
    methods:{
        async loadMore(){
            /** This is only for this demo, you could 
                * replace the following with code to hit 
                * an endpoint to pull in more data. **/
            this.loading = true;
        
            let case1 = '[fields][0]=name'
            let case2 = 'populate[info_comments][fields][0]=content&populate[info_comments][fields][1]=ip&populate[info_comments][fields][2]=updatedAt&populate[info_comments][sort][0]=updatedAt%3Adesc&populate[info_comments][limit]=20&populate[info_comments][start]='+this.nextItem
            let param = '/api/infos/'+this.infoData.data.id +'?'+ case1 +'&'+ case2
            await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(res=>{
                if(res.status==200){
                    // console.log(res.data.data.attributes.info_comments)
                    res.data.data.attributes.info_comments.data.forEach(elelment=>{
                        this.items.push(elelment)
                        this.nextItem++
                    })
                    this.loading = false;
                }
            })
            // let param = '/api/info-comments?filters[infos][$eq]=7'
            // await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
            // .then(res=>{
                // res.data.data.forEach(element=>{
                //     this.items.push(element)
                // })
                
                // this.nextItem++
                
                
            // })
            // setTimeout(e => {
            //     for (var i = 0; i < 20; i++) {
            //         this.items.push('Item ' + this.nextItem++);
            //         console.log(i)
            //     }
            //     this.loading = false;
                
            // }, 200);
            /**************************************/
      
        },
        async deletecomment(id){
            if (confirm("정말 삭제하시겠습니까??") == true){
                let param = '/api/info-comments/'+id
                axios.delete(this.$store.state.API_URL+param, {headers: {Authorization: "Bearer "+this.$store.state.token}} )
                .then(res=>{
                    if(res.status==200){
                        let index = this.items.findIndex((x) => x.id == id);
                        this.items.splice(index,1)
                    }
                })
            }
            
        },
        async savecomment(){
           
            let random_1 = Math.floor(Math.random() * 255)
            let random_2 = Math.floor(Math.random() * 255)
            let data = {'data':
                {content:this.content,ip:random_1+'.'+random_2+'.255.255',info:this.infoData.data.id}
            }
            let param = '/api/info-comments'
            await axios.post(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}} )
            .then(res=>{
                console.log(this.items.unshift(res.data.data))

            })
            this.content = null
        },
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
            return [year, month, day].join('-');
        }
    }
}
/* eslint-disable no-unused-vars */
</script>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;

    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 6px;

}


.comment-area textarea{
   resize: none; 
        border: 1px solid #ad9f9f;
}



.send {
    color: #fff;
    background-color: #ff0000;
    border-color: #ff0000;
}



.rating {
 display: flex;
        margin-top: -10px;
    flex-direction: row-reverse;
    margin-left: -4px;
        float: left;
}

.rating>input {
    display: none
}

.rating>label {
        position: relative;
    width: 19px;
    font-size: 25px;
    color: #ff0000;
    cursor: pointer;
}

.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important
}

.rating>input:checked~label:before {
    opacity: 1
}

.rating:hover>input:checked~label:before {
    opacity: 0.4
}








.container {
  /* padding: 40px 80px 15px 80px; */
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
}


.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 50vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  /* background: $purple; */
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>