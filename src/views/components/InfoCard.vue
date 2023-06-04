<template>
    <div class="mx-5" v-if="infoData">
    
        <input type="text" id="input-custom0" class="mt-1" :value="infoData.data.attributes.activate">
        <br>
        <input type="text" id="input-custom1" class="mt-1" :value="infoData.data.attributes.name">
        <br>
        <select :value="infoData.data.attributes.storetype" id="input-custom2">
            <option v-for="list,index in storetypeKr" :key="index" :value="list.value">
                {{ list.text }}
            </option>
        </select>
        <br>
        <input type="text" id="input-custom3" class="mt-1" :value="infoData.data.attributes.phone">
        <br>
        <select :value="infoData.data.attributes.open" id="input-custom4" class="mt-1">
            <option v-for="list,index in time" :key="index" :value="list">
                {{ list }}
            </option>
        </select>
        <select :value="infoData.data.attributes.close" id="input-custom5" class="mt-1">
            <option v-for="list,index in time" :key="index" :value="list">
                {{ list }}
            </option>
        </select><br>
        <input type="text" id="input-custom6" class="mt-1" :value="infoData.data.attributes.simple_adress">
        <br>
        <input type="text" id="input-custom7" class="mt-1" :value="infoData.data.attributes.introduce">
        <br>
        <input type="text" id="input-custom8" class="mt-1" :value="infoData.data.attributes.country">
        <br>
        <input type="text" id="input-custom9" class="mt-1" :value="infoData.data.attributes.tele">
        <input type="text" id="input-custom10" class="mt-1" :value="infoData.data.attributes.kakao">
        <input type="text" id="input-custom11" class="mt-1" :value="infoData.data.attributes.line">
        <br>
        <select id="input-custom99" class="mt-1" :value="infoData.data.attributes.level">
            <option v-for="list,index in level" :key="index" :value="list">
                {{ list }}
            </option>
        </select><br>


        <button class-="btn btn-primary" @click="saveinfo(infoData.data.id)">완료</button>
    </div>
</template>
  
<script>


  
  export default {
    name: "InfoCard",
    
    props:{
        infoData : Object,
    },
    data(){
        return {
            info_main_data : Object,
            storetypeKr:[
                { text: '오피', value: '오피' },
                { text: '휴게텔', value: '휴게텔' },
                { text: '건마', value: '건마' },
                { text: '안마', value: '안마' },
                { text: '출장', value: '출장' },
                { text: '유흥주점', value: '유흥주점' },
                { text: '핸플/립', value: '핸플/립' },        
                { text: '키스방', value: '키스방' }, 
                { text: '트젠/리얼', value: '트젠/리얼' }, 
            ],
            time : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24],
            level : [-2,-1,0,1,2,3,4,5,6,7],
            
        }
    },
    methods:{
        saveinfo(id){
            let activate = document.getElementById('input-custom0').value
            let name = document.getElementById('input-custom1').value
            let storetype = document.getElementById('input-custom2').value
            let phone = document.getElementById('input-custom3').value
            let open = document.getElementById('input-custom4').value
            let close = document.getElementById('input-custom5').value
            let simple_adress = document.getElementById('input-custom6').value
            let introduce = document.getElementById('input-custom7').value
            let country = document.getElementById('input-custom8').value
            let tele = document.getElementById('input-custom9').value
            let kakao = document.getElementById('input-custom10').value
            let line = document.getElementById('input-custom11').value
            let level = document.getElementById('input-custom99').value
            let data = {'data':
                {
                    activate:activate,
                    name:name,storetype:storetype,phone:phone,open:open,close:close,simple_adress:simple_adress,introduce:introduce,country:country,tele:tele,kakao:kakao,line:line,level:level,}
            }
            this.$emit('saveinfo', id, data)
        }
    },
    
 
  };
  </script>
  