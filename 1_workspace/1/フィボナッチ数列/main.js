const button = document.getElementById("button")
const counter = document.getElementById("counter")
const fibDisplay = document.getElementById("fibDisplay")
let number = 0
button.onclick = function(){
  number += 1
  console.log(number)
  counter.textContent = number
  fibDisplay.textContent = fib(number)
}

const fib =  function(n){
  if (n===1){
    return 1
}
else if (n===2){
    return 1
}else{
  return fib(n-1)+fib(n-2)   
  }
}

console.log(fib(4))





