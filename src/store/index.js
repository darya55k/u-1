//import { createStore } from 'vuex'
//var loader = import('./loader.module.js')
//var auth = import('./auth.module.js');
//import { ocr } from './ocr.module.js'
//import { nlp } from './nlp.module.js'
//import { applications } from './applications.module.js'
//import { programs } from './programs.module.js'

var store = Vuex.createStore({
  modules: {
    auth, //loader, auth //, ocr, nlp, programs, applications
  }
})
