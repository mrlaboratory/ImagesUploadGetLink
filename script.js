$(function(){
    $(".upload").zzImgUr({
        cliendID: "3fbefe7bfa42da9",
        // old cliendID 74f5c858f447bb9
      
        mode: "file",
        format: "",
        css: {
            width: "100%"
        },
        max: 10,
        loading: "http://i.imgur.com/m3NXDa6.gif",
        lang: {
            noID: "Unregistered application",
          addImage: "Choose photo",
          addURL: "Add the URL",
          reset: "Refresh",
          upload: "Upload",
          choose: "Selected",
          waitConnect: "Connecting...",
          waitUpload: "Uploading in progress...",
          noteURL: "Enter the image URL here:",
          errContact: '<a href="https://www.mrlaboratory.info/2021/06/add-qr-scanner-code-script-to-your.html" rel="nofollow" target="_blank">Click here</a> to report an error.',
          errURL: "The URL is not accessible.",
          errSize: "Error URL or size is too small.",
          errRepeat: "The URL is invalid or already in use."
        },
        success: function (firstVal, arrVal) {
            console.log(firstVal);
            console.log(arrVal);
        },
        input: function (arrInput) {
            console.log(arrInput);
            arrInput.click(function () {
                this.select();
                console.log(this);
            });
        },
        remove: function (firstVal, arrVal) {
            console.log(firstVal);
            console.log(arrVal);
        }
    });
    });
function copyimglink(num){
    num--
    var copyUrl = $(".imgur_Zzbv-input:eq("+num+")").val();
     navigator.clipboard.writeText(copyUrl);
     $(".zzcopyLink:eq("+num+")").text("Copied");
     $(".imgur_Zzbv-input:eq("+num+")").css("color","#00a26d")
}

// function copyimglink(){  
//     // var copyUrl = $(".imgur_Zzbv-input:eq("+num+")").val();
//     // navigator.clipboard.writeText(copyUrl);
//     // notify("link Copied")
//     alert($(".imgur_Zzbv-input")[0].val());
// }

// Post link copier & post link email function
// var copyPostLinkbtn = $('.post .copypostlink');
// var PostMail = $('.post .emailpost');
// for (var i = 0; i < copyPostLinkbtn.length; i++)
// {
//   (function(index){
//       copyPostLinkbtn[i].onclick = function(){
// var copyUrl = document.querySelectorAll(".postLink")[index].getAttribute('href');
// navigator.clipboard.writeText(copyUrl);
// dragNotify('Post URL copied : '+copyUrl);
//         }         
//     })(i);
//     (function(index){
//       PostMail[i].onclick = function(){
// var postlinkv = document.querySelectorAll(".postLink")[index].getAttribute('href');
// var postTitlev = document.querySelectorAll(".postLink")[index].textContent;
// var adminemail = "admin@mrlaboratory.com";
//   var posttitleLink ="mailto:"+adminemail+"?Subject="+postTitlev+"&body=Hello Dear !! Read Our Latest Post : "+postTitlev+"        Link : "+postlinkv;
//   // var  link = posttitleLink.toString();
//   window.location.href = posttitleLink;
//     }     
//     })(i);

// }

