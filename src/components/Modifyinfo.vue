<template>  
    <div>
        <h1 id="modi">정보 수정하기</h1>
        <form>
            <p id="sign"><label for="name">이름</label>
                <input type="text" id="name">
            </p>
            <p id="check"><label for="m">남자</label>
                <input type="checkbox" id="m">
                <label for="w">여자</label>
               <input type="checkbox" id="w">
            </p>
            <p id="num"><label for="age">나이</label>
                <input type="number" id="age"><br><br>
            </p>
            <p id="button">
                <input type="submit" value="수정" onclick="alert('정보가 수정되었습니다.')">
            </p>
         </form>
      
    </div>
</template>

<style>
#modi{
    position:absolute;
    top:150px; 
    left:290px;
}
#sign{
    position:absolute;
    top:350px; 
    left:650px;
    font-size:20px; 
}
#check{
    position:absolute;
    top:400px; 
    left:650px;
    height:100px;
    font-size:20px; 
}
#num{
    position:absolute;
    top:450px; 
    left:650px;
    width:auto; 
    height:100px;
    font-size:20px; 
}
#button{
    position:absolute;
    top:520px; 
    left:780px;
}
</style>