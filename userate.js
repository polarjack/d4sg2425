var mw = require('./rent_use_pw.json')
var pw = require('./rent_use_pw.json')

var generate = [0,0,
0,0,
0,0,
0,0,
0,0,
0,0,0,0]

var output = mw.data.map((v, i) => {
  if(Math.floor(v.percent*10) > 9) {
    generate[11]++;
  }
  else {
    generate[Math.floor(v.percent*10)+1]++;
  }
  // console.log(Math.floor(v.percent*10));
})
console.log(generate)
