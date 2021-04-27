
import createId from '@/lib/createId';
const localStorageKeyName = 'tagList';
const tagStore =  {
    // tag store
    tagList: [] as Tag[] ,
    fetchTag() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.tagList;
    },
    createTag (name:string){
        const names = this.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            window.alert('失败了')
            return 'duplicated';
        }
        const id = createId().toString()
        this.tagList.push({id,name:name});
        this.saveList();
        window.alert('成功了')
        return  'success';
    },
    removeTag(id:string){
        let index = -1;
        for(let i=0;i<this.tagList.length;i++){
            if(this.tagList[i].id === id){
                index = i
                break;
            }
        }
        this.tagList.splice(index,1)
        this.saveList()
        return true
    },
    updateTag(id:string,name:string){
        const idList = this.tagList.map(item => item.id)
        if(idList.indexOf(id)>=0){
            const names = this.tagList.map(item => item.name)
            if(names.indexOf(name)>=0){
                return 'duplicated'
            }else{
                const tag = this.tagList.filter(tag => tag.id === id)[0]
                tag.name = name
                this.saveList()
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    findTag  (id:string){
        return this.tagList.filter(t =>t.id === id)[0]
    },
    saveList() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    }
}
tagStore.fetchTag()

export default tagStore