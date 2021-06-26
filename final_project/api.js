var mongoose = require('mongoose')
var crypto = require('crypto')
var db = mongoose.connect("mongodb://user:password@ds027409.mongolab.com:27409/coffeeplaces")
var User = require('./db/models/User.js')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);
 
exports.createUser = function(userData){
 var user = {
 name: userData.name,
 email: userData.email,
 password: hash(userData.password)
 }
 return new User(user).save()
}
 
exports.getUser = function(id) {
 return User.findOne(id)
}
 
exports.checkUser = function(userData) {
 return User
 .findOne({email: userData.email})
 .then(function(doc){
 if ( doc.password == hash(userData.password) ){
 console.log("User password is ok");
 return Promise.resolve(doc)
 } else {
 return Promise.reject("Error wrong")
 }
 })
}
 
function hash(text) {
 return crypto.createHash('sha1')
 .update(text).digest('base64')
}
 
app.use(session({
  secret: 'i need more beers',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    url: 'mongodb://user12345:foobar@localhost/test-app',
  })
}))

