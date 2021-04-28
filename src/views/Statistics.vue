<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="tab"/>
    <Tabs :data-source="intervalList" :value.sync="interval" />
    {{interval}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Nav from '@/components/Nav.vue';
import Types from '@/components/Types.vue';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/Tags.vue';
@Component({
  components: {Tags, Tabs, Types, Nav},

})
export default class statistics extends Vue {
  type ='-'
  interval = 'day'
  intervalList = [
    {text:'按天',value:'day'},
    {text:'按周',value:'week'},
    {text:'按月',value:'month'}
  ]
  typeList = [
    {text: '支出',value:'-'},
    {text:'收入',value:'+'}
  ]
}

</script>

<style lang="scss" scoped>
 ::v-deep .tab-item {
  background: white;
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
   }
}
</style>