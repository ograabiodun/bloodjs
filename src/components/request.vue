<template>

  <div class="join">
    <div  v-if="currentUser[0]">
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">    Request For blood
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="join-donor#">    Request For Donor
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content contact-page-content-area padding-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="righti-content-area">
                <div class="contact-page-form-wrap">
                  <form  @submit.prevent="createDonor"  class="contact-page-form">

                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <div class="form-group">
                          <input type="text" name="name" v-model="user.name" placeholder="Your Name" value="" class="form-control" required="" aria-required="true">
                        </div>

                        <div class="form-group">
                          <input type="email" name="email" v-model="user.email" placeholder="Your Email" value="" class="form-control" required="" aria-required="true">
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" v-model="user.mobile" id="mobile" name="mobile" placeholder="Mobile">
                        </div>


                        <div class="form-group">
                          <select name="blood_group" id="blood_group" v-model="user.blood_group" class="form-control nice-select wide">
                            <option value="">Blood Group</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <select name="area_id" v-model="user.area_id" class="form-control nice-select wide" id="area-id">
                            <option value="">Select Area</option>
                            <option value="California">California</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="Malta">Malta</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="London">London</option>
                          </select>
                        </div>

<!--                        <div class="form-group">-->
<!--                          <input type="text" class="form-control" v-model="user.numberUnit" id="numberUnit" name="numberUnit" placeholder="number of Unit">-->
<!--                        </div>-->

                        <div class="form-group">
                          <input type="text" class="form-control" v-model="user.illness" id="illness" name="illness" placeholder="Illness">
                        </div>

                        <div class="form-group">
                          <textarea type="text" class="form-control" v-model="user.hospitalAddress" id="hospitalAddress" name="hospitalAddress" placeholder="hospitalAddress"></textarea>
                        </div>

                        <div class="form-group">
                          <textarea type="text" class="form-control" v-model="user.message" id="message" name="message" placeholder="message"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit"  value="" class="btn btn-danger register-as-donor">Submit Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <loginPage></loginPage>

    </div>
  </div>

</template>

<script>

  import axios from 'axios';
  import {mapState} from "vuex";
  export default {
    name: 'request',
    computed: {
      ...mapState(['currentUser'])
    },
    data() {
      return {
         user: {
          name: '',
          email: '',
          mobile: '',
          blood_group:'',
           area_id: '',
           hospitalAddress: '',
           directRequest: 0,
           message: '',
           illness: '',


        },
      }
    }, methods: {
      createDonor() {
        let newRequest = {
          name: this.user.name,
          username: this.user.username,
          mobile:this.user.mobile,
          email: this.user.email,
          blood_group: this.user.blood_group,
          area_id: this.user.area_id,
          directRequest: this.user.directRequest,
          illness: this.user.illness,
          hospitalAddress: this.user.hospitalAddress,
          message: this.user.message,
        };
       // console.log(newUser);
        axios.post('https://blooddjs.herokuapp.com/api/donor/request',newRequest)
                .then((response) => {
                  console.log(response);
                  this.$router.push("/")
                })
                .catch((error) => {
                  console.log(error);
                });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
