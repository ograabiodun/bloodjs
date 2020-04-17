import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
//IMPORT JQUERY TO THE APP
window.Vue = Vue;
import jQuery from 'jquery';
import axios from "axios";
import store from './store.js'
//MAKING JQUERY GLOBAL TO ALL PAGES
window.$ = window.jQuery = jQuery;
import 'popper.js';

// sweetalert
import Swal from 'sweetalert2'

window.Swal = Swal;



const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;
axios.defaults.baseURL = "https://blooddjs.herokuapp.com/api/";
//ADD A CUSTOM CSS FILE TO COMPILE
import './assets/app.scss'
import 'bootstrap';
// import "./assets/css/bootstrap.css";
import "./assets/frontend/css/fontawesome.min.css";
import "./assets/frontend/css/owl.carousel.min.css";
import "./assets/frontend/css/nice-select.css";
import "./assets/frontend/css/style.css";
import "./assets/frontend/css/owl.video.play.png";
import "./assets/frontend/css/responsive.css";
import "./assets/frontend/css/dynamic-style.css";

// //BACKEND CSS DESIGN

//CREATING FRONTEND COMPONENT FOR THE VUE
Vue.component('sections', require('./components/sections.vue').default  );
Vue.component('Headers', require('./components/header.vue').default  );
Vue.component('footers', require('./components/footers.vue').default  );
Vue.component('Dashboard', require('./views/Dashboard.vue').default  );
Vue.component('join', require('./components/join.vue').default  );
Vue.component('searchBox', require('./components/searchBox.vue').default  );
Vue.component('requestDonor', require('./components/request.vue').default  );
Vue.component('searchResult', require('./components/searchResult.vue').default  );
Vue.component('loginPage', require('./components/login.vue').default  );
Vue.component('donor-profile', require('./components/donorProfile.vue').default  );
Vue.component('donorEdit', require('./components/donorEdit.vue').default  );
Vue.component('donorPassword', require('./components/donorPasswordEdit.vue').default  );
Vue.component('donorInfoEdit', require('./components/donorInfoEdit.vue').default  );
Vue.component('requestBtn', require('./components/requestButton.vue').default  );
Vue.component('DonorDetailsProps', require('./components/donorDetailProps.vue').default  );
Vue.component('DonorDetails', require('./components/donorDetails.vue').default  );


//CREATING BACKEND COMPONENT
Vue.component('dashEditButton', require('./components/dashDonorEdit.vue').default  );
Vue.component('overview', require('./views/Overview.vue').default  );
window.fire =  new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
