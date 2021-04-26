<template>
<Layout>
  <div class="navBar">
    <Icon class="leftIcon" name="left" @click.native="goBack"></Icon>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
··  <Notes :value="tag.name" @update:value="update" class="from-wrapper" field-name="备注" placeholder="请输入"/>
  <div class="button-wrapper">
    <Button @click="remove">删除按钮</Button>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel';
import Notes from '@/components/Notes.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';
@Component({
  components: {Button, Notes}
})
export default class EditLabel extends Vue {
  tag?: {id:string, name:string} = undefined
created(){
    this.tag = store.findTag(this.$route.params.id)
    if(!this.tag){
      this.$router.replace('/404')
    }
}
update(name:string){
    if(this.tag){
      store.updateTag(this.tag.id,name)
    }
}
remove(){
    if(this.tag){
      if(store.removeTag(this.tag.id)){
        this.$router.back()
      }else{
        window.alert('失败了')
      }
    }
}
goBack(){
    this.$router.back()
}
}
</script>

<style lang="scss" scoped>
.navBar{
  background: white;
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >.title{}
  >.leftIcon{
    width: 24px;
    height: 24px;
  }
  >.rightIcon{
    width:24px;
    height: 24px;
  }
}
.from-wrapper{
  margin-top: 8px;
  background: white;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 42-16px;
}
</style>