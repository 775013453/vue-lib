import AButton from './src/index.vue';

// 如果想通过CDN方式引入，需要编写install函数
// 注册组件
// @ts-ignore
AButton.install = function (Vue) {
  Vue.component('a-button', AButton);
};

export default AButton;
