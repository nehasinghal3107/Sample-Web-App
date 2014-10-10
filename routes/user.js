
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.signup = function(req, res){
  var userdata=req.body.user;
  console.log(userdata);
  var user={fname:userdata.fname,lname:userdata.lname,emailid:userdata.emailid};
  res.send({user:user});
};