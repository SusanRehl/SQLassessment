var random= function(dataIn) {  // sending data
  console.log("in random module!");
  // random = function randomNumber(min, max){
  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min); }
  var results = randomNumber(1, 100);
  console.log("in random module: ", results);
return results;  // return results to app.js
};
module.exports=random;
