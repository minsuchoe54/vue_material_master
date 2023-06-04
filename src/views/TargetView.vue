<template>
    <div class="row">
     <div class="col-12">
       <div class="card my-4">
         <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
           <div
             class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
           >
             <h6 class="text-white text-capitalize ps-3">Projects table</h6>
           </div>
         </div>
         <div class="card-body px-5 pb-2">
          <TargetTable />
         </div>
       </div>
     </div>
     
   </div>

</template>

<script>
// import axios from 'axios'
import TargetTable from './tables/TargetTable'
export default {
   components:{
    TargetTable,
   },
   data () {
     return {}
   },
   methods:{

   }

}
</script>

<style>

</style>