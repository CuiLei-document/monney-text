<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="tab"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
      <ol>
        <li v-for="(group,index) in result" :key="index.id">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{tagString(item.tags)}}</span>
              <span class="notess">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Nav from '@/components/Nav.vue';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/Money/Tags.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
@Component({
  components: {Tags, Tabs, Nav},

})
export default class statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]){
    return tags.length === 0? '无' : tags.join(',')
  }
  get recordList(){
    // eslint-disable-next-line no-undef
    return this.$store.state.recordList
  }
  get result(){

    const {recordList} = this;
    // eslint-disable-next-line no-undef
    type hashTableValue = {title: string,items: RecordList[]}
    // eslint-disable-next-line no-undef
    const hashTable : {[key: string] :hashTableValue[] } = {}
    for(let i =0; i<recordList.length; i++){
      const [date,time] = recordList[i].createdAt.split('T');
      hashTable[date] = hashTable[date] || {title: date,items:[]}
      hashTable[date].items.push(recordList[i])
      console.log(hashTable);

    }
    return hashTable

  }
  beforeCreate(){
    this.$store.commit('fetchRecords')
  }
  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = typeList
}
</script>
<style lang="scss" scoped>
  %item{
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    @extend %item;
  }
  .record{
    @extend %item;
    background: white;
  }
  .notess{
    margin-right: auto;
    margin-left :16px;
    color: #999;
  }
</style>
<style lang="scss" scoped>
 ::v-deep .tab-tabs-item {
  background: white;
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
   }
}
 ::v-deep .interval-tabs-item{
   height: 48px;
 }
</style>