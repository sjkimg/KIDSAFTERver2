<template>
<div>
    <div class="center">
        <h1>내 주변에서 찾아보기</h1><br><br><br>
        <b-button id="fam" variant="outline-primary">가정방문형 서비스</b-button>
        <b-button id="cen" variant="outline-primary">센터방문형 서비스</b-button>
        <b-button id="corp" variant="outline-primary">아동돌봄 공동체</b-button>
    </div>
    <div class="righttop">
        <b-button id="around" href="/mainpage/servicecenter/location" variant="outline-primary">내 주변에서 찾아보기</b-button>
        <b-button href="/mainpage/servicecenter/kwloc" variant="outline-primary">키워드로 찾아보기</b-button>
    </div>
    <div class="table">
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    <div id="map"></div>
</div>
</template>

<script>
import items from './items/children'

export default {
  data() {
    return {
      fields:[
          {
            key: 'score',
            label: '순위'
          },
          {
            key: 'localname',
            label: '이름'
          },
          {
            key: 'tel',
            label: '전화번호'
          },
        ],
      items: items.Children
    };
  },

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
    },

  }
</script>

<style>
h1 {
  color: #454545;
  text-align: left;
}
  .center{
    position:absolute; 
    top:150px; 
    left:290px; 
  }
  .righttop{
    position:absolute; 
    top:150px; 
    left:700px;
  }
  .table{
    position: absolute;
    max-width: 500px;
    max-height: 200px;
    position:absolute; 
    top:200px; 
    left:480px; 
    width:auto; 
    height:1000px;
  }
  #fam{
      margin-right:80px;
  }
  #cen{
      margin-right:80px;
  }
  #around{
      margin-right:10px;
  }
  </style>