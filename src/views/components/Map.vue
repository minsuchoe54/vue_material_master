<template>
    <GMapMap :zoom="zoom" :center="center" :options="options" map-type-id="roadmap" ref="myMapRef" class="my-map-style"></GMapMap>
</template>

<script>
import { ref, watch } from "vue";

export default {
    props:{
        lat:Number,
        lon:Number
    },
    emits: ['setupLatLon'],
    setup(props,{ emit }) {

        const myMapRef = ref();
        
        const options = {
            scrollwheel: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUi: false,
        };
        //초기 에러방지
        let position = {}
        position['lat'] = Number(props.lat) ?  Number(props.lat) : 36.725394;
        position['lng'] = Number(props.lon) ?  Number(props.lon) : 128.350154;
    
       
        let center = position
        let zoom;
        if(Number(props.lat)===0){
            zoom = 7;
        }else{
            zoom = 12;
        }
        watch(myMapRef, (googleMap) => {
            if (googleMap) {
                googleMap.$mapPromise.then((map) => {
                    const marker = new google.maps.Marker({ // eslint-disable-line no-undef
                        position: position,
                        map,
                    });
                    marker.setDraggable(false);
                    map.addListener("click", (event) => {
                        console.log(event.latLng)
                        marker.setPosition(event.latLng);
                        props.lat = event.latLng
                        let latlon = event.latLng.toString()
                        latlon = latlon.replace("(","")
                        latlon = latlon.replace(")","")
                        latlon = latlon.split(",")   
                        emit('setuplatlon',latlon);

                    });
                });
            }
        });
        return {
            props,
            myMapRef,
            options,
            position,
            center,
            zoom,
        };
    },
  
};
</script>

<style>
/* class="my-map-style" */
@media (max-width: 992px) {
    .my-map-style {
        width: 100%;
        height: 490px;
    }
}
@media (min-width: 992px) {
    .my-map-style {
        /* position: sticky; */
        top: 85.2px;
        width: 100%;
        height: 595px;
    }
}
</style>