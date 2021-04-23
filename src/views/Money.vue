<template>
  <Layout>
    <p>Money.vue</p>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Nav from '@/components/Nav.vue';
@Component({
  components: {Nav}
})
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>

</style>