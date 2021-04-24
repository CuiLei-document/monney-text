<template>
  <Layout class-prefix="layout">
    <NumberPads/>
    <Types />
    <Notes/>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Tags from '@/components/Tags.vue';
import Notes from '@/components/Notes.vue';
import Types from '@/components/Types.vue';
import NumberPads from '@/components/NumberPads.vue';

@Component({
  components: {NumberPads, Types, Notes, Tags, Nav}
})
export default class Money extends Vue {

}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>