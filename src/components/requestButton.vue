<template>
  <div class="requestButton">



    <button type="button"  data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-danger btn-sm">Accept</button>



    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">PLEASE KINDLY ANSWER THOSE QUESTIONS</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body" style="text-align: justify">

            <div class="form-group">
              <label for="pregnant">Are You Pregnant?</label>
              <select id="pregnant" class="form-control nice-select wide" v-model="acceptRequest.pregnant" name="pregnant">
                <option value="">Select</option>
                <option value="No">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>
            <div class="form-group">
              <label for="health">Do you have any Health Issues?</label>
              <select id="health" class="form-control nice-select wide" v-model="acceptRequest.healthIssues" name="healthIssues">
                <option value="">Select</option>
                <option value="No">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>

          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="sendRequest" class="btn btn-primary">Submit</button>
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
    props: {
      email: String,
      requestName: String,
      requestBlood: String,
      donorEmail: String,
      donorName: String,
      donorId: String,
      totalDonate: String

    },
    data() {
      return {
        acceptRequest: {healthIssues: '', pregnant: ''},
        request_email: this.email,
        request_blood: this.requestBlood,
        Request_name: this.requestName,
        donor_Email: this.donorEmail,
        donor_Name: this.donorName,
        donor_Id: this.donorId,
        total_Donate: this.totalDonate

      }
    },

    methods: {
      sendRequest(){
        if (this.acceptRequest.healthIssues === 'No' && this.acceptRequest.pregnant === 'No'){

          sgMail.setApiKey(SENDGRID_API_KEY);
          const msg = {
            to: this.request_email,
            from: this.donor_Email,
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
                    '                  <p style="margin: 0;">Dear '+this.Request_name+', Your Request for A blood donation for the blood group ( '+this.request_blood+' ) has been approved by the following Donor below</p>\n' +
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
                    '                          </tr>\n' +
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
                    '                    <p  margin: 0;">NAME : '+this.donor_Name+'</p>\n'
                    +
                    '                    <h4  margin: 0;">EMAIL : '+this.donor_Email+'</h4>\n'+
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
                    console.log('i am sent oooh');
                    let newDonation = {
                      total_donation: 1,
                      _id: this.donor_Id
                    };
                    axios.post('https://blooddjs.herokuapp.com/api/total/donation/edit',newDonation)
                            .then(() => {
                             console.log(newDonation);
                            //  this.$router.push('/login')
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                  }, console.error);
          $('#exampleModalCenter').modal('hide');
          this.$router.push('/donor-profile');
          Toast.fire({
            icon: 'success',
            title: 'Request Approve is successfully'
          })
        }else {
          $('#donor_contact').modal('hide');
          Toast.fire({
            icon: 'error',
            title: 'You are not eligible at the moment'
          })

        }

      },
    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
