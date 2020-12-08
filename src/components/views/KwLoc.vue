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
        <div class="righttop">
            <b-button id="around" href="/mainpage/servicecenter/location" variant="outline-primary">내 주변에서 찾아보기</b-button>
            <b-button href="/mainpage/servicecenter/kwloc" variant="outline-primary">키워드로 찾아보기</b-button>
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
          { text: 'CCTV', value: 'cctv' },
          { text: '우수기관', value: 'excellent' },
          { text: '할인', value: 'discount' },
          { text: '셔틀버스', value: 'suttle' }
        ],
        fields:[
          {
            key: 'score',
            label: '순위'
          },
          {
            key: 'localname',
            label: '이름'
          },
          {
            key: 'tel',
            label: '전화번호'
          },
        ],
      items: items.Children
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