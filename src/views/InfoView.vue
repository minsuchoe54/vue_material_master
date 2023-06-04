<template>
     
<div class="card my-4">
  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
    <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
      <h6 class="text-white text-capitalize ps-3">Projects table</h6>
    </div>
  </div>
      <div class="mt-3 mb-5">
        <div class="d-flex justify-content-center step-box ">
            <div class="step successd">
              <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-pencil-square b-icon bi" style="margin-top: 12px; color: white;"><g  transform="translate(8 8) scale(1.2 1.2) translate(-8 -8)"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></g></svg> 
          
              <p style="color:black;margin-top:12px;"><b>정보</b></p>
            </div> 
            <div class="step-line"></div> 
            <div class="step active">
              <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="신용 카드 채우기" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-credit-card-fill b-icon bi" style="margin-top: 12px; color: white;"><g  transform="translate(8 8) scale(1.2 1.2) translate(-8 -8)"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"></path></g></svg> 
              <p style="color:black;margin-top:12px;"><b>사진</b></p>
            </div> 
            <div class="step-line"></div>
            <div class="step">
              <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="체크2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-check2 b-icon bi" style="margin-top: 12px; color: rgb(216, 216, 216);"><g  transform="translate(8 8) scale(1.8 1.8) translate(-8 -8)"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></g></svg> 
              <p style="color:black;margin-top:12px;"><b>완료</b></p>
              </div>
          </div>
        </div>
  <div class="card-body px-5 pb-2">
        <InfoTable />
  </div>
</div>
  
 
</template>

<script>
import InfoTable from './tables/InfoTable'
export default {
    components:{
      InfoTable
    }
 
}
</script>

<style>

.step.successd {
    background-color: #51f379;
    border: solid 2px #51f379;
    text-align: center;
}
.step-line {
    width: 75px;
    height: 3px;
    background-color: #d8d8d8;
    margin-top: 21px;
}
.step {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: white;
    border: solid 2px #d8d8d8;
    text-align: center;
}
.step.active {
    background-color: #e93f63;
    border: solid 2px #e93f63;
    text-align: center;
}
</style>