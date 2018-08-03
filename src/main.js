// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


let app;

var config = {
  apiKey: "AIzaSyANQr7WFOZCX7sghVbvpvkQJr_BnBqL7FA",
  authDomain: "firestore-58224.firebaseapp.com",
  databaseURL: "https://firestore-58224.firebaseio.com",
  projectId: "firestore-58224",
  storageBucket: "firestore-58224.appspot.com",
  messagingSenderId: "768770216510"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){
  if(!app){

    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});

/* eslint-disable no-new */
