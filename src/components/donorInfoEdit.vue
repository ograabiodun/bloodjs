<template>

  <div class="donoredit">
    <div v-if="currentUser[0]">
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">  Edit Donor Info
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="#">   Edit Donor Info
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="donor-dashboard-page-content padding-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="donor-content-area " style="text-align: justify" >
                <h2 class="title">Edit Donor Info</h2>
                <form @submit.prevent="editDonorInfo" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="father_name">Father Name</label>
                    <input type="text" class="form-control" name="father_name" v-model="father_name" id="father_name" value="">
                  </div>
                  <div class="form-group">
                    <label for="mother_name">Mother Name</label>
                    <input type="text" class="form-control" name="mother_name" v-model="mother_name" id="mother_name" value="">
                  </div>
                  <div class="form-group">
                    <label for="present_address">Present Address</label>
                    <textarea name="present_address" v-model="present_ads" class="form-control max-height-100" id="present_address" cols="30" rows="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="permanent_address">Permanent Address</label>
                    <textarea name="permanent_address" v-model="permanent_ads" class="form-control max-height-100" id="permanent_address" cols="30" rows="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="mobile">Mobile</label>
                    <input type="text" class="form-control" id="mobile" readonly="" v-model="mobile" value="">
                  </div>
                  <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input type="date" class="form-control" v-model="birthday" name="birthday" id="birthday" value="2020-03-20">
                  </div>
                  <div class="form-group">
                    <label for="blood_group">Blood Group</label>
                    <input type="text" class="form-control" name="blood_group" v-model="blood_group" id="blood_group" value="">
                  </div>
                  <img style="max-width: 80px; margin-bottom: 20px" :src="getUserProfile()"  alt="no image available">
                  <div class="form-group">
                    <label for="image" class="d-block">Image</label>
                    <input type="file" name="image" id="image" @change="sendFile">
                    <span class="text d-block text-danger">upload 300x300 size image will be better.</span>
                  </div>
                  <div class="form-group">
                    <label for="area_id">Area</label>
                    <select name="area_id" class="form-control nice-select wide" v-model="area" id="area_id">
                      <option value="">Area</option>
                      <option value="California">California</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="Malta">Malta</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="London">London</option>
                    </select>
                  </div>
                  <br>
                  <br>
                  <div class="form-group">
                    <button type="submit" class="submit-btn">Save Change</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <loginPage></loginPage>
    </div>
  </div>

</template>

<script>
  import axios from "axios";
  import {mapState} from "vuex";

  export default {

    name: "userinfo",
    data(){
      return{
        UserProfile: [],
        father_name: '',
        mother_name: '',
        present_ads: '',
        permanent_ads: '',
        mobile: '',
        blood_group: '',
        birthday: '',
        area: '',
        image: '',
        dp: '',

        donorId: this.$store.state.currentUser,

      }
    },

    computed: {
      ...mapState(['currentUser'])
    },
    methods: {

      getUserProfile(){
        return this.image ? "/uploads/"+this.image : "/uploads/no-image.png";
      },
      sendFile(e) {

        this.image = e.target.files[0];
        console.log(e.target.files[0].name);
        const formData = new FormData();
        formData.append("file",    this.image);
        axios.post('/upload',formData)
                .then((response) => {
                  console.log(response.data.file.mimetype);
                  this.image = response.data.file.filename ;
                //  this.image = d !== ' ' ?  d : '@/assets/uploads/no-image.png'

                })
                .catch((error) => {
                  console.log(error);
                });

      },


      editDonorInfo() {
        let id =  JSON.parse(JSON.stringify(this.donorId));
        this.$store.dispatch("EDIT_DONOR_PROFILE", {
          fatherName: this.father_name,
          motherName: this.mother_name,
          presentAddress: this.present_ads,
          permanentAddress: this.permanent_ads,
          blood_group: this.blood_group,
          mobile: this.mobile,
          birthDate: this.birthday,
          area_id: this.area,
          image: this.image,
          _id: id[0]._id
        })
                .then(() => {
                  this.$router.push("/donor-edit-donor-info")

                })
                .catch((error) => {
                  console.log(error);
                })
      }
    },

    mounted() {
      //load the donor profile on each page load or refresh
      let id =  JSON.parse(JSON.stringify(this.donorId));
      let searchId = {
        params: {
          _id:  id[0]._id,
        }

      };

      axios.get('https://blooddjs.herokuapp.com/api/donor/profile', searchId)
              .then(({data}) => {
             //  console.log(data);
                      this.father_name = data.fatherName;
                      this.mother_name = data.motherName;
                      this.present_ads = data.presentAddress;
                     this.permanent_ads  = data.permanentAddress;
                     this.mobile = data.mobile;
                     this.blood_group = data.blood_group;
                      this.birthday = data.birthDate;
                      this.area = data.area_id;
                    this.image = data.image;
                this.UserProfile = data;
                this.getUserProfile();
              })

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
