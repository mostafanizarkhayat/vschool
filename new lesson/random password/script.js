function randomRange(){
  var length = 8;
  var charset="kasdjAAEWFEWFEFWFWEWEFksajbfaskd5465465465#$^%$Y%Y$#$^43$#$$jbfakjf";
  var letVar="";
    for (var i = 0, n = charset.length; i < length; i++) {
        letVar += charset.charAt(Math.floor(Math.random() * n));
    }
  return letVar;
}
$("#password").click (function(){
  alert(randomRange());
})