
    //     /*********************************
    //      * commenting out the first few lines to avoid sparkline is not a function js error
    //      */
        
    //     $(document).ready(function () {
    //     //     /* sparklines */
    //     //     $(".dynamicsparkline").sparkline([5, 6, 7, 2, 0, 4, 2, 5, 6, 7, 2, 0, 4, 2, 4], {
    //     //         type: 'bar',
    //     //         height: '25',
    //     //         barSpacing: 2,
    //     //         barColor: '#a9d7fe',
    //     //         negBarColor: '#ef4055',
    //     //         zeroColor: '#ffffff'
    //     //     });
      
    //     //     /* gauge chart circular progress */
    //     //     $('.progress_profile1').circleProgress({
    //     //         fill: '#169cf1',
    //     //         lineCap: 'butt'
    //     //     });
    //     //     $('.progress_profile2').circleProgress({
    //     //         fill: '#f4465e',
    //     //         lineCap: 'butt'
    //     //     });
    //     //     $('.progress_profile4').circleProgress({
    //     //         fill: '#ffc000',
    //     //         lineCap: 'butt'
    //     //     });
    //     //     $('.progress_profile3').circleProgress({
    //     //         fill: '#2abebd',
    //     //         lineCap: 'butt'
    //     //     });
      
    //         /*Swiper carousel */
    //         var mySwiper = new Swiper('.swiper-container', {
    //             slidesPerView: 2,
    //             spaceBetween: 0,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             }
    //         });
    //     });
      
    //     var isMobileNumber = 0;
    //     /* EMAIL VALIDATION */
    //     function isEmail(email) {
    //         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //         return regex.test(email);
    //     }
      
      
      
    //     function radiobuttonChecked()
    //     {
    //         if ($("#customradio1").is(":checked")) {
    //             $("#txt_emiratesId").attr("placeholder", "Mobile Number(XXX-XXXXXXX)");
    //         }
    //         else if ($("#customradio2").is(":checked")) {
      
    //             $("#txt_emiratesId").attr("placeholder", "Emirates ID(XXX-XXXX-XXXXXXX-X)");
      
    //         }
    //     }
        
    //     setInterval(radiobuttonChecked, 100);
      
    //     function BindData() {
      
    //         var obj = {};
    //         var a = [];
    //         var mob = $("#customradio1").val();
    //         var emrtsid = $("customradio2").val();
      
    //         if ($("#customradio1").is(":checked")) {
    //             obj.usernametype = "mobno";
    //             var mobb = $("[id*=txt_emiratesId]").val();
    //             obj.username = mobb.replace(/-/g, "");
    //         }
    //         else if ($("#customradio2").is(":checked")) {
    //             obj.usernametype = "emno";
    //             obj.username = $("[id*=txt_emiratesId]").val();
    //         }
    //         obj.password = $("[id*=txt_Password]").val();
      
      
    //         if ($("#txt_emiratesId").val() != "" && $("#txt_Password").val() != "") {
      
    //             var encrCypher = LoginSubmitsEncry(obj);
    //             var crperobj = {};
    //             crperobj.cypertext = encrCypher;
    //             debugger;
      
    //             $.ajax({
    //                 type: "POST",
    //                  url: "http://localhost:20438/" + "Services/WCC1.asmx/login",
    //                 data:JSON.stringify(crperobj),
    //                 contentType: "application/json; charset=utf-8",
    //                 dataType: "json",
    //                 success: function (response) {
    //                     records = response.d;
    //                     a = records[0].status;
      
    //                     if (a == '1') {
    //                         var url = "Mobile/M.aspx";
    //                         window.location.href = url;
    //                     }
    //                     else {
    //                         // $("#div_pop").removeClass('hidden');
    //                         $(".invalid-field-sign-in").removeClass("hidden");
    //                         $("#txt_emiratesId").removeClass("login-white-text").addClass("txt-box-error");
    //                         $("#txt_Password").removeClass("login-white-text").addClass("txt-box-error");
    //                     }
    //                 },
    //                 error: function () {
    //                     alert("Details not found..");
    //                     $(".invalid-field-sign-in").removeClass("hidden");
    //                     $("#txt_emiratesId").removeClass("login-white-text").addClass("txt-box-error");
    //                     $("#txt_Password").removeClass("login-white-text").addClass("txt-box-error");
      
    //                 }
    //             });
    //             return false;
    //         }
      
            
    //     }
      
    //   function BindDataSignUpValidation() {
      
    //         var obj = {};
    //         var a = [];
    //         var b = [];
    //         var emiratesId = $("#txt_emid").val();
    //         var mob = $("#txt_mob").val();
    //         var email = $("#txt_email");
    //         var password = $("#txt_pswd");
    //         var confirmPassword = $("#txt_pwdconfrm");
    //         var mobb = $("[id*=txt_mob]").val();
    //         var text = $('#txt_emiratesId').val();
    //         obj.username = $("[id*=txt_emid]").val();
    //         obj.MobileNo = mobb.replace(/-/g, "");
    //         obj.MailID = $("#txt_email").val();
    //         obj.password = $("#txt_pswd").val();
            
           
    //         if ($("#txt_emid").val() != "" && $("#txt_pswd").val() != "" && $("#txt_mob").val() != "" && $("#txt_email").val() != "" && $("txt_pswd").val() != "" && $("txt_pwdconfrm").val() != "" && $("#txt_mob").val().length == '11' && isEmail($("#txt_email").val()) && isMobileNumber == 0) {
    //             if ($("#txt_pswd").val() == $("#txt_pwdconfrm").val()) {
      
    //                 var encrCypher = LoginSubmitsEncry(obj);
    //                 var crperobj = {};
    //                 crperobj.cypertext = encrCypher;
    //                 debugger;
      
    //                 $.ajax({
    //                     type: "POST",
    //                     url: "http://localhost:20438/" + "Services/WCC1.asmx/SignUp",
    //                     data: JSON.stringify(crperobj),
    //                     contentType: "application/json; charset=utf-8",
    //                     dataType: "json",
    //                     success: function (response) {
    //                         records = response.d;
    //                         a = records[0].status;
    //                         b = records[0].EmirateStatus;
    //                         if (a == '1') {                                
    //                             $(".already-exits-sign-up").removeClass("hidden");
    //                             $("#txt_emid").removeClass("login-white-text").addClass("txt-box-error");
    //                         }
    //                         else if (b == '3' ) {
                              
    //                             $(".invalid-form-username-sign-up").removeClass("hidden");
    //                             $("#txt_emid").removeClass("login-white-text").addClass("txt-box-error");
      
    //                         }
    //                         else if (b == '0') {
    //                             var url = "Mobile/Verification.aspx";
    //                             window.location.href = url;
    //                         }
    //                     },
    //                     error: function () {
                           
    //                         $(".invalid-form-username-sign-up").removeClass("hidden");
    //                         $("#txt_emid").removeClass("login-white-text").addClass("txt-box-error");
    //                     }
    //                 });
    //             }
    //             else if ($("#txt_pswd").val() != $("#txt_pwdconfrm").val()) {
    //                 if ($("#txt_pwdconfrm").val() != "") {
    //                     $(".wrong-confirm-password-sign-up").removeClass("hidden");
    //                     $("#txt_pwdconfrm").removeClass("login-white-text").addClass("txt-box-error");
    //                 } else {
    //                     $(".empty-form-confirm-password-sign-up").removeClass("hidden");
    //                     $("#txt_pwdconfrm").removeClass("login-white-text").addClass("txt-box-error");
    //                     $("#txt_pwdconfrm").removeClass("login-white-placeholder").addClass("red-placeholder");
      
    //                 }
    //             }            
    //         }
      
    //         return false;
    //     }
      
    //     /*****Function for login*****/
    //     /*****Function for close popup*****/
    //     function ClosePopup() {
    //         $("#div_pop").addClass('hidden');
    //     }
        
       
      
        
      
    //   $(".close").on("click", function () {
    //     $("#Button3").trigger("click");
      
    //   });
        
      
    //     /****Automatic hyphen in emirates id texbox field***/
      
    //     // $(function () {
          
               
    //     //         $('#txt_emiratesId').on('keyup', function () {
    //     //             /**sign in**/
                  
    //     //             /***************************/
    //     //             if ($("#customradio2").is(":checked")) {
    //     //                 $("#txt_emiratesId").attr('maxlength', '18');
                       
    //     //                 var inp = $('#txt_emiratesId').val();
    //     //                 var n = inp.indexOf("-");
                     
    //     //                     if ((inp.length == 3) || (inp.length == 8) || (inp.length == 16) && inp.length < 18) {
    //     //                         $('#txt_emiratesId').val(inp + '-');
    //     //                     }
    //     //                     else {
      
    //     //                     }
                       
    //     //             }
    //     //             else
    //     //             {
    //     //                 $("#txt_emiratesId").attr('maxlength', '11');
                        
    //     //                 var inp = $('#txt_emiratesId').val();
    //     //                 var n = inp.indexOf("-");
    //     //                 if ((inp.length == 3)  && inp.length < 12) {
    //     //                     $('#txt_emiratesId').val(inp + '-');
    //     //                 }
    //     //             }
                    
                        
                    
    //     //         });
            
    //     // });
      
    //     /*sign up***/
    //     $(function () {
      
           
    //         // $("#txt_emid").attr('maxlength', '18');
    //         // $('#txt_emid').on('keyup', function () {
    //         //     /**sign in**/
               
    //         //   /******************************/
    //         //     var inp = $('#txt_emid').val();
      
    //         //         var n = inp.indexOf("-");
    //         //         if ((inp.length == 3) || (inp.length == 8) || (inp.length == 16) && inp.length < 18) {
    //         //             $('#txt_emid').val(inp + '-');
    //         //         }
    //         //         else {
      
    //         //         }
    //         //                 });
      
    //     });
    //     $(function () {
      
      
    //         // $("#txt_mob").attr('maxlength', '11');
    //         // $('#txt_mob').on('keyup', function () {
    //         //     /**sign in**/
      
    //         //     var inp = $('#txt_mob').val();
    //         //     var n = inp.indexOf("-");
    //         //     if ((inp.length == 3) && inp.length < 12) {
    //         //         $('#txt_mob').val(inp + '-');
    //         //     }
    //         //     else {
      
    //         //     }
      
    //         // });
      
    //     });
      
    //     /****Automatic hyphen in emirates id texbox field***/
      
      
    //   /* SIGN IN FORM VALIDATION*/
    //   $(document).ready(function () {      
    //     $("#Button1").click(function (e) {
    //         var text = $('#txt_emiratesId').val();
          
    //      if ($("#txt_emiratesId").val() == "") {
    //             e.preventDefault();
    //             $(".empty-username-field-sign-in").removeClass("hidden");
    //             $(".invalid-field-sign-in").addClass("hidden");
    //             $("#txt_emiratesId").removeClass("login-white-text").addClass("txt-box-error");
    //             $("#txt_emiratesId").removeClass("login-white-placeholder").addClass("red-placeholder");
    //             return false;
    //      }
    //     else
    //      {
    //          if (text.match(/[0-9\-]/g).join('') != text) {
    //              e.preventDefault();
    //              $(".numberValidationemi").removeClass("hidden");
    //              isMobileNumber = 1;
    //              return false;
    //          }
    //          else {
    //              isMobileNumber = 0;
    //          }
    //      }
    //     if ($("#txt_Password").val() == "") {
    //          e.preventDefault();
    //          $(".empty-password-sign-in").removeClass("hidden");
    //          $(".invalid-field-sign-in").addClass("hidden");
    //          $("#txt_Password").removeClass("login-white-text").addClass("txt-box-error");
    //          $("#txt_Password").removeClass("login-white-placeholder").addClass("red-placeholder");
    //          return false;
    //       }
          
    //      //if ($("#txt_emiratesId").val() == "")
            
    //      //}
    //     });
    //     $("#txt_emiratesId").on("input", function () {
    //         $(".empty-username-field-sign-in").addClass("hidden");
    //         $(".numberValidationemi").addClass("hidden");
    //     });
    //     $("#txt_Password").on("input", function () {
    //         $(".empty-password-sign-in").addClass("hidden");
    //     });
    //   });
      
    //   /*SIGN UP FORM VALIDATION*/
    //   $(document).ready(function () {
      
    //     $("#Button2").click(function (e) {
    //         //var text = $("[id*=txt_emiratesId]").val();
    //         //if (text.match(/[0-9\-]/g).join('') != text) {
    //         //    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
    //         //    alert("Eror");
    //         //    return false;
    //         //}
    //         var textEmi = $('#txt_emid').val();
    //         var textMob = $('#txt_mob').val();
    //         if ($("#txt_emid").val() == "") {
    //             e.preventDefault();
    //             $(".empty-form-username-sign-up").removeClass("hidden");
    //             $("#txt_emid").removeClass("login-white-text").addClass("txt-box-error");
    //             $("#txt_emid").removeClass("login-white-placeholder").addClass("red-placeholder");
    //             return false;
    //         }
    //         else{
      
    //             if (textEmi.match(/[0-9\-]/g).join('') != textEmi) {
    //                 e.preventDefault();
    //                 $(".numberValidationemisiup").removeClass("hidden");
    //                 return false;
    //             }
    //         }
    //         /**************************************************************/
    //         // if ($("#txt_mob").val() == "") {
    //         //     e.preventDefault();
    //         //     $(".empty-form-mobile-sign-up").removeClass("hidden");
    //         //     $("#txt_mob").removeClass("login-white-text").addClass("txt-box-error");
    //         //     $("#txt_mob").removeClass("login-white-placeholder").addClass("red-placeholder");
    //         //     return false;
    //         // }
    //         // else
    //         // {
    //         //     if (textMob.match(/[0-9\-]/g).join('') != textMob) {
    //         //         e.preventDefault();
    //         //         $(".numberValidationmobsiup").removeClass("hidden");
    //         //         return false;
    //         //     }            
            
    //         //    else if ($("#txt_mob").val().length < 11 ){
    //         //         e.preventDefault();
    //         //         $(".not-enough-mobile-sign-up").removeClass("hidden");
    //         //         $("#txt_mob").removeClass("login-white-text").addClass("txt-box-error");
    //         //         $("#txt_mob").removeClass("login-white-placeholder").addClass("red-placeholder");
    //         //         return false;
    //         //     }
    //         // }
    //         /***************************************************************************************/
    //          if ($("#txt_email").val() == "") {
    //             e.preventDefault();
    //             $(".empty-form-emailid-sign-up").removeClass("hidden");
    //             $("#txt_email").removeClass("login-white-text").addClass("txt-box-error");
    //             $("#txt_email").removeClass("login-white-placeholder").addClass("red-placeholder");
    //             return false;
    //         }
    //          if (!isEmail($("#txt_email").val())) {
    //             e.preventDefault();
    //             $(".invalid-emailid-sign-up").removeClass("hidden");
    //             $("#txt_email").removeClass("login-white-text").addClass("txt-box-error");
    //             $("#txt_email").removeClass("login-white-placeholder").addClass("red-placeholder");
    //             return false;
    //         }
    //         if ($("#txt_pswd").val() == "") {
    //             e.preventDefault();
    //             $(".empty-form-password-sign-up").removeClass("hidden");
    //             $("#txt_pswd").removeClass("login-white-text").addClass("txt-box-error");
    //             $("#txt_pswd").removeClass("login-white-placeholder").addClass("red-placeholder");
    //             return false;
    //         }
           
    //         else {
      
    //         }
           
    //     });
    //     /*SIGN IN*/
    //     $("#txt_emiratesId").on("input", function () {
    //         $("#txt_emiratesId").addClass("login-white-text").removeClass("txt-box-error");
    //         $('.invalid-field-sign-in').addClass('hidden');
    //         $(".empty-username-field-sign-in").addClass("hidden");
    //         $("#txt_emiratesId").addClass("login-white-placeholder").removeClass("red-placeholder");
    //     });
    //     $("#txt_Password").on("input", function () {
    //         $("#txt_Password").addClass("login-white-text").removeClass("txt-box-error");
    //         $(".invalid-field-sign-in").addClass("hidden");
    //         $(".empty-password-sign-in").addClass("hidden");
    //         $("#txt_Password").addClass("login-white-placeholder").removeClass("red-placeholder");
    //     })
    //     /*SIGN UP */
    //     $("#txt_emid").on("input", function () {
    //         $(".empty-form-username-sign-up").addClass("hidden");
    //         $(".invalid-form-username-sign-up").addClass("hidden");
    //         $(".already-exits-sign-up").addClass("hidden");
    //         $("#txt_emid").addClass("login-white-text").removeClass("txt-box-error");
    //         $("#txt_emid").addClass("login-white-placeholder").removeClass("red-placeholder");
    //         $(".numberValidationemisiup").addClass("hidden");
    //     });
    //     $("#txt_mob").on("input", function () {
    //         $(".empty-form-mobile-sign-up").addClass("hidden");
    //         $(".not-enough-mobile-sign-up").addClass("hidden");
    //         $("#txt_mob").addClass("login-white-text").removeClass("txt-box-error");
    //         $("#txt_mob").addClass("login-white-placeholder").removeClass("red-placeholder");
    //         $(".numberValidationmobsiup").addClass("hidden");
    //     });
    //     $("#txt_email").on("input", function () {
    //         $(".empty-form-emailid-sign-up").addClass("hidden");
    //         $(".invalid-emailid-sign-up").addClass("hidden");
    //         $("#txt_email").addClass("login-white-text").removeClass("txt-box-error");
    //         $("#txt_email").addClass("login-white-placeholder").removeClass("red-placeholder");
    //     });        
    //     $("#txt_pswd").on("input", function () {
    //         $(".empty-form-password-sign-up").addClass("hidden");
    //         $(".wrong-confirm-password-sign-up").addClass("hidden");
    //         $("#txt_pswd").addClass("login-white-text").removeClass("txt-box-error");
    //         $("#txt_pswd").addClass("login-white-placeholder").removeClass("red-placeholder");
    //     });
    //     $("#txt_pwdconfrm").on("input", function () {
    //         $(".empty-form-confirm-password-sign-up").addClass("hidden");
    //         $(".wrong-confirm-password-sign-up").addClass("hidden");
    //         $("#txt_pwdconfrm").addClass("login-white-text").removeClass("txt-box-error");
    //         $("#txt_pwdconfrm").addClass("login-white-placeholder").removeClass("red-placeholder");
    //     });
    //   });
      
    //   /*******bootstrap tab pane***/
    //   /*
    //   $(document).ready(function () {
    //     $("#sign-in-tab-pane").click(function(e){
    //         e.preventDefault();
    //         $("#signup").addClass("hidden");
    //         $("#signin").removeClass("hidden");
    //     });
    //     $("#sign-up-tab-pane").click(function(e){
    //         e.preventDefault();
    //         $("#signin").addClass("hidden");
    //         $("#signup").removeClass("hidden").show();
    //     });
    //   });
    //   */