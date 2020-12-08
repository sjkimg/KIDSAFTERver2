<template>
    <div>
        <div class="checkbox">
            <div>Selected: <strong>{{ selected }}</strong></div>
            <b-form-group>
                <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="selected"
                    :options="options"
                    name="flavour-1"
                ></b-form-checkbox-group>
            </b-form-group>
        </div>
        <div class="togelist">
            <b-button id="intvl" variant="outline-primary" href="/#/mainpage/togecon/ivreco">설문으로 추천받기</b-button>
            <b-button id="kytol" variant="outline-primary" href="/#/mainpage/togecon/keyreco">키워드로 추천받기</b-button>
            <b-button id="wethl" variant="outline-primary" href="/#/mainpage/togecon/wtreco">날씨로 추천받기</b-button>
        </div>
        <div>
            <b-table id="keytable" striped hover :items="items" :fields="fields"></b-table>
        </div>
    </div>
</template>

<script>
import items from "./items"

export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: '자연', value: 'nature' },
          { text: '체험', value: 'experience' },
          { text: '할인', value: 'discount' },
          { text: '노래', value: 'song' },
          { text: '공룡', value: 'Dinosourous' }
        ],
        fields:[
          {
            key: 'score',
            label: '순위'
          },
          {
            key: 'localname',
            label: '장소이름'
          },
          {
            key: 'content_id',
            label: '종목'
          },
        ],
      items: items.Content
    };
  }
}
</script>

<style>
.checkbox{
    position:fixed; 
    top:250px; 
    left:800px; 
    width:auto; 
    height:1000px;
    float: left;
}
#keytable{
    max-width: 500px;
    max-height: 400px;
    position:fixed; 
    top:350px; 
    left:750px; 
    width:500px; 
    height:1000px;
}
</style>