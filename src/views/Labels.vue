<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id"
      :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Nav from '@/components/Nav.vue';
import Button from '@/components/Button.vue';
import store from "@/store/index"
@Component({
  components: {Button, Nav},

})
export default class Labels extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get tags(){
    return store.state.tagList
  }
  created(){
    this.$store.commit('fetchTag')
  }
  createTag(){
    const name = window.prompt('请输入标签名')
    if(name){
      this.$store.commit('createTag',name)

    }
  }
}
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 16px;
  margin-left: 16px;
  > .tag{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg{
      width:18px;
      height: 18px;
      color: #333;
      margin-right: 16px;
    }
  }
}
.createTag{
  background-color: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height:40px;
  padding: 0 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>