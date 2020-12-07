<template>
    <div>
        <div class="togelist">
            <b-button id="intvl" variant="outline-primary" href="/mainpage/togecon/ivreco">설문으로 추천받기</b-button>
            <b-button id="kytol" variant="outline-primary" href="/mainpage/togecon/keyreco">키워드로 추천받기</b-button>
            <b-button id="wethl" variant="outline-primary" href="/mainpage/togecon/wtreco">날씨로 추천받기</b-button>
        </div>
        
        <span id="wt1">미세먼지쪽은 XML형식이라 파싱 및 노드화를 거쳐야하므로 일단 스킵</span>
        <span id="wt2">날씨API는 기상청 RSS쪽 알아보고 있음</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#wt1{
    position:fixed;
    top:450px; 
    left:400px; 
    width:auto; 
    height:100px;
    font-size: 40px;
}
#wt2{
    position:fixed;
    top:550px; 
    left:400px; 
    width:auto; 
    height:100px;
    font-size:40px;
}
</style>