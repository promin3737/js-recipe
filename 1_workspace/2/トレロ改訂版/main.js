// トレロ試作
const input = document.getElementById("input")
const button = document.getElementById("button")
const display = document.getElementById("display")
​
let list = []
​
// テキストの保存
const saveText = function(textData) {
  list.push(textData)
  localStorage.list = JSON.stringify(list)
}
​
// 保存したテキストの削除
const removeText = function(textData) {
  const index = list.findIndex(function(item) {
    return item.id === textData.id
  })
  list.splice(index, 1)
  localStorage.list = JSON.stringify(list)
}
​
// カードを画面に追加する
const addCard = function(textData) {
  const card = document.createElement("div")
​
  const textSpan = document.createElement("span")
  textSpan.textContent = textData.text
  card.append(textSpan)
​
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function() {
    card.remove()
    removeText(textData)
  }
  card.append(deleteButton)
​
  display.append(card)
}
​
button.onclick = function() {
  const textData = { text: input.value, id: Date.now() }
  saveText(textData)
  addCard(textData)
}
​
// 初期表示
if (localStorage.list) {
  list = JSON.parse(localStorage.list)
  for (let i = 0; i < list.length; i++) {
    addCard(list[i])
  }
}







// splice を使って、n 番目から m 個を list から取り除くことができる
// array.splice(n, m)
​
//const list = ["aa", "bb"]
//list.splice(0, 1)
//console.log(list) // ["bb"]
​
// テキストの情報をもつオブジェクトを配列に入れる
//const list = [
//  {
//    text: "aa",
//    id: 123,
//  },
//  {
//    text: "bb",
//    id: 456,
//  },
//]
​
// 配列から条件をもとにインデックス番号を教えてくれるメソッド findIndex を使う（ここが難しい）
// 引数には、配列の要素を受け取って true/false を返す関数をいれる
//const index = list.findIndex(function(item) {
//  return item.id === 123
//})
//console.log(index) // 0
​
// splice を使って、index 番目から１つを list から取り除く
//list.splice(index, 1)
​
// 最後に list を保存すれば削除完了！
//localStorage.list = JSON.stringify(list)
​
// （補足）findIndex はアロー関数を使うとシンプルに書ける
//const index2 = list.findIndex((item) => item.id === 123)
//console.log(index2) // 0