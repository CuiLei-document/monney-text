<template>
  <div>
    <label class="fromItem">
      {{value}}
      <span class="name">{{this.fieldName}}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Notes extends Vue {
  value = ''
  @Prop({required:true}) fieldName!: string
  @Prop({default:'请输入标签名'}) placeholder?:string
  @Watch('value')
  onValueChanged(value:string){
    this.$emit('update:value',value)
  }

}
</script>

<style lang="scss" scoped>
.fromItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    line-height: 42px;
    flex-grow: 1;
    border: none;
    background: transparent;
    padding-right: 16px;
  }
}
</style>