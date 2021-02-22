
// function onDeviceReady() {
//     // Bind events
//     $(document).on("resume", onResume);
//     $('#do-check').on("click", checkState);

//     $('#settings').on("click", function(){
//         cordova.plugins.diagnostic.switchToSettings(function(){
//             log("Successfully opened settings");
//         }, handleError);
//     });

//     $('#request-external-sd-permission').on("click", function(){
//         cordova.plugins.diagnostic.requestExternalStorageAuthorization(function(status){
//             log("Successfully requested external storage authorization: authorization was " + status);
//             checkState();
//         }, handleError);
//     });
//     function b64toBlob(b64Data, contentType, sliceSize) {
//         contentType = contentType || '';
//         sliceSize = sliceSize || 512;
    
//         var byteCharacters = atob(b64Data);
//         var byteArrays = [];
    
//         for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//             var slice = byteCharacters.slice(offset, offset + sliceSize);
    
//             var byteNumbers = new Array(slice.length);
//             for (var i = 0; i < slice.length; i++) {
//                 byteNumbers[i] = slice.charCodeAt(i);
//             }
    
//             var byteArray = new Uint8Array(byteNumbers);
    
//             byteArrays.push(byteArray);
//         }
    
//       var blob = new Blob(byteArrays, {type: contentType});
//       return blob;
//     }

//     document.querySelector('#cardJPG').addEventListener("click", function(e){
        

//         e.preventDefault();
//         //alert("entered download block");
//         var images=$('#card-rendered-image').attr('src'); 
//         //var DataBlob = b64toBlob(images,contentType); 
//         var targetDir = cordova.file.externalRootDirectory;
//         /** Process the type1 base64 string **/
//         var myBaseString = images;
//         // Split the base64 string in data and contentType
//         var block = myBaseString.split(";");
//         console.log(block);
//         // Get the content type
//         var dataType = block[0].split(":")[1];// In this case "image/png"
//         console.log(dataType);
//         // get the real base64 content of the file
//         var realData = block[1].split(",")[1];// In this case "iVBORw0KGg...."
//         console.log(realData);
//         var DataBlob = b64toBlob(realData, dataType);
//         var filename = "ecard.png";
//         var targetFilepath = targetDir + "/" + filename;

//         var fail = function(error) {
//             var msg = 'Failed to write file \'' + targetFilepath + '\'. Error code: ' + error.code;
//             handleError(msg);
//         };
//         window.resolveLocalFileSystemURL(targetDir, function (dirEntry) {
//             dirEntry.getFile(filename, {
//                 create: true,
//                 exclusive: false
//             }, function (fileEntry) {
//                 fileEntry.createWriter(function (writer) {
//                     writer.onwriteend = function (evt) {
//                         log("Wrote "+targetFilepath, true);
//                     };
//                     writer.write(DataBlob);
//                 }, fail);
//             }, fail);
//         }, fail);
//     });

//     setTimeout(checkState, 500);
// }


// function checkState(){
//     log("Checking state...");

//     $('#state li').removeClass('on off');


//     cordova.plugins.diagnostic.isExternalStorageAuthorized(function (enabled) {
//         $('#state .external-sd-authorized').addClass(enabled ? 'on' : 'off');
//     }, handleError);

//     cordova.plugins.diagnostic.getExternalStorageAuthorizationStatus(function (status) {
//         $('#state .external-sd-authorization-status').find('.value').text(status.toUpperCase());
//         $('#request-external-sd-permission').toggle(status === cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED);
//     }, handleError);

// }

// function handleError(error){
//     var msg = "Error: "+error;
//     console.error(msg);
//     alert(msg);
// }

// function log(msg, showAlert){
//     console.log(msg);
//     if(showAlert){
//         alert(msg);
//     }
// }

// function onResume(){
//     checkState();
// }

// $(document).on("deviceready", onDeviceReady);

