<template>
  <nav>
    <router-link to="/money" class="item">
     <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics"  class="item">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    box-shadow:  0 0 3px rgba(0,0,0,0.3);
    font-size: 14px;
    >.item{
      padding: 2px 0;
      width: 33.3333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width:30px;
        height:30px;
      }
    }

  }
</style>