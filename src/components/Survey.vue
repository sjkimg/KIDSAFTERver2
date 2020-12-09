<template>
    <div id="sur">
        <h1><strong>KIDS AFTER</strong></h1>
        <p>정보를 입력해주세요</p><br>
        <form>
            <p><label for="name">이름</label>
                <input type="text" id="name">
            </p>
            <p><label for="m">남자</label>
                <input type="checkbox" id="m">
                <label for="w">여자</label>
                <input type="checkbox" id="w">
            </p>
            <p><label for="age">나이</label>
                <input type="number" id="age" placeholder="나이를 입력하세요">
            </p>
            <b-button type="sumit" href="/mainpage">제출</b-button>
        </form>
    </div>
</template>

<style>
#sur{
    position:absolute;
    top:270px; 
    left:700px;
}
</style>
