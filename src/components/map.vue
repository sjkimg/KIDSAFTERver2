<template>
    <div id="map"></div>    
</template>

<script>
export default {
    mounted() {
    if (window.kakao && window.kakao.maps) {
        this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=213ec0705c3e4d83da02e760f44af661';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
            center: new kakao.maps.LatLng(37.27501427, 127.0161237), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            };
            var map = new kakao.maps.Map(mapContainer, mapOption);
            map;

            var markerPosition  = new kakao.maps.LatLng(37.27501427, 127.0161237); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
     
        }
    }
} 
</script>

<style>
#map{
    position:absolute; 
    top:400px; 
    left:400px; 
    width:500px;
    height:400px;
}
</style>




