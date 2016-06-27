var express = require('express');
var firebase = require('firebase');
var http = require('http');
var dotenv = require('dotenv').load();
var app = express();
var server = http.createServer(app);
var twilio = require('twilio');
var mailgun = require('mailgun-js');
//Firebase auth
  firebase.initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://mutantschool-e3944.firebaseio.com"
});
//Twilio auth and create twilio client
var twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

//get firebase ref
var refRoot = firebase.database().ref();
//listen for texts
var textRef = refRoot.child('texts');
textRef.on('child_added',function(snapshot){
  var text = snapshot.val();
  twilioClient.messages.create({
    body: text.name + ', I am avaliable to see you now. Please come to my office so we can discuss: '+ text.topic,
    to: text.phone,  // Text this number
    from: process.env.TWILIO_PHONE // From a valid Twilio number
}, function(err, message) {
  if(err){
     console.log("Failed to send text: "+err.message);
   }
});
});

server.listen(3030,function(){
  console.log("Connected on port 3030");
});
