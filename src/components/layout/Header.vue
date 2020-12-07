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
  </div>
</template>
<script>
export default {
  name: "header",
};
</script>
<style>
</style>