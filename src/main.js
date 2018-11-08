import Vue from 'vue';
import App from './App.vue';

Vue.filter('count-words', function (val) {
  const wordsCount = val.split(' ').length;
  return `${val} (${wordsCount})`;
});

new Vue({
  el: '#app',
  render: h => h(App)
});
