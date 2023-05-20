<template>
   

  <div class="container-fluid">
  
    <div
      class="page-header min-height-150 border-radius-xl mt-4" style="background-image: url('/image/photo-1531512073830-ba890ca4eba2.avif');">
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>

    <div class="card card-body mx-3 mx-md-4 mt-n6">
      <div class="mx-auto mt-1 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist" >
              <li class="nav-item">
                <a class="px-0 py-1 mb-0 nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true" style="cursor:pointer" @click="script=false"> 
                  <svg class="text-dark" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" > <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero" > <g transform="translate(1716.000000, 291.000000)"> <g transform="translate(603.000000, 0.000000)"> <path class="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z" /> <path class="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7" /> <path class="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7" /> </g> </g> </g> </g> </svg>
                  <span class="ms-1">업소정보</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" style="cursor:pointer" @click="script=true"> 
                  <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                      <title>document</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" ><g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero" ><g transform="translate(1716.000000, 291.000000)"><g transform="translate(154.000000, 300.000000)"><path class="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379" /><path class="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" /></g></g></g></g>
                  </svg>
                <span class="ms-1" >스크립트</span>
                </a>
              </li>
              <!-- <li class="nav-item">
                <a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                  <svg class="text-dark" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>settings</title>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"/>
                            <path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957" />
                            <path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Settings</span>
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      <!-- </div> -->
    
      <div class="row">
   
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 position-relative">
            <div class="card card-plain h-100">
              <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="save_info_loader || save_script_loader" ></sync-loader>
              <div v-bind:class="'my-card-list2 d-flex border rounded'" v-else>
                <div class="position-relative my-cursor" v-on:click="openModalPreview(info_data)">
                    <img v-bind:src="info_data.level >= 3 ? '/image/thumb1.webp' : '/image/thumb2.webp'" class="card-img-top2 thumbnail-blur" style="width:100%"  />
                    <div class="thumbnail-unvisit-7 thumbnail-outer">
                        <table class="table table-borderless thumbnail-inner my-font-thumbnail-1">
                            <tr class="align-bottom thumbnail-inner-title-sm-sm my-font-white">
                              <td ><b>{{ info_data.storetype }} | </b></td>
                            </tr>
                      
                            <tr class="thumbnail-inner-name-sm my-font-white">
                                <td v-if="info_data.name.length > 10" colspan="3">{{ info_data.name.slice(0, 10) }}...</td>
                                <td v-else colspan="3"><b>{{ info_data.name }}</b></td>
                            </tr>
                            <tr class="thumbnail-inner-logo-sm">
                                <td colspan="3" class="my-font-thumbnail-2"><span class="my-font-theme">OP</span><span class="my-font-gray">Map</span></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="p-2" style="width:70%;">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="my-font-08">
                            <span  class="badge bg-warning me-1">UP</span>
                            <span class="badge bg-danger me-1">HOT</span>     
                            
                        </div>
                        <div class="my-font-09" style="margin-left: auto;">
                          
                          <svg class="svg-inline--fa fa-up-right-from-square fa-lg my-font-theme" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:18px;color:#ff385c;float: right;cursor:pointer;"><path class="" fill="currentColor" d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path></svg>
                          
                        </div>
                        <div class="my-font-09">
                            <span
                                v-on:click="openModalFn('list')"
                                class="my-cursor"
                            >
                                <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="my-font-theme" />
                            </span>
                        </div>
                    </div>
                    <div class="my-font-10 my-font-b7 ellipsis2">
                        <span class="me-1">[{{ info_data.storetype }}]</span>
                        <span v-if="info_data.name.length > 10">{{ data.name.slice(0, 10) }}...</span>
                        <span v-else >{{ info_data.name}}</span>
                      
                    </div>
                    <div class="my-font-08 my-font-b5 my-font-gray">
                        <span v-if="info_data.simple_adress">{{ info_data.simple_adress }}</span>
                        <span v-else>{{ info_data.sigugun }}</span>
                    </div>
                    <hr>
                    <div class="my-font-08 my-font-b5">
                        <span v-if="info_data.introduce">{{ info_data.introduce }}</span>
                        <span v-else>미입력</span>
                    </div>
                  
                    <div class="my-font-08">
                        <span>전화번호</span>
                        <span class="mx-1">:</span>
                        <a v-bind:href="`tel:${info_data.phone}`" v-on:click="eventCallFn(info_data.id)">{{ info_data.phone}}</a>
                    </div>
                    <div class="my-font-08">
                        <span>영업시간</span>
                        <span class="mx-1">:</span>
                        <span v-if="info_data.open && info_data.close">
                            <span v-if="info_data.open < 12">오전 {{ info_data.open }}시 ~ </span>
                            <span v-if="info_data.open == 12">오후 {{ info_data.open }}시 ~ </span>
                            <span v-if="info_data.open > 12 && info_data.open < 24">오후 {{ info_data.open - 12 }}시 ~ </span>
                            <span v-if="info_data.close < 12">오전 {{ info_data.close }}시</span>
                            <span v-if="info_data.close == 12">오후 {{ info_data.close }}시 ~ </span>
                            <span v-if="info_data.close > 12 && info_data.close < 24">오후 {{ info_data.close - 12 }}시</span>
                            <span v-if="info_data.open == 24 && info_data.close == 24">24시간</span>
                        </span>
                        <span v-else>미입력</span>
                    </div>
                </div>
      
              </div>
            
              <div class="p-3 card-body">
             
                <ul class="list-group">
                  <li class="px-0 border-0 list-group-item">
                    <material-switch
                      v-if="info_data.activate"
                      id="flexSwitchCheckDefault"
                      class="ps-0 ms-0"
                      name="flexSwitchCheckDefault"
                      label-class="mb-0 text-body text-truncate w-2300"
                      v-model="info_data.activate"
                      checked>
                      영업중
                    </material-switch>
                    <material-switch
                      v-else
                        id="flexSwitchCheckDefault"
                        class="ps-0 ms-0"
                        name="flexSwitchCheckDefault"
                        label-class="mb-0 text-body text-truncate w-200"
                        v-model="info_data.activate">
                      영엽중지
                    </material-switch>
                  </li>
              
                  
                  <li class="px-0 border-0 list-group-item">
                    <input id="input-custom" type="text" label="id" v-model="info_data.name">
                  </li>
                  <li class="px-0 border-0 list-group-item">
                      <select id="input-custom" v-model="info_data.storetype">
                        <option v-for="(list, index) in storetypeKr" :key="index" :value="list.value">{{ list.text }}</option>
                      </select>
                  </li>
                  <li class="px-0 border-0 list-group-item">
                    <input id="input-custom" type="text" label="id" v-model="info_data.phone">
                  </li>
                  <!-- time -->
                  <li class="px-0 border-0 list-group-item">
                      <div class="row">
                        <div class="col-6">
                          <select id="input-custom" v-model="info_data.open">
                            <option v-for="(list, index) in time" :key="index" :value="list">{{ list }}</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <select id="input-custom" v-model="info_data.close">
                            <option v-for="(list, index) in time" :key="index" :value="list">{{ list }}</option>
                          </select>
                        </div>
                      </div>

                  </li>
                  <li class="px-0 border-0 list-group-item">
                    <div class="row">
                      <div class="col-4">
                        <input id="input-custom" type="text" label="id" v-model="info_data.tele"  placeholder="Telegram">
                      </div>
                      <div class="col-4">
                        <input id="input-custom" type="text" label="id" v-model="info_data.kakao"  placeholder="Kakao">
                      </div>
                      <div class="col-4">
                        <input id="input-custom" type="text" label="id" v-model="info_data.line"  placeholder="Line">
                      </div>
                    </div>
                    
                  </li>
                  <li class="px-0 border-0 list-group-item">
                      <select id="input-custom" v-model="info_data.level">
                        <option v-for="(list, index) in level" :key="index" :value="list">{{ list }}</option>
                      </select>
                  </li>
                  <li class="px-0 border-0 list-group-item">
                    <input id="input-custom" type="text" label="id" placeholder="대략적인 위치" v-model="info_data.simple_adress">
                  </li>
                  <li class="px-0 border-0 list-group-item">
                    <input id="input-custom" type="text" label="id" placeholder="한줄소개" v-model="info_data.introduce" >
                  </li>
                 
                </ul>
                
                  <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="save_info_loader"></sync-loader>
                  <material-button v-else
                    class="my-2 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth @click="SaveInfo()">
                    저장하기
                  </material-button>
                
              </div>
            </div>
      
          </div>
          
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-relative" v-if="script">
            <div class="card">
              <textarea v-model="info_data.content_1" rows="27"></textarea>
              <div class="d-flex justify-content-center">
                <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="save_script_loader"></sync-loader>
                <button class="btn btn-success btn-lg mt-3" @click="SaveScript" v-else>프로필게시</button>
              </div>
              
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-relative" v-else>
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-12">
                <div class="card card-plain h-100">
                  <div class="p-3 pb-0 card-header">
                    <h6 class="mb-0">업소위치</h6>
                  </div>
                  <div class="p-3 card-body">
                    <div v-if="info_data.lat">
                      <Map :lat="info_data.lat" :lon="info_data.lon"  @setuplatlon="setuplatlon" />
                    </div>
                    <input id="input-custom" type="text" label="id" style="margin-top:10px;width:50%" v-model="info_data.lat" >
                    <input id="input-custom" type="text" label="id" style="margin-top:10px;width:50%" v-model="info_data.lon" >
                    <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="save_map_loader"></sync-loader>
                      <material-button v-else
                        class="my-2 mb-2"
                        variant="gradient"
                        color="success"
                        fullWidth @click="SaveMap">
                        저장하기
                      </material-button>
                  </div>
                  
                  
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-12">
                <!-- {{ info_data.info_photos.data }} -->
                <ProfileDrag :info_photos="info_photos" @changetype="changetype" @fileupload="fileupload" @deletephoto="deletephoto" @savephoto="savephoto"/>
              </div>
            </div>
          </div>

   
       
        <div class="row mt-5">
          <div class="col-12">
            <div class="d-flex content-justify-start">
              <h6 class="mb-1 mx-3">Managers</h6>
              <h6 class="mb-1">휴무</h6>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="show" v-model="info_data.photo_activate_show_type">
                <label class="form-check-label" for="inlineRadio1">노출</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="noshow" v-model="info_data.photo_activate_show_type">
                <label class="form-check-label" for="inlineRadio2">미노출</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="dark" v-model="info_data.photo_activate_show_type">
                <label class="form-check-label" for="inlineRadio3" >어둡게</label>
              </div>
             
            </div>
       
            <div class="row">
           
              <template v-if="manager_more==false">
              <div class="mb-3 col-xl-3 col-md-6 mb-xl-0 mt-5" v-for="list,index in manager_data" :key="index">
                  <template v-if="index<4">
                  <div class="card card-blog card-plain">
                    <div class="card-header p-0 mt-n4 mx-3">
                      <a class="shadow-xl d-block border-radius-xl">
                        <img
                          v-if="list.activate"
                          :src="list.webp_img"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                      
                        />
                        <img
                          v-else
                          :src="list.webp_img"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                          id="none_lineup"
                        />
                      </a>
                    </div>
                    <div class="p-3 card-body">
                      <a href="javascript:;">
                        <h5>{{ list.name }}<span v-if="list.premium">+{{ list.premium}}</span></h5>
                      </a>
                      <p class="mb-2 text-sm text-gradient text-dark">{{ list.age+` / `+ list.height +` / `+ list.weight +` / `+ list.breast }}</p>
                      <p class="mb-4 text-sm">
                        {{ list.content }}
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <material-switch
                        v-if="list.activate"
                          id="flexSwitchCheckDefault"
                          class="ps-0 ms-0"
                          name="flexSwitchCheckDefault"
                          label-class="mb-0 text-body text-truncate w-2300"
                          @change="LineupChange(index)"
                          checked>
                        출근
                      </material-switch>
                        <material-switch
                        v-else
                          id="flexSwitchCheckDefault"
                          class="none_lineup"
                          name="flexSwitchCheckDefault"
                          label-class="mb-0 text-body text-truncate w-2300"
                          @change="LineupChange(index)"
                          >
                        휴무
                      </material-switch>
                        <button type="button" class="mb-0 btn btn-sm btn-outline-success" v-on:click="openModalFn(list)"> 수정</button>
                        <button type="button" class="mb-0 btn btn-sm btn-outline-danger" v-on:click="deletephoto(list.id)"> 삭제</button>
                       
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              </template>
              <template v-else>
              <div class="mb-3 col-xl-3 col-md-6 mb-xl-0 mt-5" v-for="list,index in manager_data" :key="index">
                  <div class="card card-blog card-plain">
                    <div class="card-header p-0 mt-n4 mx-3">
                      <a class="shadow-xl d-block border-radius-xl">
                        <img
                          v-if="list.activate"
                          :src="list.webp_img"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                      
                        />
                        <img
                          v-else
                          :src="list.webp_img"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                          id="none_lineup"
                        />
                      </a>
                    </div>
                    <div class="p-3 card-body">
                      <a href="javascript:;">
                        <h5>{{ list.name }}<span v-if="list.premium">+{{ list.premium}}</span></h5>
                      </a>
                      <p class="mb-2 text-sm text-gradient text-dark">{{ list.age+` / `+ list.height +` / `+ list.weight +` / `+ list.breast }}</p>
                      <p class="mb-4 text-sm">
                        {{ description }}
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <material-switch
                        v-if="list.activate"
                          id="flexSwitchCheckDefault"
                          class="ps-0 ms-0"
                          name="flexSwitchCheckDefault"
                          label-class="mb-0 text-body text-truncate w-2300"
                          @change="LineupChange(index)"
                          checked>
                        출근
                      </material-switch>
                        <material-switch
                        v-else
                          id="flexSwitchCheckDefault"
                          class="none_lineup"
                          name="flexSwitchCheckDefault"
                          label-class="mb-0 text-body text-truncate w-2300"
                          @change="LineupChange(index)"
                          >
                        휴무
                      </material-switch>
                        <button type="button" class="mb-0 btn btn-sm btn-outline-success" v-on:click="openModalFn(list)"> 수정</button>
                        <button type="button" class="mb-0 btn btn-sm btn-outline-danger" v-on:click="deletephoto(list.id)"> 삭제</button>
                        <div class="mt-2 avatar-group">
                          <a
                            v-for="({ image: authorImage, name }, index) of authors"
                            :key="index"
                            href="javascript:;"
                            class="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            :title="name"
                          >
                            <img :alt="authorImage" :src="authorImage" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
               
              </div>
              </template>
            </div>
          </div>
          <div class="mb-5 ps-3 text-center">
         
            <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="save_manager_activate_loader"></sync-loader>
            <button class="btn btn-lg mb-0 bg-success my-2 mb-2 text-white mx-2" @click="SaveManagerActivate" v-else>프로필게시</button>
            <button class="btn btn-lg mb-0 bg-danger my-2 mb-2 text-white" v-if="manager_more" @click="manager_more=false">접기</button>
            <button class="btn btn-lg mb-0 bg-warning my-2 mb-2 text-white" v-else @click="manager_more=true"> + 더보기</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalForManager ref="myListModalRef"></ModalForManager>
  <ModalForPreview ref="myPreviewModalRef"></ModalForPreview>