function onDeviceReady() {
    // Bind events
    $(document).on("resume", onResume);
    $('#do-check').on("click", checkState);

    $('#settings').on("click", function(){
        cordova.plugins.diagnostic.switchToSettings(function(){
            log("Successfully opened settings");
        }, handleError);
    });

    $('#request-external-sd-permission').on("click", function(){
        cordova.plugins.diagnostic.requestExternalStorageAuthorization(function(status){
            log("Successfully requested external storage authorization: authorization was " + status);
            checkState();
        }, handleError);
    });

    $('#cardJPG').on("click", function(){
        console.log("targetFilepath");
        var targetDir = "file:///storage/emulated/0/";
        var filename = "test.txt";
        var targetFilepath = targetDir + "/" + filename;

        var fail = function(error) {
            var msg = 'Failed to write file \'' + targetFilepath + '\'. Error code: ' + error.code;
            handleError(msg);
        };
        
        window.resolveLocalFileSystemURL(targetDir, function (dirEntry) {
            dirEntry.getFile(filename, {
                create: true,
                exclusive: false
            }, function (fileEntry) {
                console.log(targetFilepath);
                console.log(targetDir);
                fileEntry.createWriter(function (writer) {
                    writer.onwriteend = function (evt) {
                        log("Wrote "+targetFilepath, true);
                    };
                    writer.write("Hello world");
                }, fail);
            }, fail);
        }, fail);
    });

    setTimeout(checkState, 500);
}


function checkState(){
    log("Checking state...");

    $('#state li').removeClass('on off');


    cordova.plugins.diagnostic.isExternalStorageAuthorized(function (enabled) {
        $('#state .external-sd-authorized').addClass(enabled ? 'on' : 'off');
    }, handleError);

    cordova.plugins.diagnostic.getExternalStorageAuthorizationStatus(function (status) {
        $('#state .external-sd-authorization-status').find('.value').text(status.toUpperCase());
        $('#request-external-sd-permission').toggle(status === cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED);
    }, handleError);

}

function handleError(error){
    var msg = "Error: "+error;
    console.error(msg);
    alert(msg);
}

function log(msg, showAlert){
    console.log(msg);
    if(showAlert){
        alert(msg);
    }
}

function onResume(){
    checkState();
}

