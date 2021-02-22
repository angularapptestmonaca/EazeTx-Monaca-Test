// console.log("Videocall.js was called");

// var apiKey = '45828062';
// var sessionId = '1_MX40NTgyODA2Mn5-MTU3NTA5MzU5NDA4OH5VN3hWbWsyWXlTR0x3YnZWaHhpM09OdkJ-UH4';
// var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9NDQ4YTg3ODZjYmZlNzQxNTA1MTk1ZDdlOGI5NDY4OWYzN2E3NjFkMDpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UVTNOVEE1TXpVNU5EQTRPSDVWTjNoV2JXc3lXWGxUUjB4M1luWldhSGhwTTA5T2RrSi1VSDQmY3JlYXRlX3RpbWU9MTU3NTA5MzYwMiZub25jZT0wLjQxODEyOTY1NTkzMzQwMzM0JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1NzUxODAwMDI=';


// var session = OT.initSession(apiKey, sessionId);

// // create publisher
// var publisher = OT.initPublisher();
// session.connect(token, function(err) {
//    session.publish(publisher);
   
// });

  
// session.on('streamCreated', function(event) {
//    session.subscribe(event.stream);
// });

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("window.open works well");
    // window.open('https://broker.medilinez.com/EcareVideoChat/index.html', '_system', 'location=yes');
    // window.open = cordova.InAppBrowser.open;
    // var ref = cordova.InAppBrowser.open('https://broker.medilinez.com/vidyoclient/VidyoConnector.html', '_system', 'location=yes');
    window.open('https://vishnuvs134.github.io/?hideConfig=1', '_system', 'location=yes');
}