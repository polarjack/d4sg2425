// var mw = require('./final_pw.json');


// var output = mw.data.map((v, i) => {
//   return v.rent/ v.totalDays;
// }).reduce((a, b) => {return a+ b});
// console.log(output/mw.data.length)


// var output2 = mw.data.map((v, i) => {
//   return v.rent/ v.days;
// }).reduce((a, b) => {return a+ b});
// console.log(output2/mw.data.length)

var mw = require("./rent_days_pw.json")
var count = require("./rent_count_pw.json")

var result = mw.data.map((v, i) => {
  var part = v.days/count.data[i].times;
  return part;
}).reduce((a, b) =>{return a+b})
console.log(result/mw.data.length)
