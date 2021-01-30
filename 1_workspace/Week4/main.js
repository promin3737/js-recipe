// 自動販売機作成
const cokeButton = document.getElementById("coke")
const waterButton = document.getElementById("water")
const addMoneyButton = document.getElementById("add-money")
const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const input = document.getElementById("input-money")
let inputMoney = 0

cokeButton.onclick = function(){
  if(inputMoney>=100){
  inputMoney = inputMoney-100
  display1.textContent = "コーラを買いました"
  display2.textContent = "残り"+inputMoney+"円"
  }else{
    display1.textContent="金額が足りません"
  }
}
waterButton.onclick = function(){
  if(inputMoney>=80){
  inputMoney = inputMoney-80
  display1.textContent = "水を買いました"
  display2.textContent = "残り"+inputMoney+"円"
  }else{
    display1.textContent="金額が足りません"
  }
}
addMoneyButton.onclick = function(){
  inputMoney = inputMoney+100
  display1.textContent = "100円を入れました"
  display2.textContent = "残り"+inputMoney+"円"
}

