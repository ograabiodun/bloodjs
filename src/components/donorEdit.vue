<template>

  <div class="donoredit">
    <div  v-if="currentUser[0]">
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">    Edit Profile
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="#">    Edit Profile
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
                <h2 class="title">Edit Profile</h2>
                <form @submit.prevent="editProfile">
                  <div class="form-group">
                    <input type="text" class="form-control" readonly="" v-model="username">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="name"   id="username" v-model="username">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control"  name="email" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <button type="submit" class="submit-btn">Save Change</button>
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

    name: "useredit",

    data(){
      return{
        UserProfile: [],
        username: '',
        email: '',

        donorId: this.$store.state.currentUser,

      }
    },

    computed: {
      ...mapState(['currentUser'])
    },
    methods: {
      //edit the profile

      editProfile() {


        let id =  JSON.parse(JSON.stringify(this.donorId));

        this.$store.dispatch("EDIT_PROFILE", {
          username: this.username,
          email: this.email,
          _id: id[0]._id
        })
                .then((response ) => {
                  if (response === true){
                    Toast.fire({
                      icon: 'success',
                      title: 'Updated Successfully '
                    });
                 this.$router.push("/donor-edit")
                  }else{
                    console.log('failed')
                  }

                })
                .catch((error) => {
                  console.log(error);
                })
      }
    },

    mounted() {
      //load the donor profile on each page load or refresh
      let id =  JSON.parse(JSON.stringify(this.donorId));
      let searchId = {
        params: {
          _id:  id[0]._id,
        }

      };

      axios.get('https://blooddjs.herokuapp.com/api/donor/profile', searchId)
              .then(({data}) => {
                this.username = data.username;
                this.email = data.email;
                this.UserProfile = data;
                //this.$router.push('search');
              })

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
