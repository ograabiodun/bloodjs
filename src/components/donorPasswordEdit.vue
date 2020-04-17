<template>

  <div class="donoredit" >
    <div v-if="currentUser[0]">
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">    Edit Password
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="#">    Edit Password
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="donor-dashboard-page-content padding-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="donor-content-area">
                <h2 class="title">Edit Password</h2>
                <form @submit.prevent="editPassword">

                  <div class="form-group">
                    <input type="password" class="form-control" name="password" v-model="password"  placeholder="Enter New Password"  id="username" >
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control"  name="confirmPassword" v-model="confirmPassword"  id="password" placeholder="Confirm New Password">
                  </div>
                  <div class="form-group">
                    <button type="submit" class="submit-btn">Save Password</button>
                  </div>
                </form>
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
  /* eslint-disable */
  import axios from "axios";
  import {mapState} from "vuex";

  export default {

    name: "EditPassword",
    data(){
      return{
        UserProfile: [],
        password: '',
        confirmPassword: '',

        donorId: this.$store.state.currentUser,

      }
    },

    computed: {
      ...mapState(['currentUser'])
    },
    methods: {
      //edit the profile

      editPassword() {

          if (this.password === this.confirmPassword){
              let id =  JSON.parse(JSON.stringify(this.donorId));
              this.$store.dispatch("EDIT_PASSWORD", {
                  password: this.password,

                  _id: id[0]._id
              })
                  .then((response ) => {
                      if (response === true){

                          this.$router.push("/donor-edit-password")
                        Toast.fire({
                          icon: 'success',
                          title: 'Updated Successfully '
                        });
                      }else{
                          console.log('failed')
                      }

                  })
                  .catch((error) => {
                      console.log(error);
                  })
          }else{
              alert('Password is not the same');
          }


      }
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
