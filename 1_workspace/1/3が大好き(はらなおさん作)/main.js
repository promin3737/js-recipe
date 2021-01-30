const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  let num = "00" + count
  num = num.split("")
  if (count % 3 === 0 || num.indexOf("3") != -1) {
    console.log(count + "!!!!!!!")
  } else {
    console.log(count)
  }
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

/*３が大好き
const genkiFunction =function(number){
for(let n=1;n<=number;n++){
       let num="00"+n
       num=num.split("")
    if(n%3===0||num.indexOf('3') != -1){
        console.log(n + "!!!!!!!");
    }else {
        console.log(n);
    }*/

/*３が大好き
    else if(n%10===3){
        console.log(n%10)
        console.log(n + "!!!!!!!")
    }else if((n/10)%10===3){
        console.log((n/10)%10)
        console.log(n + "!!!!!!!")
    }else if((n/100)%10===3){
        console.log(n + "!!!!!!!")
    }else if((n/1000)%10===3){
        console.log(n + "!!!!!!!")
    }else {
        console.log(n)
    }*/