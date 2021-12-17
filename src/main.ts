import Vue from 'vue';
import StoryblokVue from "@storyblok/vue";
import App from './App.vue';
import Page from '@/components/Page.vue';
import TeaserComponent from '@/components/TeaserComponent.vue';
import ImageComponent from '@/components/ImageComponent.vue';
import HeadlineComponent from '@/components/HeadlineComponent.vue';
import RichtextComponent from '@/components/RichtextComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import GridComponent from '@/components/GridComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
import FormInputComponent from '@/components/FormInputComponent.vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(StoryblokVue);

//#region Content Types
Vue.component('page', Page);
//#endregion Content Types

//#region Nestables
Vue.component('teaser-component', TeaserComponent);
Vue.component('image-component', ImageComponent);
Vue.component('headline-component', HeadlineComponent);
Vue.component('richtext-component', RichtextComponent);
Vue.component('button-component', ButtonComponent);
Vue.component('grid-component', GridComponent);
Vue.component('form-component', FormComponent);
Vue.component('form-input-component', FormInputComponent);
//#endregion Nestables

new Vue({
    render: (h) => h(App),
}).$mount('#app');
