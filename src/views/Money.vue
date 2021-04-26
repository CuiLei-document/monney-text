<template>
  <Layout class-prefix="layout">
    <NumberPads @update:value="onUpdateNumberPads" @submit="saveRecord"/>
    <Types :value.sync="record.types"/>
    <div class="notes">
    <Notes @update:value="onUpdateNotes" fieldName="备注" placeholder="请输入备注"/>
    </div>
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
import store from '@/store/index2';

@Component({
  components: {NumberPads, Types, Notes, Tags, Nav}
})
export default class Money extends Vue {
  tags = store.tagList

  // eslint-disable-next-line no-undef
  recordList = store.recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', types: '-', amount: 0, createdAt: new Date()
  };

  onUpdateTags(value: string[]) {
    console.log(this.recordList);
    this.record.tags = value;
    console.log(value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateNumberPads(value: string) {
    this.record.amount = parseFloat(value);
    console.log(this.record);
  }

  saveRecord() {
    store.createRecord(this.record)
    console.log(this.record);
  }
}
</script>
<style lang="scss">
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