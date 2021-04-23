<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component
export default class Layout extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid red;
  display:flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex-grow: 1;
  border: 1px solid blue;
  overflow: auto;
}
</style>