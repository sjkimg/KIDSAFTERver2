<template>
    <div>
        <p id="ivtitle" v-html="$options.filters.hashBold(post)"></p>
        <img id="wordcloud" src="https://cdn.pixabay.com/photo/2018/03/11/16/06/wordcloud-3217146_960_720.jpg" width="800" height="auto" />
        
        <div class="togelist">
            <b-button id="intvl" variant="outline-primary" href="/mainpage/togecon/ivreco">설문으로 추천받기</b-button>
            <b-button id="kytol" variant="outline-primary" href="/mainpage/togecon/keyreco">키워드로 추천받기</b-button>
            <b-button id="wethl" variant="outline-primary" href="/mainpage/togecon/wtreco">날씨로 추천받기</b-button>
        </div>
        <div class="ytwrap">
            <div class="ytcontent">
            <iframe
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/eRFbpAEiXvQ" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            post:"please #enter a #Hashtag #Here"
        };
    },
    filters:{
        hashBold: function(value){
            if (!value) return "";
            value = value.toString();
            let hashReg = /#\w+/gm;
            value = value.replace(hashReg, "<b>$&</b>");
            return value;
        }
    }
};
</script>

<style>
.ytcontent{
    position: fixed;
    top:350px;
    left:1100px;
}
.togelist{
    position:fixed; 
    top:150px; 
    left:1300px; 
    width:auto; 
    height:1000px;
    float: left;
}
#ivtitle{
    position:fixed;
    top:750px; 
    left:450px; 
    width:auto; 
    height:100px;
    padding:40px 0;
    font-size: 30px;
}
#wordcloud{
    position:fixed;
    top:200px; 
    left:250px;
}
#intvl{
    margin-right:10px;
}
#kytol{
    margin-right:10px;
}
</style>