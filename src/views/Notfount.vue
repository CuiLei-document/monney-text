<template>
  <div>
    <div>当前页面不正确，请点击返回重新选择</div>
    <div>
    <router-link to="/">返回</router-link>|
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notfount extends Vue {

}
</script>

<style lang="scss" scoped>

</style>