<template>
  <div class="footers">
    <footer class="footer-area">

      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              &copy; Copyright 2020 . All Right Reserved By Abiodun JS
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="request-for-blood">
      <router-link to="request" target="_blank" class="request-link"><i class="fas fa-tint"></i>Request For Blood</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
