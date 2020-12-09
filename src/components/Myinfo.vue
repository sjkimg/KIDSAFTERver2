<template>
    <div>
        <h1 id="info">내 정보</h1>
        <div id="detail"> 
            <h2>이름: </h2><br><br>
            <h2>성별: </h2><br><br>
            <h2>나이: </h2>
        </div>
        <div id="con">
            {{name}}<br><br>
            {{sex}}<br><br>
            {{age}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: "아이유",
            sex: "여자",
            age: "12"
        }
    }
}
</script>

<style>
#info{
    position:absolute;
    top:150px; 
    left:290px;
}
#detail{
    position:absolute;
    top:300px; 
    left:450px;
    background-color: beige;
    height: 250px;
}
#con{
    position:absolute;
    top:300px; 
    left:520px;
    background-color: beige;
    width: 40%;
    height: 250px;
    font-size: 30px;
}
</style>