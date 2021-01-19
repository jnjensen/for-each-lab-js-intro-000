function iterativeLog(array){
  array.forEach(console.log("${index} : ${element}"))
}

function iterate(callback){
  var testing = ["blue", "green", "purple", "orange"]
  
  testing.forEach(return testing)
}

function doToArray(array, callback){
  array.forEach(callback)
}