const inputElement = document.getElementById("input")
const addButton = document.getElementById("addButton")
const container = document.getElementById("container")

//listという名の配列を作成
let list = []
//localstrorageからオブジェクトに変換しないとJSに使えないためJSON形式から変更する
if(localStorage.list){
  list = JSON.parse(localStorage.list)
}

//配列listの要素の数に合わせて保存できるようにする
for(let i = 0; i < list.length; i++){
  //cardという箱を作って
  const card = document.createElement("div")
  //箱に中身を入れる
  card.textContent = list[i]
  //containerにcardを入れる
  container.append(card)
}

addButton.onclick = function(){
  const card = document.createElement("div")
  card.textContent = inputElement.value
  container.append(card)

  //配列listに入力した値を放り込む
  list.push(inputElement.value)
  //localStorageにlistに入っている値を保存するためにJSON形式に変更する
  localStorage.list = JSON.stringify(list)
  //コンソールにcardの値を表示させる
  console.log(card)
  //連続して値を入力しやすいように入力する欄を空にする
  inputElement.value = ''
}

