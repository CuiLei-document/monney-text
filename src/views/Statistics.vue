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
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
@Component({
  components: {Tags, Tabs, Types, Nav},

})
export default class statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = typeList
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