<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPads @update:value="onUpdateNumberPads" @submit="saveRecord"/>
    <Types :value.sync="record.types" />
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Tags from '@/components/Tags.vue';
import Notes from '@/components/Notes.vue';
import Types from '@/components/Types.vue';
import NumberPads from '@/components/NumberPads.vue';

type Record = {
  tags: string[]
  notes: string
  types: string
  amount: number
}
@Component({
  components: {NumberPads, Types, Notes, Tags, Nav}
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行', '赌博'];
  recordList : Record[] = []
  record: Record = {
    tags: [], notes: '', types: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateNumberPads(value: string) {
    this.record.amount = parseFloat(value);
    console.log(this.record);
  }
  saveRecord(){
    const record2 = JSON.parse(JSON.stringify(this.record))
    this.recordList.push(record2)
    console.log(this.recordList)
  }
  @Watch('recordList')
  onRecordListChanged(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/haples.scss";


</style>