<template>
  <div class="page-content-inner">

    <h2 class="text-white"> ALL DONORS</h2>
    <nav id="breadcrumbs" class="text-white">
      <ul>
        <li><a href="/dashboard"> Dashboard </a></li>
        <li> <a href="#">All Donor</a> </li>

      </ul>
    </nav>


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
            <th>Action</th>
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
            <td class="text-right">
              <!-- Actions -->
              <div class="actions ">

                <dashEditButton
                        :donorId="donor._id"
                ></dashEditButton>

              </div>
            </td>
          </tr>

          </tbody>
        </table>

      </div>
    </div>



  </div>
</template>



  <script>
    /* eslint-disable */

    import axios from 'axios';
  export default {
    data() {
      return {
        allDonor:{},

      }
    },
    methods: {

      loadAllDonor(){
        axios.get("http://localhost:5000/api/admin/donor/all").then((response) => {
          this.allDonor = response.data;

        });
      },

    },
    created() {

      this.loadAllDonor();
      //setInterval(() => this.loadRequester(), 50000);

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
