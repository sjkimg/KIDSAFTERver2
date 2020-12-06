<template>
  <div>
    <b-navbar toggleable="xl" type="dark" variant="dark">
      <b-navbar-brand href="#">키즈앱터로고</b-navbar-brand><!--나중에로고이미지넣기-->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!--화면이 작아졌을 때 메뉴 대신 보여지는 버튼-->

      <b-collapse id="nav-collapse" is-nav>
<!--
        <b-navbar-nav>목차임. 리스트나오기 전 보이는거
          <b-nav-item href="#">키즈앱터 소개</b-nav-item>각각항목을 누르면 나오는 것
          <b-nav-item href="#">아동돌봄서비스/센터</b-nav-item>
          <b-nav-item href="#">함께 즐길 컨텐츠</b-nav-item>
          <b-nav-item href="#">게시판</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
-->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">검색</b-button>
          </b-nav-form>
<!--
          <b-nav-item-dropdown text="서비스" right>
            <b-dropdown-item href="#">아동돌봄서비스/센터</b-dropdown-item>
            <b-dropdown-item href="#">함께 즐길 컨텐츠</b-dropdown-item>
            <b-dropdown-item href="#">게시판</b-dropdown-item>
            <b-dropdown-item href="#">커뮤니티</b-dropdown-item>
          </b-nav-item-dropdown>
-->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              사용자
            </template>
            <b-dropdown-item href="#">내 정보</b-dropdown-item>
            <b-dropdown-item href="#">회원탈퇴</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="left">
      <ul>
        <li id='logo'><a href="/mainpage/info">
          <div>KIDS</div>
          <div>AFTER</div>
        </a></li>
        <li id='info'><a href="/mainpage/info">키즈앱터소개</a></li>
        <li>아동돌봄서비스/센터</li>
        <ol>
          <li id='location'><a href="/mainpage/servicecenter/location">내 주변에서 찾아보기</a></li>
          <li id='keyword'><a href="/mainpage/servicecenter/location">키워드로 찾아보기</a></li>
        </ol>
        <li>함께 즐길 컨텐츠</li>
        <ol>
          <li id='paper'>설문으로 추천받기</li>
          <li id='keyword'>키워드로 추천받기</li>
          <li id='weather'>날씨로 추천받기</li>
        </ol>
        <li>게시판</li>
        <ol>
          <li id='notice'>공지사항</li>
          <li id='qna'>QnA</li>
          <li id='feedback'>건의사항</li>
        </ol>
        <li id='company'>
          <div>Welcome to KIDS AFTER</div>
          <div>Copyright ⓒ by 오합지존<br>All Rights Reserved.</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
  methods:{
    method(){
      console.log("method");
    }
  }
};
</script>
<style>
  a{color:black}
  .left{
    position:auto; 
    top:116px; 
    left:0px; 
    width:250px; 
    height:1000px; 
    background:rgba(197, 196, 196, 0.6); 
    padding:40px 0;
  }
  .left ul {padding: 0 30px;}
  .left ul li { list-style: none; text-align:left; font-size:15px; font-weight: bold; height:30px;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8;}
  .left ul li#company {font-size:16px; margin-top:100px; }
  #logo a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #info a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #location a{
    display:block;
    color:black;
    text-decoration: none;
  }
  #keyword a{
    display:block;
    color:black;
    text-decoration: none;
  }
</style>