import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfD3sDknwVTPTSgXGqLeV4dPuIl9rUWF8",
  authDomain: "gens-portfolio.firebaseapp.com",
  databaseURL: "https://gens-portfolio.firebaseio.com",
  projectId: "gens-portfolio",
  storageBucket: "",
  messagingSenderId: "926726598258",
  appId: "1:926726598258:web:8403f0e3cb1b1f8d"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
