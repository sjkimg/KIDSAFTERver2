<template>
    <div>
        <h1 id="wbd1">건의사항</h1>
        
        <div class="whboard">
            <b-form-textarea
                id="textarea-title"
                v-model="text"
                :state="text.length >= 5"
                placeholder="제목을 입력해주세요"
                rows="1"
                ></b-form-textarea>
                <br>
                <b-form-textarea
                id="textarea-content"
                v-model="text"
                :state="text.length >= 10"
                placeholder="10글자 이상 입력해주세요"
                rows="3"
                max-rows="6"
                ></b-form-textarea>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.whboard {
    position:fixed;
    top:450px; 
    left:800px; 
    width:auto; 
    height:1000px;
}
#wbd1 {
    position:fixed;
    top:450px; 
    left:800px; 
    width:auto; 
    height:100px;
    font-size: 40px;
}
</style>