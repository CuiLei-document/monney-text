<template>
  <svg class="icon" @click="$emit('click',$event)">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext)=> requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('../assets/icons',true,/\.svg$/))
}catch(err){
  console.log(err)
}

export default  {
props:['name']
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>