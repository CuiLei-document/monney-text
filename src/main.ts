import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
window.tagList = tagListModel.fetch()
window.createTag = (name:string)=>{
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
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
