<template>
<div>
    <div class="center">
        <b-button id="fam" variant="outline-primary">가정방문형 서비스</b-button>
        <b-button id="cen" variant="outline-primary">센터방문형 서비스</b-button>
        <b-button id="corp" variant="outline-primary">아동돌봄 공동체</b-button>
    </div>
    <div class="righttop">
        <b-button id="around" href="/#/mainpage/servicecenter/location" variant="outline-primary">내 주변에서 찾아보기</b-button>
        <b-button href="/#/mainpage/servicecenter/kwloc" variant="outline-primary">키워드로 찾아보기</b-button>
    </div>


    <div class="table">
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</div>
</template>

<script>
import items from './items'

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
  }
};
</script>

<style>
h1 {
  color: #454545;
  text-align: center;
}
  .center{
    position:fixed; 
    top:250px; 
    left:400px; 
    width:auto; 
    height:1000px;
    float: left;
  }
  .righttop{
    position:fixed; 
    top:150px; 
    left:1500px; 
    width:auto; 
    height:1000px;
    float: left;
  }
  .table{
    max-width: 500px;
    max-height: 400px;
    position:fixed; 
    top:400px; 
    left:1200px; 
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