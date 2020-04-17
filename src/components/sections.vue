<template>
  <div class="hello">
    <header class="header-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="left-content-area">
              <h1 class="title">Donate Blood To Save Life</h1>
              <p>BloodBank is a responsive blood bank and donor Content Management System (CMS). Agents can register and manage donors easily</p>
              <div class="btn-wrapper">
                <router-link to="/join" class="boxed-btn">Join Now</router-link>
                <a href="" class="boxed-btn blank">Contact Us</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="right-content-area">
              <div class="img-wrapper">
                <img src="/uploads/header-right-image-54545.png"  alt="Donate Blood To Save Life">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
   <searchBox></searchBox>
    <section class="blood-donation-process-area padding-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title margin-bottom-60">
              <h2 class="title">Blood Donation Process</h2>
              <span class="separator"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blood-donation-process">
              <ul class="donation-process-list">
                <li class="single-donation-process">
                  <span class="number">01</span>
                  <h4 class="title">Registration</h4>
                </li>
                <li class="single-donation-process">
                  <span class="number">02</span>
                  <h4 class="title">Screening</h4>
                </li>
                <li class="single-donation-process">
                  <span class="number">03</span>
                  <h4 class="title">Donation</h4>
                </li>
                <li class="single-donation-process">
                  <span class="number">04</span>
                  <h4 class="title">Rest &amp; Refresh</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- our valuable donor area start  -->
    <section class="our-valuable-donor-area padding-bottom-90">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title margin-bottom-60">
              <h2 class="title">Our Available Donors</h2>
              <span class="separator"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">A+</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">A-</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">O+</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">O-</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">B+</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">B-</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">AB+</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-donor-group-item">
              <div class="icon">
                <span class="blood-group">AB-</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- our valuable donor area end  -->
    <div class="recently-requested-area padding-bottom-90">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title margin-bottom-60">
              <h2 class="title">Recent Request For Blood</h2>
              <span class="separator"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="recent-requested-blood-table">
              <table class="table">
                <thead>
                <tr>
                  <th scope="col">Name</th>

                  <th scope="col">Blood Group</th>
                  <th scope="col">Number Of Units</th>
                  <th scope="col">Illness</th>
<!--                  <th scope="col">Contact Number</th>-->
                  <th scope="col" v-if="currentUser[0]">Accept Status</th>
                  <th scope="col">Hospital Address</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in requester" :key="item._id">
                  <th scope="row">{{ item.name }}</th>
                  <td>{{ item.blood_group }}</td>
                  <td>{{ item.numberUnit }}</td>
                  <td>{{ item.illness }}</td>
<!--                  <td>{{ item.mobile }}</td>-->
                  <td v-if="currentUser[0]"><requestBtn :email="item.email"
                                  :donorName="currentUser[0].name"
                                  :donorEmail="currentUser[0].email"
                                  :donorId="currentUser[0]._id"
                                  :totalDonate="currentUser[0].total_donation"
                                  :requestName="item.name"
                                  :requestBlood="item.blood_group"
                  ></requestBtn></td>
                  <td>{{ item.hospitalAddress }}</td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- recently Donated memeber start -->
    <div class="recently-donated-donors padding-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title margin-bottom-60">
              <h2 class="title">Recent Donors</h2>
              <span class="separator"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="latest in recentDonor" :key="latest._id">
            <div class="recently-donated-donors-carousel">
              <div class="single-donors-item" >
                <div class="thumb">
                  <img style="width: 400px;height: 400px" :src="latest.image ? '/uploads/'+latest.image : '/uploads/no-image.png'" alt="">
                </div>
                <div class="content">
                  <DonorDetailsProps
                  :id="latest._id"
                  :name="latest.name"
                  ></DonorDetailsProps>
                  <span class="blood-group">Blood Group: <strong>{{latest.blood_group}}</strong></span>
                  <span class="total-donate">Total Donate: <strong>{{latest.total_donation}} </strong> Times</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- recently Donated memeber end -->


    <div class="coutnerup-area red-bg padding-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="single-counterup-item">
              <div class="icon">
                <i class="fas fa-address-book"></i>
              </div>
              <div class="content">
                <span class="count-num">2050</span>
                <h4 class="title">Happy Donors</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-counterup-item">
              <div class="icon">
                <i class="fas fa-tint"></i>
              </div>
              <div class="content">
                <span class="count-num">20</span>
                <h4 class="title">Blood Group</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-counterup-item">
              <div class="icon">
                <i class="fas fa-grin"></i>
              </div>
              <div class="content">
                <span class="count-num">203</span>
                <h4 class="title">Blood Group</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-counterup-item">
              <div class="icon">
                <i class="fas fa-trophy"></i>
              </div>
              <div class="content">
                <span class="count-num">20</span>
                <h4 class="title">Total Awards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <search v-if="false" :search="searchResult"></search>
  </div>
</template>



  <script>
    /* eslint-disable */

    import axios from 'axios';
    import {mapState} from "vuex";
  export default {
    data() {
      return {

        requester :{},
        recentDonor:{},
        searchResult:{},
        search: {area_id: '', blood_group: '',},


      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    methods: {

//loads all the request for donor and display from the mongoose server api
      loadRequester(){
          axios.get("https://blooddjs.herokuapp.com/api/donor/request/get").then((response) => {
            this.requester = response.data

          });
      },
      loadRecentDonor(){
        axios.get("https://blooddjs.herokuapp.com/api/donor/latest").then((response) => {
          this.recentDonor = response.data;

        });
      },

    },
    created() {
      this.loadRequester();
      this.loadRecentDonor();
      //setInterval(() => this.loadRequester(), 50000);

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
