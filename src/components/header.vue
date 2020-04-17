<template>
  <div class="header">
    <head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="description" content="#">


        <title>BloodJs - A Blood Donation Organization</title>
    </head>
    <!-- top bar area start  -->
    <div class="topbar-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="topbar-inner">
              <div class="left-content-area">
                <ul class="info-items">
                  <li><i class="fas fa-envelope"></i> support@bloodjs.com</li>
                  <li><i class="fas fa-phone"></i> + 000 11 22 33</li>
                </ul>
              </div>
              <div class="right-content-area">
                <div class="right-inner">
                  <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i class="fas fa-award"></i></a></li>
                  </ul>

                  <div class="btn-wrapper" v-if="!currentUser[0]">
                    <router-link to="/login"  class="boxed-btn" >Login</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-area navbar-expand-lg">
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <div class="logo-wrapper">
            <a href="#" class="logo"><h1 style="font-weight:500;font-size: xx-large"><span style="color:red">BLOOD</span>  JS</h1>

            </a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#weforyou_main_menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="weforyou_main_menu">
          <ul class="navbar-nav">
            <li class="current-menu-item"><a href="/">Home</a></li>
            <li class=""><a href="#">About</a></li>
            <li class=""><a href="#">Donors</a></li>
            <li class=""><a href="#">Request</a></li>
            <li class=""><a href="#">Contact</a></li>

            <li class="menu-item-has-children" v-if="currentUser.length <= 1">
              <a href="javascript:void(0)">{{currentUser[0].name}}</a>
              <ul class="sub-menu">
                <li><router-link to="/donor-profile">Dashboard</router-link></li>
                <li><router-link to="/donor-edit">Edit Profile</router-link></li>
                <li><router-link to="/donor-edit-donor-info">Edit Donor Info</router-link></li>
                <li><router-link to="/donor-edit-password">Change Password</router-link></li>
                <li>
                  <a href="#" @click="logoutUser" >Logout</a>
                </li>
              </ul>
            </li>
            <li class="menu-btn" v-else><router-link to="join">Join as Donor</router-link></li>
          </ul>
        </div>
      </div>
    </nav>


  </div>
</template>

<script>
  import {mapState} from 'vuex';
export default {

  props: {
    msg: String
  },
  computed: {
      ...mapState(['currentUser'])
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logout");
    }
  },
  created() {
    this.$store.dispatch('loadCurrent');

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
