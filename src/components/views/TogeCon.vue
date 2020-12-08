<template>
    <div>
        <h1 id="contitle">이번주 추천 컨텐츠</h1>
        <img id="img1" src="https://cdn.pixabay.com/photo/2016/11/14/02/54/agriculture-1822446_960_720.jpg" width="150" height="150" />
        <img id="img2" src="https://cdn.pixabay.com/photo/2020/03/17/07/30/louvre-4939276_960_720.jpg" width="150" height="150" />
        <img id="img3" src="https://cdn.pixabay.com/photo/2016/01/20/05/50/disney-land-1150970_960_720.jpg" width="150" height="150" />
        <img id="img4" src="https://cdn.pixabay.com/photo/2016/05/25/17/04/water-1415391_960_720.jpg" width="150" height="150" />
        <span id="con1">Vue 어렵다</span>
        <span id="con2">누가 쉽댔어</span>
        <span id="con3">내가 쉽댔지</span>
        <span id="con4">그냥정적웹할걸</span>
        
        <div class="togecenter">
            <b-button id="intv" size="lg" variant="outline-primary" href="/mainpage/togecon/ivreco">설문으로 추천받기</b-button>
            <br><br>
            <b-button id="kyto" size="lg" variant="outline-primary" href="/mainpage/togecon/keyreco">키워드로 추천받기</b-button>
            <br><br>
            <b-button id="weth" size="lg" variant="outline-primary" href="/mainpage/togecon/wtreco">날씨로 추천받기</b-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
a{color:black}
  .togecenter{
    position:fixed; 
    top:550px; 
    left:800px; 
    width:auto; 
    height:1000px;
    size: 150%;
  }
#contitle{
    position:fixed;
    top:120px; 
    left:300px; 
    width:auto; 
    height:100px;
    padding:40px 0;
}
#con1{
    position:fixed;
    top:450px; 
    left:400px; 
    width:auto; 
    height:100px;
}
#con2{
    position:fixed;
    top:450px; 
    left:700px; 
    width:auto; 
    height:100px;
}
#con3{
    position:fixed;
    top:450px; 
    left:995px; 
    width:auto; 
    height:100px;
}
#con4{
    position:fixed;
    top:450px; 
    left:1280px; 
    width:auto; 
    height:100px;
}
#img1{
    position:fixed;
    top:240px; 
    left:360px;
}#img2{
    position:fixed;
    top:240px; 
    left:660px;
}#img3{
    position:fixed;
    top:240px; 
    left:960px;
}#img4{
    position:fixed;
    top:240px; 
    left:1260px;
}
</style>