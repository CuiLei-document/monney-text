import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex)
type RootState = {
  recordList:  RecordItem[],
  tagList:  Tag[]
  currentTag: Tag | undefined
}
const store =  new Vuex.Store({
  state: {
    recordList: [],
    tagList:  [],
    currentTag: undefined
  } as RootState,
  mutations: {
    //Tags
    removeTag(state,id:string){
      let index = -1;
      for(let i=0;i<state.tagList.length;i++){
        if(state.tagList[i].id === id){
          index = i
          break;
        }
      }
      if(index>=0){
        state.tagList.splice(index,1)
        store.commit('saveTag')
        router.back()
      }else{
        window.alert('失败了')
      }
    },
    updateTag(state,payload:{id:string,name:string}){
      const {id,name} = payload
      const idList = state.tagList.map(item => item.id)
      if(idList.indexOf(id)>=0){
        const names = state.tagList.map(item => item.name)
        if(names.indexOf(name)>=0){
          window.alert('标签重复了')

        }else{
          const tag = state.tagList.filter(tag => tag.id === id)[0]
          tag.name = name
          store.commit('saveTag')
        }
      }else{
        return 'not found'
      }
    },
    setCurrentTag(state,id:string){
      const tag =  state.tagList.filter(t =>t.id === id)[0]
      console.log('tag');
      console.log(tag);
      state.currentTag = tag
    },
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
      record2.createdAt = new Date().toISOString();
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
