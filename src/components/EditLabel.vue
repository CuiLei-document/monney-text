<template>
<Layout>
  <div class="navBar">
    <Icon class="leftIcon" name="left"></Icon>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <Notes class="from-wrapper" field-name="备注" placeholder="请输入"/>
  <div class="button-wrapper">
    <Button>删除按钮</Button>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel';
import Notes from '@/components/Notes.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, Notes}
})
export default class EditLabel extends Vue {
created(){
  const id = this.$route.params.id
  tagListModel.fetch()
  const tags = tagListModel.data
  console.log(tags);
  const tag = tags.filter(t =>t.id === id)[0]
  if(tag){
    console.log(tag);
  }else{
    this.$router.replace('/404')
  }
}
}
</script>

<style lang="scss" scoped>
.navBar{
  background: white;
  border: 1px solid red;
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >.title{}
  >.leftIcon{
    border: 1px solid green;
    width: 24px;
    height: 24px;
  }
  >.rightIcon{
    border: 1px solid blue;
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