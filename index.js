var express = require('express');
var firebase = require('firebase');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3030,function(){
  console.log("Connected on port 3030");
});

  firebase.initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://mutantschool-e3944.firebaseio.com"
});
