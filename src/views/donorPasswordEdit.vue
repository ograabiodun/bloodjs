<template>
  <div class="donor-profile-edit">
    <Headers></Headers>

    <donorPassword></donorPassword>
    <footers></footers>
  </div>
</template>

<script>


import {mapState} from "vuex";

export default {
  name: "donor-profile-edit",
  computed: {
    ...mapState(['currentUser'])
  },
};
</script>
