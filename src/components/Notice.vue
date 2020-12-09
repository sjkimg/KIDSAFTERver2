<template>
    <div>
        <h1 id="noti">공지사항</h1>
        <table class="tab">
            <thead class="head">
                <tr class="line">
                    <th class="num_col">번호</th><th>제목</th><th class="name_col">이름</th><th class="date_col">날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr class="line">
                    <td>1</td> <td>tiltle</td> <td>name</td> <td>date</td>
                </tr>
                <tr class="line">
                    <td>2</td> <td>tiltle</td> <td>name</td> <td>date</td>
                </tr> 
            </tbody> 
        </table>


    </div>
</template>

<style>
#noti{
    position:absolute;
    top:150px; 
    left:290px;
}
.tab{
    position:absolute;
    top:270px; 
    left:350px;
    width: 70%;
    border-top:1px solid black ; 
}
.head{
    background-color: beige;
}
.line{
    border-bottom: 1px solid black;
    padding: 10px;
  }
.num_col{
    width: 70px;
}
.name_col{
    width: 100px;
}
.date_col{
    width: 130px;
}
</style>