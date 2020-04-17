<template>
  <div class="dashboard">
      <div id="wrapper">

          <!-- menu -->
          <div class="page-menu">
              <!-- btn close on small devices -->
              <span class="btn-menu-close" uk-toggle="target: #wrapper ; cls: mobile-active"></span>
              <!-- traiger btn -->
              <span class="btn-menu-trigger" uk-toggle="target: #wrapper ; cls: menu-collapsed"></span>

              <!-- logo -->
              <div class="logo uk-visible@s">
                  <a href="#"> <img src="" alt=""> <span style="color:red;"> Blood Js </span> </a>
              </div>
              <div class="page-menu-inner" data-simplebar>



                  <ul data-submenu-title="Menu">
                      <li><router-link to="/dashboard/overview"><i class="uil-home-alt"></i> <span> Dashboard </span></router-link> </li>
                      <li><router-link to="/dashboard/donor-list"><i class="uil-users-alt"></i> <span> All Donors</span></router-link> </li>
                      <li><router-link to="/dashboard/donor-new"><i class="uil-building"></i> <span>Create New Donor</span></router-link> </li>
                      <li><router-link to="/dashboard/blood-request"><i class="uil-heart-alt"></i> <span> All Blood Request</span></router-link> </li>
                      <li><router-link to="/dashboard/create-blood-request"><i class="uil-medical-drip"></i> <span> New Blood Request</span></router-link> </li>

                      <li><a href=""  @click="logout"><i class="uil-sign-out-alt"></i> <span> Log out</span></a> </li>
                  </ul>



              </div>
          </div>

          <div class="box-gradient-home"></div>

          <!-- content -->
          <div class="page-content">


              <router-view />


          </div>

      </div>
  <!-- page-wrapper -->
  </div>



</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
// import * as externalJs from "../assets/js/simplebar.js";
// import * as externalJs3 from "../assets/js/jquery-3.3.1.min.js";
// import * as externalJs4 from "../assets/js/main.js";
export default {
  name: "dasboard",
  props: {
    msg: String
  },
methods: {

    logout() {

        console.log('i am out');
        this.$store.dispatch("logout");
        this.$router.push('/login');
    },
}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    @import "../assets/css/bootstrap.css";
    @import "../assets/css/style.css";
    @import "../assets/css/uikit.css";
    @import "../assets/css/icons.css";

</style>
