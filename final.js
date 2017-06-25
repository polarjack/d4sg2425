var mw = require('./final_pw.json');


var output = mw.data.map((v, i) => {
  return v.rent/ v.totalDays;
}).reduce((a, b) => {return a+ b});
console.log(output/mw.data.length)


var output2 = mw.data.map((v, i) => {
  return v.rent/ v.days;
}).reduce((a, b) => {return a+ b});
console.log(output2/mw.data.length)
