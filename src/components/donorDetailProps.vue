<template>
  <div class="donorDetailProps">
    <a href="#" @click="donorDetail"><h4 class="title">{{donorName}}</h4></a>
  </div>
</template>



  <script>
    /* eslint-disable */

    import axios from 'axios';
  export default {

    props: {
    id: String,
    name: String
    },
    data() {
      return {
        donorName: this.name,
        donorId: this.id

      }
    },


    methods: {
      donorDetail(){
        this.$store.commit('donorDetail',this.donorId);
        this.$router.push('/donor-detail')
      },

    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
