var express = require('express');
var firebase = require('firebase');
var http = require('http');
var dotenv = require('dotenv');
var app = express();
var server = http.createServer(app);


//Firebase auth
  firebase.initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://mutantschool-e3944.firebaseio.com"
});
//get firebase ref
var refRoot = firebase.database().ref();
//listen for texts
var textRef = refRoot.child('texts');
textRef.on('child_added',function(snapshot){
  console.log(snapshot.val());
});

server.listen(3030,function(){
  console.log("Connected on port 3030");
});
