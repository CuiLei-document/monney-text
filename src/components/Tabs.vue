<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        :class="classList(item)"
    @click="select(item)"
    >{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DateSourceItem = {
  text:string,
  value:string
}
@Component
export default class Tabs extends Vue {
  @Prop({required:true,type:Array}) dataSource!: DateSourceItem[]
  @Prop(String) readonly value!: string // 不要管我 我就是 string类型
  @Prop(String) classPrefix?: string;
  select(item:DateSourceItem){
    this.$emit('update:value',item.value)
  }
  classList(item:DateSourceItem){
    return {[this.classPrefix +'-item']:this.classPrefix,selected: item.value===this.value}
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>