<template>
  <div class="tags">
    <div class="new">
      <button @click="clear">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
      :class="{selected: selectedTags.indexOf(tag)>=0}"
      @click="select(tag)">{{tag.name}}</li>

    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
@Component({

})
export default class Tags extends Vue {
  get tagList(){
    return this.$store.state.tagList
  }
  selectedTags: string[] = []
  created(){
    this.$store.commit('fetchTag')
  }
  select(tag:string){
    const index = this.selectedTags.indexOf(tag)
    if(index>=0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag)
    }
    this.$emit('update:value',this.selectedTags)

  }
  clear(){
    const name = window.prompt('请输入标签名')
    if(!name){
     return window.alert('标签名不能为空')
    }
    this.$store.commit('createTag',name)
    }
  }

</script>

<style lang="scss" scoped>
.tags {
  background: white;
  padding: 16px;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap:wrap;
    > li {
      $bg:#d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 6px;
      &.selected{
        background: darken($bg,50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }
}
</style>