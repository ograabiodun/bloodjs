<template>
  <div class="requestButton">


    <button href="#" data-toggle="modal" @click="updateDonor" data-target="#exampleModalLong" class="btn btn-icon btn-hover btn-sm btn-circle">
      <i class="uil-pen "></i> </button>
    <a href="#" @click="deleteDonor" class="btn btn-icon btn-hover btn-sm btn-circle">
      <i class="uil-trash-alt text-danger"></i> </a>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">EDIT DONOR INFO</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: justify">
            <input type="hidden" name="donor_id" id="donor_id" value="33">
            <div class="form-group">
              <label for="edit_username">Username</label>
              <input type="text" class="form-control" v-model="user.username" readonly="" id="edit_username">
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" v-model="user.name" id="name" name="name" placeholder="Enter Name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" v-model="user.email" id="email" name="email" placeholder="Enter Email">
            </div>
            <div class="form-group">
              <label for="father_name">Father Name</label>
              <input type="text" class="form-control" v-model="user.fatherName" id="father_name" name="father_name" placeholder="Father Name">
            </div>
            <div class="form-group">
              <label for="mother_name">Mother Name</label>
              <input type="text" class="form-control" v-model="user.motherName" id="mother_name" name="mother_name" placeholder="Mother Name">
            </div>
            <div class="form-group">
              <label for="present_address">Present Address</label>
              <textarea class="form-control" id="present_address" v-model="user.presentAddress" name="present_address" placeholder="Present Address"></textarea>
            </div>
            <div class="form-group">
              <label for="permanent_address">Permanent Address</label>
              <textarea class="form-control" v-model="user.permanentAddress" id="permanent_address" name="permanent_address" placeholder="Permanent Address"></textarea>
            </div>
            <div class="form-group">
              <label for="mobile">Mobile</label>
              <input type="text" class="form-control" v-model="user.mobile" id="mobile" name="mobile" placeholder="Mobile">
            </div>
            <div class="form-group">
              <label for="birthday">Birthday</label>
              <input type="date" class="form-control" v-model="user.birthDate" id="birthday" name="birthday" placeholder="Birthday">
            </div>
            <div class="form-group">
              <label for="blood_group">Blood Group</label>
              <select name="blood_group" id="blood_group" v-model="user.blood_group" class="form-control">
                <option value="o+">O+</option>
                <option value="o-">O-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
              </select>
            </div>
            <div class="form-group">
              <label for="area">Areas</label>
              <select name="area" id="area" v-model="user.area_id" class="form-control">
                <option value="">Select Area</option>
                <option value="California">California</option>
                <option value="New Mexico">New Mexico</option>
                <option value="Malta">Malta</option>
                <option value="Mauritius">Mauritius</option>
                <option value="London">London</option>
              </select>
            </div>
<!--            <img :src="getUserProfile" id="donor_edit_modal_prev_img" style="width:80px; margin-bottom: 10px;" alt="edit donor">-->

          </div>
          <div class="modal-footer">
            <button type="button"  class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="editDonor" class="btn btn-danger">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


  <script>
    /* eslint-disable */

    import axios from "axios";

    import {mapState} from "vuex";
  export default {
    props: {
      donorId: String,

    },
    data() {
      return {
        user: {},
        User_id: this.donorId,
      }
    },

    methods: {
      // getUserProfile(){
      //   return this.user.image ? "/uploads/"+this.user.image : "/uploads/no-image.png";
      // },
      editDonor() {
        let newUser = {
          _id: this.User_id,
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          birthDate: this.user.birthDate,
          mobile: this.user.mobile,
          blood_group: this.user.blood_group,
          area_id: this.user.area_id,
          fatherName: this.user.fatherName,
          motherName: this.user.motherName,
          presentAddress: this.user.presentAddress,
          permanentAddress: this.user.permanentAddress,
        };
        // console.log(newUser);
        axios.post('https://blooddjs.herokuapp.com/api/donor/admin/info/edit',newUser)
                .then((response) => {
                  console.log(response);
                  $('#exampleModalLong').modal('hide')
                  Toast.fire({
                    icon: 'success',
                    title: 'Update Successfully '
                  });

                  this.$router.push('/dashboard/donor-list')
                })
                .catch((error) => {
                  console.log(error);
                });
      },
      updateDonor(){
        let newDonorId = {
          params: {
            _id: this.User_id,
          }
        };
        console.log(newDonorId);
        axios.get('https://blooddjs.herokuapp.com/api/donor/get', newDonorId)
                .then(({data}) => {
                  console.log(data);
                  Toast.fire({
                    icon: 'success',
                    title: 'Update Successfully '
                  });
                  this.user = data;
                  //this.$router.push('search');
                })
      },
      deleteDonor(){
        let newDonorId = {
            _id: this.User_id,
        };
        console.log(newDonorId);
        axios.post('https://blooddjs.herokuapp.com/api/donor/delete', newDonorId)
                .then(({response}) => {
                  console.log(response);
                  Toast.fire({
                    icon: 'success',
                    title: 'Deleted Successfully '
                  });

                })

      }
    },

    mounted() {
      // this.getUserProfile();

    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
