<template>
  <div class="join">
    <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner">
              <h2 class="page-title">   Donor Search
              </h2>
              <ul class="page-list">
                <li><a href="">Home</a></li>
                <li><a href="#">    Donor Search
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header bottom end -->

    <!-- our dedicated team area start  -->
    <section class="dedicated-team-area padding-120 " >
      <div class="container">
        <div class="row">

            <div class="col-lg-3 col-md-6" v-for="item in this.$store.getters.getSearch" :key="item._id">
              <div class="single-donors-item margin-bottom-30" >
                <div class="thumb">
                  <img style="height: 400px; width: 400px" :src="item.image ? '/uploads/'+item.image : '/uploads/no-image.png'" alt="no image available">
                </div>
                <div class="content">
                  <a href="">Name: <h4 class="title">{{item.name}}</h4></a>
                  <span class="blood-group">Blood Group: <strong>{{item.blood_group}}</strong></span>
                  <span class="total-donate">Mobile Number: <strong>{{item.mobile}}</strong></span>
                </div>

            </div>
          </div>


          <div class="col-lg-12">
            <nav class="pagination-wrapper" aria-label="Page navigation ">

            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


  export default {
    props: ['search'],
    name: 'searchComponent',
    data() {
      return {

      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
