<template>
  <div class="layout-wrapper" >
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component
export default  {
  props:['classPrefix']
}
</script>

<style lang="scss" scoped>
.layout-wrapper{

  display:flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex-grow: 1;
  overflow: auto;
}
</style>