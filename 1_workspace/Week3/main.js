const inputElement = document.getElementById("input")
const addButton = document.getElementById("addButton")
const container = document.getElementById("container")

let list = []
//localstrorageからオブジェクトに変換
if(localStorage.list){
  list = JSON.parse(localStorage.list)
}


//配列listの要素の数に合わせて保存できるようにする
for(let i = 0; i < list.length; i++){
  //cardという箱を作って
  const card = document.createElement("div")
  //箱の中身を入れる
  card.textContent = list[i]
  //containerにcardを入れる
  container.append(card)
}


addButton.onclick = function(){
  const card = document.createElement("div")
  card.textContent = inputElement.value
  container.append(card)

  list.push(inputElement.value)
  localStorage.list = JSON.stringify(list)

  console.log(card)
  
  inputElement.value = ''
}

//localStorage["text"] = "こんにちは"
