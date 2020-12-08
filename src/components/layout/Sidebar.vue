<template>
    <div class="left">
      <ul>
        <li id='logoS'><a href="/mainpage/info">
          <div>KIDS</div>
          <div>AFTER</div>
        </a></li>
        <li id='infoS'><a href="/mainpage/info">키즈앱터소개</a></li>
        <li id='chcenhomS'><a href="/mainpage/servicecenter">아동돌봄서비스/센터</a></li>
        <ol>
          <li id='locationS'><a href="/mainpage/servicecenter/location">내 주변에서 찾아보기</a></li>
          <li id='keywordS'><a href="/mainpage/servicecenter/kwloc">키워드로 찾아보기</a></li>
        </ol>
        <li id='conhomeS'><a href="/mainpage/togecon">함께 즐길 컨텐츠</a></li>
        <ol>
          <li id='ivrecoS'><a href="/mainpage/togecon/ivreco">설문으로 추천받기</a></li>
          <li id='keyrecoS'><a href="/mainpage/togecon/keyreco">키워드로 추천받기</a></li>
          <li id='wtrecoS'><a href="/mainpage/togecon/wtreco">날씨로 추천받기</a></li>
        </ol>
        <li>게시판</li>
        <ol>
          <li id='noticeS'>공지사항</li>
          <li id='qnaS'>QnA</li>
          <li id='feedbackS'>건의사항</li>
        </ol>
        <li id='companyS'>
          <div>Welcome to KIDS AFTER</div>
          <div>Copyright ⓒ by 오합지존<br>All Rights Reserved.</div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    name:"sidebar",
};
</script>
<style>
  a{color:black}
  .left{
    position:auto; 
    top:116px; 
    left:0px; 
    width:250px; 
    height:818px; 
    background:rgba(197, 196, 196, 0.6); 
    padding:40px 0;
  }
  .left ul {padding: 0 30px;}
  .left ul li { list-style: none; text-align:left; font-size:15px; font-weight: bold; height:30px;} 
  .left ul li#logoS {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logoS div {line-height: 0.8;}
  .left ul li#companyS {font-size:16px; margin-top:100px; }
  #logoS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #infoS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #locationS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #keywordS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #conhomeS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #chcenhomS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #ivrecoS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #keyrecoS a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #wtrecoS a{
    display:block;
    color:black;
    text-decoration: none;
  }
</style>