$(document).on("deviceready", onDeviceReady);
$(document).ready(function () {   
    /* tooltip */              
    // document.querySelector('#cardJPG').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     html2canvas(document.querySelector('.card-image'), {
    //         onrendered: function (canvas) {
    //             // document.body.appendChild(canvas);   

    //                 //return Canvas2Image.saveAsPNG(canvas);
    //         }
    //     });
    // });
    function onErrorCreateFile() {
        console.log("Create file fail...");}
    
    function onErrorLoadFs() {
        console.log("File system fail...");
    }
    function onErrorReadFile(){
        console.log("on error read file");
    }
    // document.querySelector('#cardJPG').addEventListener('click', function (e) {
    //         e.preventDefault();
    //         alert("entered download block");
    //         var images=$('#card-rendered-image').attr('src');                    
            //console.log(images);
            //download(images,"ecard.png","image/png");
            //document.addEventListener("deviceready", function() {             

            // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            //     console.log('file system open: ' + fs.name);
            
            //     // Make sure you add the domain name to the Content-Security-Policy <meta> element.
            //     var url = images;
            //     // Parameters passed to getFile create a new file or return the file if it already exists.
            //     fs.root.getFile('downloaded-image.png', { create: true, exclusive: false }, function (fileEntry) {
            //         download(fileEntry, url, true);
            
            //     }, onErrorCreateFile);
            
            // }, onErrorLoadFs);
            // window.requestFileSystem(LocalFileSystem.PERSISTENT, 5 * 1024 * 1024, function (fs) {

            //     console.log('file system open: ' + fs.name);
            //     getSampleFile(fs.root, images);
            
            // }, onErrorLoadFs);
        // });
    //}, false);
        // function download(fileEntry, uri, readBinaryData) {

        //     var fileTransfer = new FileTransfer();
        //     var fileURL = fileEntry.toURL();
        
        //     fileTransfer.download(
        //         uri,
        //         fileURL,
        //         function (entry) {
        //             console.log("Successful download...");
        //             console.log("download complete: " + entry.toURL());
        //             // if (readBinaryData) {
        //             //   // Read the file...
        //             //   readBinaryFile(entry);
        //             // }
        //             // else {
        //             //   // Or just display it.
        //             //   displayImageByFileURL(entry);
        //             // }
        //         },
        //         function (error) {
        //             console.log("download error source " + error.source);
        //             console.log("download error target " + error.target);
        //             console.log("upload error code" + error.code);
        //         },
        //         null, // or, pass false
        //         {
        //             //headers: {
        //             //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        //             //}
        //         }
        //     );
        // }
        function getSampleFile(dirEntry, imageBase64) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', imageBase64, true);
            xhr.responseType = 'blob';
        
            xhr.onload = function() {
                if (this.status == 200) {
        
                    var blob = new Blob([this.response], { type: 'image/png' });
                    saveFile(dirEntry, blob, "downloadedImage.png");
                }
            };
            xhr.send();
        }
        function saveFile(dirEntry, fileData, fileName) {

            dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
        
                writeFile(fileEntry, fileData);
        
            }, onErrorCreateFile);
        }
        function writeFile(fileEntry, dataObj, isAppend) {

            // Create a FileWriter object for our FileEntry (log.txt).
            fileEntry.createWriter(function (fileWriter) {
        
                fileWriter.onwriteend = function() {
                    console.log("Successful file write...");
                    // if (dataObj.type == "image/png") {
                    //     readBinaryFile(fileEntry);
                    // }
                    // else {
                    //     readFile(fileEntry);
                    // }
                };
        
                fileWriter.onerror = function(e) {
                    console.log("Failed file write: " + e.toString());
                };
        
                fileWriter.write(dataObj);
            });
        }
        function readBinaryFile(fileEntry) {

            fileEntry.file(function (file) {
                var reader = new FileReader();
        
                reader.onloadend = function() {
        
                    console.log("Successful file write: " + this.result);
                    displayFileData(fileEntry.fullPath + ": " + this.result);
        
                    var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
                    //displayImage(blob);
                };
        
                reader.readAsArrayBuffer(file);
        
            }, onErrorReadFile);
        }

    // document.querySelector('#cardJPG').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     html2canvas(document.querySelector('.card-image'),{
    //         onrendered: function( canvas ) {
    //         $(".image-rendered").append(canvas);
    //         }
    //     });
    // });
    // html2canvas(document.querySelector('.card-image'),{
    //     onrendered: function( canvas ) {
    //             image = canvas.toDataURL("image/png");
    //             var pHtml = "<img id=\"card-rendered-image\" src="+image+" style=\"width: 100%;\" />";
    //             $(".image-rendered").append(pHtml);
    //             $(".download-card").attr("href",image).attr("download","Ecard");
    //             // $("#memberCard").hide();
    //             $("#memberCard").remove();
    //     }
    // });

    // $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    //     event.preventDefault();
    //     //$.noConflict();
    //     $(this).ekkoLightbox();
    // });
    // document.querySelector('#cardJPG').addEventListener('click', function (e) {
    //         e.preventDefault();
    //         html2canvas(document.querySelector('.image-rendered'),{
    //             onrendered: function( canvas ) {
    //                 return Canvas2Image.saveAsPNG(canvas);
    //             }
    //         });
    //     });
    //console.log("Called ecard.js");
    var image;
    var set = $('.card-image');
    console.log($('.profile-align-right'));
    var setlength = set.length;
    var htmlPreWrapper="<div class=\"swiper-container swiper-init swipermultiple swiper-container-horizontal swiper-container-ios\" style=\"overflow-y:scroll;\">";
    htmlPreWrapper+="<div class=\" swiper-wrapper p-l-0\" id=\"UlCardDetails\">";
    var htmlPostWrapper="</div></div>";
    //$("#card-rendered-images").append(htmlPreWrapper);
    $(".card-image").each(function(index, element){
        html2canvas(element,{
            onrendered: function( canvas ) {
                //console.log(element);
                image = canvas.toDataURL("image/png");
                var pHtml = "<img id=\"card-rendered-image\" src="+image+" style=\"width: 496px;\" class=\"swiper-slide ecard-hardcoded\"/>";
                $(".swiper-wrapper").append(pHtml);
                //$(".download-card").attr("href",image).attr("download","Ecard");
                //$("#memberCard").hide();
                if (index === (setlength - 1)) {
                    $("#memberCard").remove();
                    // $(".image-rendered").append(htmlPostWrapper);
                    $(".image-rendered").append(pHtml);
                    $(".ecard-preloader").remove();
                    $("#ecard-component-id").hide();
                    //$("#card-rendered-images").hide();
                    $("#card-rendered-images").appendTo(".ecard-target");
                    /*Swiper carousel */
                    var mySwiper = new Swiper('.swiper-container', {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                    });
                }
            }
        });
    }); 
}); 
