<template>  
    <div>
        <h1 id="feed">의견쓰기</h1>
        <form>
            <p id="ti"><label for="title">제목</label>
                <input type="text" id="title" placeholder="제목을 입력하세요" style="width:500px;">
            </p>
            <p id="con2"><label for="conte"></label>
                <textarea cols="100" rows="10"></textarea><br><br>
                <input type="submit" value="제출" onclick="alert('감사합니다.')">
            </p>   
        </form>
    </div>
</template>

<style>
#feed{
    position:absolute;
    top:150px; 
    left:290px;
}
#ti{
    position:absolute;
    top:270px; 
    left:400px;
}
#con2{
    position:absolute;
    top:330px; 
    left:400px;
}
</style>