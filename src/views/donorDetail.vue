<template>
  <div class="donorProfile">
    <Headers></Headers>
    <DonorDetails></DonorDetails>
    <footers></footers>
  </div>
</template>

<script>


import {mapState} from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(['currentUser'])
  },
};
</script>
