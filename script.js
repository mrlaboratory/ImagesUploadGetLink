$(function(){
    $(".upload").zzImgUr({
        cliendID: "74f5c858f447bb9",
        mode: "file",
        format: "o,",
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
          errContact: '<a href="http://devs.forumvi.com/t131-jq-plugin-jquery-plugin-zzimgur#831" rel="nofollow" target="_blank">Click here</a> to report an error.',
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