</template>

<script>

import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import axios from 'axios';
import ProfileDrag from './components/ProfileDrag.vue'
import ModalForManager from "./components/ModalForManager.vue";
import ModalForPreview from "./components/ModalForPreview.vue";
import Map from './components/Map.vue'
// import { AtomSpinner } from 'epic-spinners'
// import { HalfCircleSpinner } from "epic-spinners"
// import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min.js'

import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default {
  name: "profile-overview",
  data() {
    return {
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
   
      info_data : Object,
      info_photos:Object,
      manager_data : [],
      photo_data : Object,
      script : false,
      manager_more : false,

      
      save_info_loader : false,
      save_map_loader : false,
      save_script_loader : false,
      file_input_loader : false,
      save_manager_activate_loader : false,
    };
  },
  components: {
    // DefaultProjectCard,
    MaterialSwitch,
    // MaterialAvatar,
    MaterialButton,
    Map,
    ProfileDrag,
    ModalForManager,
    ModalForPreview,
    SyncLoader

  },

  
  methods: {
    SaveManagerActivate(){
        this.save_manager_activate_loader = true
        let count = 0;
        let content = ''
    
        this.manager_data.forEach(element => {
          let data = {'data':{activate:element.activate}}
          let param = '/api/info-photos/'+element.id
          console.log(element.id)
          console.log(element)
          if(this.info_data.photo_activate_show_type=='show'){
            content = content+'<img src="'+element.webp_img+'" style="width:100%;">'
          }else if(this.info_data.photo_activate_show_type=='noshow'){
              if(element.type=='manager' &&element.activate==false){
                console.log('pass')
              }else{
                content = content+'<img src="'+element.webp_img+'" style="width:100%;">'
              }
          }else if(this.info_data.photo_activate_show_type=='dark'){
            if(element.type=='manager' &&element.activate==false){
              content = content+'<img src="'+element.webp_img+'" style="width:100%; filter:brightness(35%);">'
              }else{
                content = content+'<img src="'+element.webp_img+'" style="width:100%;">'
              }
          }
          axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
          .then(async response=>{
            if(response.status==200){
              let photos_index = this.info_photos.findIndex((x) => x.id == element.id);
              this.info_photos[photos_index].activate = element.activate
              count = count + 1
              if(count == this.manager_data.length){
                let param = '/api/infos/'+this.info_data.id
                let data = {'data':{photo_activate_show_type:this.info_data.photo_activate_show_type,content_1:content}}
                await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
                .then(res=>{
                  this.info_data.content_1 = res.data.data.attributes.content_1
                  this.save_manager_activate_loader = false
                  this.manager_more = false
              })
              }
            
            }
          })
      })
      // console.log(this.manager_data)
    },
    savephoto(photos){
      let count = 0;
      let content = ''
      this.info_photos = photos
      this.manager_data = []
      this.info_photos.forEach((element,index)=>{
        
        if(element.attributes.type=='manager'){
       
          let data = this.info_photos[index].attributes
          data['id'] = this.info_photos[index].id
          this.manager_data.push(data)
        }
      })
      this.info_photos.forEach(async (element,index) => {
        let param = '/api/info-photos/'+element.id
        let data = {'data':{activate:element.attributes.activate,type:element.attributes.type,sort:index}}


        if(this.info_data.photo_activate_show_type=='show'){
          content = content+'<img src="'+element.attributes.webp_img+'" style="width:100%;">'
        }else if(this.info_data.photo_activate_show_type=='noshow'){

            if(element.attributes.type=='manager' &&element.attributes.activate==false){
              // pass
            }else{
              content = content+'<img src="'+element.attributes.webp_img+'" style="width:100%;">'
            }
        }else if(this.info_data.photo_activate_show_type=='dark'){
          if(element.attributes.type=='manager' &&element.attributes.activate==false){
            content = content+'<img src="'+element.attributes.webp_img+'" style="width:100%; filter:brightness(35%);">'
            }else{
              content = content+'<img src="'+element.attributes.webp_img+'" style="width:100%;">'
            }
        }
        await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
        .then(async response=>{
          if(response.status==200){
            count = count+1
            if(count==this.info_photos.length){
              let param = '/api/infos/'+this.info_data.id
              let data = {'data':{photo_activate_show_type:this.info_data.photo_activate_show_type,content_1:content}}
              await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
              .then(res=>{
                this.info_data.content_1 = res.data.data.attributes.content_1
                alert('성공')

              })
            }
         
          }
        })
      
      })
    },
    async fileupload(value){
      this.file_input_loader = true
      const formData = value
      await axios.post('http://54.238.27.3/api/program/webp-convert',formData)
      .then(response=>{
        if(response.status==200){
          let param = '/api/info-photos'
          console.log(response.origin_height)
          let data = {'data':
            {
              'img_height' : response.data.origin_height,
              'img_width': response.data.origin_width,
              'origin_img' : response.data.origin_url,
              'webp_img': response.data.webp_url,
              'origin_size' : response.data.origin_size,
              'webp_size' : response.data.webp_size,
              'info' : this.info_data.id,
            }
          }
          axios.post(this.$store.state.API_URL+param,data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
          .then(response2=>{
            if(response2.status==200){
              this.info_photos.push(response2.data.data)
            }
          })
        }
      })
    },
    async SaveInfo(){
      this.save_info_loader = true
      let param = '/api/infos/'+this.info_data.id
      let data = {'data':this.info_data}
      await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
      .then(res=>{
          if(res.status==200){
            this.save_info_loader = false
            this.save_map_loader = false
          }
      })
    },
    async SaveMap(){ //SaveInfo 도 같이함
      this.save_map_loader = true
      await axios.get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x='+this.info_data.lon+'&y='+this.info_data.lat,{headers:{Authorization:"KakaoAK 7e1bcb3dbb55c595cf007050b354675a"}})
      .then(response=>{
        if(response.status==200){
          this.info_data.sido = response.data.documents[0].region_1depth_name
          this.info_data.sigugun = response.data.documents[0].region_2depth_name
          this.info_data.adress = response.data.documents[0].address_name
          this.SaveInfo()
        }
      })
    },
    async SaveScript(){
      this.save_script_loader = true
      let param = '/api/infos/'+this.info_data.id
      let data = {'data':this.info_data}
      await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(response=>{
                if(response.status==200){
                  this.save_script_loader = false
                  // this.script = false
                  this.info_data = response.data.data.attributes
                  this.info_data['id'] = response.data.data.id
                }
            })
    },
    
    changetype(value,index){
      this.info_photos[index].attributes.type = value
      if(value=='manager'){
        let data = this.info_photos[index].attributes
        data['id'] = this.info_photos[index].id
        this.manager_data.push(data)
      }
    },
    async deletephoto(id){
      let photos_index = this.info_photos.findIndex((x) => x.id == id);
      let photos_id = this.info_photos[photos_index].id
      let photos_type = this.info_photos[photos_index].attributes.type
      
      if (confirm("정말 삭제하시겠습니까??") == true){    //확인
        let param = '/api/info-photos/'+photos_id
        await axios.delete(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
          .then(response=>{
              if(response.status==200){
                  this.info_photos.splice(photos_index,1)
                  if(photos_type=='manager'){
                    let manager_index = this.manager_data.findIndex((x) => x.id == id);
                    this.manager_data.splice(manager_index,1)
                  }
              }
          })
      }else{   //취소
        return false;
      }
    },
    

    openModalFn(argv) {
        this.$refs.myListModalRef.openModalFnSet(argv);
    },
    openModalPreview(argv){
        this.$refs.myPreviewModalRef.openModalFnSet(argv);
        
    },
    LineupChange(index){
     
      if(this.manager_data[index]['activate'] == true){
        this.manager_data[index]['activate'] = false
      }else{
        this.manager_data[index]['activate'] = true
      }
    
    },
    setuplatlon(value){
        this.info_data.lat = value[0]
        this.info_data.lon = value[1]
    },
    async getFromServer(){
      try {
        let param = '/api/infos/'+this.$route.params.id+'?[fields][0]=name&[fields][1]=storetype&[fields][2]=phone&[fields][3]=lat&[fields][4]=lon&[fields][4]=lon&[fields][5]=open&[fields][6]=close&[fields][7]=simple_adress&[fields][8]=introduce&[fields][9]=activate&[fields][10]=kakao&[fields][11]=tele&[fields][12]=line&[fields][12]=level&[fields][13]=content_1&[fields][14]=adress&[fields][15]=script&[fields][16]=photo_activate_show_type&populate=info_targets&populate=info_photos&populate[info_photos][sort]=sort%3Aasc'
        const response =  await axios.get('https://op.cc-oo.club'+param,{headers: {Authorization: "Bearer "+this.$store.state.token}});
        return response
        
      } catch (error) {
        this.error = error;
      }
    },

    loadItems() {
          this.getFromServer().then(response => {
            this.info_data = response.data.data.attributes
            this.info_data['id'] = response.data.data.id
            
           
            this.info_photos = response.data.data.attributes.info_photos.data
            this.info_photos.forEach(element=>{
              if(element.attributes.type == 'manager'){
                element.attributes['id'] = element.id
                this.manager_data.push(element.attributes)
          
              }
              
            })
          });
    }
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
    this.loadItems()
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
}
</script>
<style scoped>
#none_lineup { 
  filter: brightness(35%); 
}
.card-img-top2[data-v-8c0740a4] {
    -o-object-fit: contain;
    object-fit: contain;
    width: 180px;
    height: 180px;
    border-radius: 1rem 0 0 1rem;
    background-color: #222;
}
.thumbnail-outer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height: 80%;
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
    color: #fff;
    text-align: center;
}

.thumbnail-inner {
    width: 90%;
    height: 100%;
    margin: auto;
}


</style>
