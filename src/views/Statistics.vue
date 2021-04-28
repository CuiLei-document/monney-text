<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="tab"/>
    <ol>
      <li v-for="(group,index) in groupedList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notess">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/Money/Tags.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tags, Tabs, Nav},

})
export default class statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  beautify(string: string) {
    const api = dayjs(string);
    const now = dayjs();
    if (api.isSame(now, 'day')) {
      return '今天';
    } else if (api.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (api.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else {
      return api.format('月M日D');
    }
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return this.$store.state.recordList;
  }

  get groupedList() {
    const {recordList} = this;
    if (recordList.length === 0) {
      return [];
    }

    // eslint-disable-next-line no-undef
    const newList = clone(recordList)
        .filter(r => r.types === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    const result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    // eslint-disable-next-line no-undef
    // type Result = { title: string, total?: number, items: RecordItem[] }[]
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  typeList = typeList;
}
</script>
<style lang="scss" scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background: white;
}

.notess {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
<style lang="scss" scoped>
::v-deep .tab-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 48px;
}
</style>