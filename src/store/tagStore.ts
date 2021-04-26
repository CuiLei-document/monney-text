import tagListModel from '@/models/tagListModel';

export default {
    // tag store
    tagList : tagListModel.fetch(),
    createTag : (name:string)=>{
        if(name){
            const message = tagListModel.create(name)
            console.log(tagListModel.create);
            console.log(message);
            if(message === 'duplicated'){
                window.alert('失败了')
            }else if(message === 'success'){
                window.alert('成功了')
            }
        }
    },
    removeTag : (id:string)=>{
        return tagListModel.remove(id);
    },
    updateTag : (id:string,name:string) =>{
        return tagListModel.update(id,name)
    },
    findTag  (id:string){
        return this.tagList.filter(t =>t.id === id)[0]
    }
}