<template>
  <div class="donordetail" >
    <div >
      <div class="breadcrumb-area"  style="background-image: url('./../uploads/breadcrumb-bg-29654.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">    Donor Detail
                </h2>
                <ul class="page-list">
                  <li><a href="">Home</a></li>
                  <li><a href="#">    Donor Detail
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="donor-dashboard-page-content padding-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-4" >
              <div class="donor-sidebar">
                <div class="profile-img">
                  <img style="width: 400px;height: 100%" :src="getUserProfile()" alt="no image available">
                </div>
                <div class="donor-info">
                  <h4 class="username"><strong>name: </strong> {{ UserProfile.name}}</h4>
                  <div class="btn-wrapper">
                    <a href="#" data-toggle="modal" data-target="#donor_contact" class="boxed-btn">Request</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="donor_contact" tabindex="-1" role="dialog" aria-labelledby="donor_contactTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="donor_contactTitle">Send Request</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" style="text-align: justify">

                    <div class="form-group">
                      <label for="Name">Name</label>
                      <input type="text" name="name" id="name" v-model="requesterName" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" v-model="requesterEmail" class="form-control" placeholder="Email">
                  </div>
                    <div class="form-group">
                      <textarea name="hospital" id="hospital" v-model="HospitalAddress" class="form-control max-height-150" cols="30" rows="10" placeholder="Hospital Address"></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="directRequests" class="btn btn-danger">Send Request</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="donor-content-area">
                <h2 class="title">Profile Information</h2>
                <ul style="text-align: justify">
                  <li ><strong>Name: </strong> <span class="right">{{ UserProfile.name}}</span></li>
                  <li><strong>Birth Date: </strong> <span class="right">{{ UserProfile.birthDate}}</span></li>
                  <li><strong>Birth Date: </strong> <span class="right">{{ UserProfile.username}}</span></li>
                  <li><strong>Blood Group: </strong> <span class="right">{{ UserProfile.blood_group}}</span></li>
                  <li><strong>Total Blood Donate: </strong> <span class="right">{{UserProfile.total_donation}}  Times</span></li>
                  <li><strong>Mobile: </strong> <span class="right">{{ UserProfile.mobile}}</span></li>
                  <li><strong>Father Name: </strong> <span class="right">{{ UserProfile.fatherName}}</span></li>
                  <li><strong>Mother Name: </strong> <span class="right">{{ UserProfile.motherName}}</span></li>
                  <li><strong>Present Address: </strong> <span class="right">{{ UserProfile.presentAddress}}</span></li>
                  <li><strong>Permanent Address: </strong> <span class="right">{{ UserProfile.permanentAddress}}</span></li>
                  <li><strong>Area: </strong> <span class="right">{{ UserProfile.area_id}}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  /* eslint-disable */
  import axios from "axios";
  const sgMail = require('@sendgrid/mail');
  //EMAIL SENDING API INSTANT
  const SENDGRID_API_KEY = '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';
  import {mapState} from "vuex";
  export default {
    name: "userProfile",
 data(){
      return{
        donorId: window.localStorage.getItem('donorId'),
        UserProfile: [],
        requesterName: '',
        HospitalAddress: '',
        requesterEmail: '',
        directRequest: 1,
      }
 },

    methods: {

      getUserProfile(){
        return this.UserProfile.image ? "/uploads/"+this.UserProfile.image : "/uploads/no-image.png";
      },
      directRequests(){

          sgMail.setApiKey(SENDGRID_API_KEY);
          const msg = {
            to: this.UserProfile.email,
            from: this.requesterEmail,
            subject: 'Blood Request Alert',
            html: '<html>\n' +
                    '<head>\n' +
                    '<title></title>\n' +
                    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
                    '<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n' +
                    '<style type="text/css">\n' +
                    '\t/* FONTS */\n' +
                    '    @media screen {\n' +
                    '\t\t@font-face {\n' +
                    '\t\t  font-family: \'Lato\';\n' +
                    '\t\t  font-style: normal;\n' +
                    '\t\t  font-weight: 400;\n' +
                    '\t\t  src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');\n' +
                    '\t\t}\n' +
                    '\t\t\n' +
                    '\t\t@font-face {\n' +
                    '\t\t  font-family: \'Lato\';\n' +
                    '\t\t  font-style: normal;\n' +
                    '\t\t  font-weight: 700;\n' +
                    '\t\t  src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');\n' +
                    '\t\t}\n' +
                    '\t\t\n' +
                    '\t\t@font-face {\n' +
                    '\t\t  font-family: \'Lato\';\n' +
                    '\t\t  font-style: italic;\n' +
                    '\t\t  font-weight: 400;\n' +
                    '\t\t  src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');\n' +
                    '\t\t}\n' +
                    '\t\t\n' +
                    '\t\t@font-face {\n' +
                    '\t\t  font-family: \'Lato\';\n' +
                    '\t\t  font-style: italic;\n' +
                    '\t\t  font-weight: 700;\n' +
                    '\t\t  src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');\n' +
                    '\t\t}\n' +
                    '    }\n' +
                    '    \n' +
                    '    /* CLIENT-SPECIFIC STYLES */\n' +
                    '    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }\n' +
                    '    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }\n' +
                    '    img { -ms-interpolation-mode: bicubic; }\n' +
                    '\n' +
                    '    /* RESET STYLES */\n' +
                    '    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }\n' +
                    '    table { border-collapse: collapse !important; }\n' +
                    '    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }\n' +
                    '\n' +
                    '    /* iOS BLUE LINKS */\n' +
                    '    a[x-apple-data-detectors] {\n' +
                    '        color: inherit !important;\n' +
                    '        text-decoration: none !important;\n' +
                    '        font-size: inherit !important;\n' +
                    '        font-family: inherit !important;\n' +
                    '        font-weight: inherit !important;\n' +
                    '        line-height: inherit !important;\n' +
                    '    }\n' +
                    '\n' +
                    '    /* ANDROID CENTER FIX */\n' +
                    '    div[style*="margin: 16px 0;"] { margin: 0 !important; }\n' +
                    '</style>\n' +
                    '</head>\n' +
                    '<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">\n' +
                    '\n' +
                    '<!-- HIDDEN PREHEADER TEXT -->\n' +
                    '<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">\n' +
                    '    .\n' +
                    '</div>\n' +
                    '\n' +
                    '<table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                    '    <!-- LOGO -->\n' +
                    '    <tr>\n' +
                    '        <td bgcolor="#7c72dc" align="center">\n' +
                    '            <table border="0" cellpadding="0" cellspacing="0" width="480" >\n' +
                    '                <tr>\n' +
                    '                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">\n' +
                    '                        <a href="#" target="_blank">\n' +
                    '                            <h3   style="display: block; font-family: \'Lato\', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0"><span style="color:red">BLOOD</span> JS</h3>\n' +
                    '                        </a>\n' +
                    '                    </td>\n' +
                    '                </tr>\n' +
                    '            </table>\n' +
                    '        </td>\n' +
                    '    </tr>\n' +
                    '    <!-- HERO -->\n' +
                    '    <tr>\n' +
                    '        <td bgcolor="#7c72dc" align="center" style="padding: 0px 10px 0px 10px;">\n' +
                    '            <table border="0" cellpadding="0" cellspacing="0" width="480" >\n' +
                    '                <tr>\n' +
                    '                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">\n' +
                    '                      <h1 style="font-size: 32px; font-weight: 400; margin: 0;">Blood Request Approved</h1>\n' +
                    '                    </td>\n' +
                    '                </tr>\n' +
                    '            </table>\n' +
                    '        </td>\n' +
                    '    </tr>\n' +
                    '    <!-- COPY BLOCK -->\n' +
                    '    <tr>\n' +
                    '        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">\n' +
                    '            <table border="0" cellpadding="0" cellspacing="0" width="480" >\n' +
                    '              <!-- COPY -->\n' +
                    '              <tr>\n' +
                    '                <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >\n' +
                    '                  <p style="margin: 0;">Dear '+this.UserProfile.name+', You have a Request for a blood donation for the blood group ( '+this.UserProfile.blood_group+' ) at '+this.HospitalAddress+' </p>\n' +
                    '                </td>\n' +
                    '              </tr>\n' +
                    '              <!-- BULLETPROOF BUTTON -->\n' +
                    '              <tr>\n' +
                    '                <td bgcolor="#ffffff" align="left">\n' +
                    '                  <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
                    '                    <tr>\n' +
                    '                      <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">\n' +
                    '                        <table border="0" cellspacing="0" cellpadding="0">\n' +
                    '                          <tr>\n'+
                    '              <td align="center" style="border-radius: 3px;" bgcolor="#7c72dc"><a href="http://192.168.8.102:8080/login" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #7c72dc; display: inline-block;">Accept Pending Request</a></td>            </tr>\n' +
                    '                        </table>\n' +
                    '                      </td>\n' +
                    '                    </tr>\n' +
                    '                  </table>\n' +
                    '                </td>\n' +
                    '              </tr>\n' +
                    '            </table>\n' +
                    '        </td>\n' +
                    '    </tr>\n' +
                    '    <!-- COPY CALLOUT -->\n' +
                    '    <tr>\n' +
                    '        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">\n' +
                    '            <table border="0" cellpadding="0" cellspacing="0" width="480" >\n' +
                    '                <!-- HEADLINE -->\n' +
                    '                <tr>\n' +
                    '                  <td bgcolor="#111111" align="left" style="padding: 40px 30px 20px 30px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >\n' +
                    '                    <p  margin: 0;">NAME : '+this.requesterName+'</p>\n'
                    +
                    '                    <h4  margin: 0;">BLOOD GROUP : '+this.UserProfile.blood_group+'</h4>\n'+
                    '                  </td>\n' +
                    '                </tr>\n' +
                    '                <!-- COPY -->\n' +
                    '                <tr>\n' +
                    '                  <td bgcolor="#111111" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >\n' +
                    '                    <p style="margin: 0;"> Powered By Blood Js</p>\n' +
                    '                  </td>\n' +
                    '                </tr>\n' +
                    '                <!-- COPY -->\n' +
                    '         \n' +
                    '            </table>\n' +
                    '        </td>\n' +
                    '    </tr>\n' +
                    '  \n' +
                    '</table>\n' +
                    '\n' +
                    '</body>\n' +
                    '</html>\n'
          };

          sgMail
                  .send(msg)
                  .then(() => {
                    let newDonationRequest = {
                      request: 1,
                      _id: this.UserProfile._id,
                      requesterEmail: this.requesterEmail
                    };
                    axios.post('https://blooddjs.herokuapp.com/api/request/donation/request/edit',newDonationRequest)
                            .then(() => {
                              Toast.fire({
                                icon: 'success',
                                title: 'Request Sent Successfully '
                              })
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                    let newRequest = {
                      name: this.requesterName,
                      email: this.requesterEmail,
                      directRequest: this.directRequest,
                      hospitalAddress: this.hospitalAddress,
                    };
                    // console.log(newUser);
                    axios.post('https://blooddjs.herokuapp.com/api/donor/request',newRequest)
                            .then((response) => {
                              console.log(response);
                              $('#donor_contact').modal('hide')
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                  }, console.error);


      },
    },

    mounted() {

      let searchId = {
        params: {
          _id:  this.donorId,
        }

      };

      axios.get('https://blooddjs.herokuapp.com/api/donor/profile', searchId)
              .then(({data}) => {
               // console.log(data);
                this.UserProfile = data;
                //this.$router.push('search');
                this.getUserProfile();
              })

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
