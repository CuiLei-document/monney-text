import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    //Tags
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');

    },
    createTag (state,name){
      const names = state.tagList.map(item => item.name)
      console.log(names);
      if (names.indexOf(name) >= 0) {
        window.alert('失败了')
        return 'duplicated';
      }
      const id = createId().toString()
      state.tagList.push({id,name:name});
      store.commit('saveTag')
      window.alert('成功了')
      return  'success';
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    // Records
    fetchRecords(state) {
      state.recordList =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const record2:RecordItem = clone(record)
      record2.createdAt = new Date();
      state.recordList.push(record2); // this.recordList && this.recordList.push(record2)
      // recordStore.saveRecords()
      store.commit('saveRecords')
      console.log('state.recordList');
      console.log(state.recordList);
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
  },
})


export default store
