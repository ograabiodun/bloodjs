<template>

  <div class="join">
    <div v-if="!currentUser[0]" >
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">    Join As Donor
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="join-donor#">    Join As Donor
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
                          <input type="text" name="username" v-model="user.username" placeholder="Your Username" value="" class="form-control" required="" aria-required="true">
                        </div>
                        <div class="form-group">
                          <input type="email" name="email" v-model="user.email" placeholder="Your Email" value="" class="form-control" required="" aria-required="true">
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" v-model="user.mobile" id="mobile" name="mobile" placeholder="Mobile">
                        </div>
                        <div class="form-group">
                          <input type="date" class="form-control" v-model="user.birthDate" id="birthday" name="birthday">
                        </div>
                        <div class="form-group">
                          <input type="password" name="password" v-model="user.password" placeholder="Your Password"  class="form-control" required="" aria-required="true">
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
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit"  value="" class="btn btn-danger register-as-donor">Register As Donor
                      </button>  </div>
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
    name: 'join',
    computed: {
      ...mapState(['currentUser'])
    },
    data() {
      return {
         user: {
          name: '',
          username: '',
          email: '',
           birthDate: '',
          password: '',
          mobile: '',
           admin: 0,
          blood_group:'',
          area_id: '',
          total_donation: 0,
          request: '',
           image: '',
           fatherName: '',
           motherName: '',
           presentAddress: '',
           permanentAddress: '',
        },
      }
    }, methods: {
      createDonor() {
        let newUser = {
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          birthDate: this.user.birthDate,
          password: this.user.password,
          mobile: this.user.mobile,
          admin: 0,
          blood_group: this.user.blood_group,
          total_donation: 0,
          request: 0,
          requesterEmail: '',
          area_id: this.user.area_id,
          image: this.user.image,
          fatherName: this.user.fatherName,
          motherName: this.user.motherName,
          presentAddress: this.user.presentAddress,
          permanentAddress: this.user.permanentAddress,
        };
       // console.log(newUser);
        axios.post('https://blooddjs.herokuapp.com/api/donor/create',newUser)
                .then((response) => {
                  console.log(response);
                  this.$router.push('/login')
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
