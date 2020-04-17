<template>
  <div class="searchbox">
    <div class="header-bottom-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="blood-search-warpper">
              <form @submit.prevent="searchDonor"  class="blood-search-form" >
                <ul class="fields-list">
                  <li>
                    <div class="form-group">
                      <select class="form-control nice-select wide" @change="searchit" v-model="search.area_id" name="area_id">
                        <option value="">Areas</option>
                        <option value="California">California</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="Malta">Malta</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="London">London</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="form-group ">
                      <select class="form-control nice-select wide" @change="searchit" v-model="search.blood_group" name="blood_group">
                        <option value="">Blood Group</option>
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
                  </li>
                  <li>
                    <button value="Search Donor" type="submit" class="submit-btn" >Search Donor</button>

                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- our dedicated team area start  -->

        </div>
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
        searchResult: '',
        search: {area_id: '', blood_group: '',},


      }
    },


    methods: {
      searchDonor(){
       // $('.bd-example-modal-lg').modal('show');
        this.$store.commit('searchDonor',this.searchResult);
        this.$router.push('search')
      },
      searchit(){
        let newsearch = {
          params: {
            area_id: this.search.area_id,
            blood_group: this.search.blood_group,

          }

            };


        axios.get('https://blooddjs.herokuapp.com/api/donor/search', newsearch)
                .then(({data}) => {
                  console.log(data);
                  this.searchResult = data;
            //this.$router.push('search');
                })
      },
    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
