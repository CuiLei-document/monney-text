<template>
  <Layout class-prefix="layout">
    <NumberPads @update:value="onUpdateNumberPads" @submit="saveRecord"/>
    <Tabs :data-source="typeList" :value.sync="record.types"/>
    <div class="notes">
    <Notes  fieldName="备注" placeholder="请输入备注" :value.sync="record.notes"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPads from '@/components/Money/NumberPads.vue';
import store from '@/store/index.ts'
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';

@Component({
  components: {Tabs, NumberPads,  Notes, Tags, Nav}
})
export default class Money extends Vue {
 get recordList(){
    return store.state.recordList;
  }
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', types: '-', amount: 0
  };
 typeList = typeList
created(){
  this.$store.commit('fetchRecords')
}

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateNumberPads(value: string) {
    this.record.amount = parseFloat(value);
    console.log(this.record);
  }

  saveRecord() {
   if(!this.record.tags || this.record.tags.length === 0){
     return window.alert('请选择一个标签')

   }
    this.$store.commit('createRecord',this.record)
    if(this.$store.state.createRecordError === null){
      window.alert('已保存')
      this.record.notes = ''
    }
  }
}
</script>
<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/haples.scss";


</style>