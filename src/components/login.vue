<template>
  <div class="join">
    <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner">
              <h2 class="page-title">    Login
              </h2>
              <ul class="page-list">
                <li><a href="">Home</a></li>
                <li><a href="join-donor#">    Login
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content contact-page-content-area padding-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="right-content-area">
              <div class="contact-page-form-wrap login-page">
                <h2 class="title">Login</h2>
                <form @submit.prevent="login" class="contact-page-form" novalidate="novalidate" >
                  <input type="hidden" name="_token" value="8faLYNthB89Une1TvjDvCVrI8AxQCWYzNiRCPDPj">                                <div class="form-group">
                  <input type="text" name="username" v-model="username" placeholder="Your Username" class="form-control" required="" aria-required="true">
                </div>
                  <div class="form-group">
                    <input type="password" v-model="password" name="password" placeholder="Your Password" class="form-control" required="" aria-required="true">
                  </div>
                  <div class="form-group">
                    <button type="submit" value="Login" class="btn btn-danger register-as-donor">Login</button>
                  </div>
                  <div class="extra-links form-group">
                    <a href="#">Forget Password ?</a>
                    <router-link to="/join">Don&#039;t Have Account ?</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from "axios";
  export default {
    name: "login",
    data: () => ({
      username: '',
      password: '',


    }),
    methods: {
      login() {
        this.$store.dispatch("LOGIN", {
          username: this.username,
          password: this.password
        })
                .then((response ) => {
                  if (response === true){
                    this.$router.push("/")
                    Toast.fire({
                      icon: 'success',
                      title: 'Login Successfully '
                    })

                  }else{
                    console.log('failed')
                  }

                })
                .catch((error) => {
                  console.log(error);
                })
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
