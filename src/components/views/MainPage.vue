<template>
<div>
    <div class="center">
        <b-button id="fam" variant="outline-primary">가정방문형 서비스</b-button>
        <b-button id="cen" variant="outline-primary">센터방문형 서비스</b-button>
        <b-button id="corp" variant="outline-primary">아동돌봄 공동체</b-button>
    </div>
    <div class="righttop">
        <b-button id="around" variant="outline-primary">내 주변에서 찾아보기</b-button>
        <b-button variant="outline-primary">키워드로 찾아보기</b-button>
    </div>
</div>
</template>

<script>
export default {
};
</script>

<style>
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