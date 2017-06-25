var mw = require('./rent_use_pw.json');
var pw = require('./rent_days_pw.json');




var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

var generate = index.map((v, i) => {
  var front = index[i]*15
  var back = index[i+1]*15
  front = front.toString();
  back = back.toString();
  return front+"~"+back
})
console.log(generate)
var outputmw = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

mw.data.map((value, index) => {
  outputmw[Math.floor(value.totalDays / 15)]++;
})
console.log(index)
console.log(outputmw)

var a = [ '0~15',
'15~30',
'30~45',
'45~60',
'60~75',
'75~90',
'90~105',
'105~120',
'120~135',
'135~150',
'150~165',
'165~180',
'180~195',
'195~210',
'210~225',
'225~240',
'240~255',
'255~270',
'270~285',
'285~300',
'300~315',
'315~330',
'330~345',
'345~360']
