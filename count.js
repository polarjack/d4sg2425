var grouptimesmw = require('./rent_group_times_pw');

var outputindex = grouptimesmw.data.map((value, index) => {
  // console.log(value.group_times)
  // console.log(value.product_code.split(',').length)
  // return value.product_code.split(',').length
  return value.group_times
})
var output = grouptimesmw.data.map((value, index) => {
  // console.log(value.group_times)
  // console.log(value.product_code.split(',').length)
  return value.product_code.split(',').length
  // return value.group_times
})
console.log("MW group_times\n", outputindex, output)





