<template>
  <div class="page-content-inner">

    <h2 class="text-white"> ALL Blood Request</h2>
    <nav id="breadcrumbs" class="text-white">
      <ul>
        <li><a href="/dashboard"> Dashboard </a></li>
        <li> <a href="#">ALL Blood Request</a> </li>

      </ul>
    </nav>


    <div class="card">
      <!-- Card header -->
      <div class="card-header actions-toolbar border-0">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="d-inline-block mb-0">Blood Request</h4>

        </div>
      </div>
      <!-- Table -->
      <div class="table-responsive">
        <table class="table align-items-center">
          <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Blood Group</th>
            <th>Illness</th>
            <th>Hospital Address</th>
          </tr>
          </thead>
          <tbody class="list">
          <tr v-for="(bloodRequest, index) in allRequest" :key="bloodRequest._id">

            <th scope="row">
              <div class="media align-items-center">

                <div class="media-body ">
                  <small class="d-block font-weight-bold">#{{index}}</small>
                </div>
              </div>
            </th>

            <td>  <a href="#" class="name h6 mb-0 text-sm">{{bloodRequest.name}}</a></td>
            <td> {{bloodRequest.email}}</td>
            <td> {{bloodRequest.mobile}}</td>
            <td>
              {{bloodRequest.blood_group}}
            </td>
            <td>
              {{bloodRequest.illness}}
            </td>
            <td>
              {{bloodRequest.hospitalAddress}}
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
        allRequest:{},

      }
    },
    methods: {

      loadAllREQUEST(){
        axios.get("http://localhost:5000/api/admin/request/all").then((response) => {
          this.allRequest = response.data;

        });
      },

    },
    created() {

      this.loadAllREQUEST();
      //setInterval(() => this.loadRequester(), 50000);

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
