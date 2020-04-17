<template>
  <div class="admin" >
    <div class="page-content-inner">



      <div class="row">

        <div class="col-md-4 col-lg-6 col-xl">

          <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">

                  <!-- Title -->
                  <h6 class="card-title text-uppercase text-muted mb-2"> NUMBER OF DONOR </h6>

                  <!-- Heading -->
                  <span class="h4 mb-0"> {{donorCount}}</span>


                </div>
                <div class="col-auto">

                  <!-- Icon -->
                  <div class="icon bg-gradient-warning text-white rounded-circle icon-shape">
                    <i class="uil-user icon-small"></i>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-4 col-lg-6 col-xl">

          <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">

                  <!-- Title -->
                  <h6 class="card-title text-uppercase text-muted mb-2"> TOTAL BLOOD REQUEST</h6>

                  <!-- Heading -->
                  <span class="h4 mb-0"> {{requestCount}}</span>


                </div>
                <div class="col-auto">

                  <!-- Icon -->
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="uil-heart-medical icon-small"></i>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-4 col-lg-6 col-xl">

          <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">

                  <!-- Title -->
                  <h6 class="card-title text-uppercase text-muted mb-2"> TOTAL BLOOD DONATE </h6>

                  <!-- Heading -->
                  <span class="h4 mb-0"> 4 </span>

                </div>
                <div class="col-auto">

                  <!-- Icon -->
                  <div class="icon bg-gradient-danger text-white rounded-circle icon-shape">
                    <i class="uil-medical-drip icon-small"></i>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div class="card">
        <!-- Card header -->
        <div class="card-header actions-toolbar border-0">
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="d-inline-block mb-0">Donors</h4>

          </div>
        </div>
        <!-- Table -->
        <div class="table-responsive">
          <table class="table align-items-center">
            <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Blood Group</th>
              <th>Area</th>
              <th>Total Donate</th>
              <th>Date of Birth</th>

            </tr>
            </thead>
            <tbody class="list">
            <tr v-for="(donor, index) in allDonor" :key="donor._id">

              <th scope="row">
                <div class="media align-items-center">

                  <div class="media-body ">
                    <small class="d-block font-weight-bold">#{{index}}</small>
                  </div>
                </div>
              </th>
              <td>  <div>
                <div class="avatar-parent-child" style="width: max-content">
                  <img alt="Image placeholder" :src="'/uploads/'+donor.image"
                       class="avatar  rounded-circle">
                  <span class="avatar-child avatar-badge bg-success"></span>
                </div>
              </div></td>
              <td>  <a href="#" class="name h6 mb-0 text-sm">{{donor.name}}</a></td>
              <td> {{donor.mobile}}</td>
              <td>
                {{donor.blood_group}}
              </td>
              <td>
                {{donor.area_id}}
              </td>
              <td>
                {{donor.total_donation}}
              </td>
              <td>
                {{donor.birthDate}}
              </td>

            </tr>

            </tbody>
          </table>

        </div>
      </div>


    </div>

  <!-- page-wrapper -->
  </div>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "Overview",
  props: {
    msg: String
  },
  data() {
    return {
      allDonor:{},
      donorCount: '',
      requestCount: ''
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods:{

    loadAllDonor(){
      axios.get("http://localhost:5000/api/admin/donor/all").then((response) => {
        this.allDonor = response.data;
        this.donorCount = Object.keys(response.data).length;

      });
    },
    loadAllREQUEST(){
      axios.get("http://localhost:5000/api/admin/request/all").then((response) => {
        this.requestCount = Object.keys(response.data).length;

      });
    },


  },
  mounted() {
this.loadAllREQUEST();
    this.loadAllDonor();

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
