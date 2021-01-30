const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")

//共通の処理：テキストからカードを作成する
const createCard = function(text){
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  // 要素を作成
  const deleteButton = document.createElement("button")
  // id
  deleteButton.id = "delete-button"
  // クラス名
  deleteButton.className = "delete"
  // テキスト内容
  deleteButton.innerHTML = "削除"
  // 親要素を取得
  const parent = document.getElementById("parent")
  // 要素を追加
  parent.appendChild(deleteButton)

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function(){
    // カードを削除する
    for (let i=0;i<list.length;i++){
      if (container.children[i]===card){
        list.splice(i,1)
        break
      }
    }
    localStorage.list  = JSON.stringify(list)
    card.remove()
  }
  card.append(deleteButton)

  return card
}
let list = []

// 画面を更新してlistの中にtodosを入れる
list = JSON.parse(localStorage.list)

// listのそれぞれに対してcreateCardする
for (let i=0;i<list.length;i++){
  const card = createCard(list[i])
  container.append(card)
}

//エンターキー処理
const enter_ivent = function(e){
  if (e.keyCode === 13){
    // カードを作成する
    const card = createCard(inputElement.value)
    container.append(card)
    //localStorageに保存
    list.push(inputElement.value)
    localStorage.list = JSON.stringify(list)
    // 入力欄を空にする
    inputElement.value = ''
  }
  return false
}
inputElement.addEventListener('keypress', enter_ivent);

// 追加ボタンを押したときの処理を登録
addButton.onclick = function(){
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)
  //localStorageに保存
  list.push(inputElement.value)
  localStorage.list = JSON.stringify(list)
  // 入力欄を空にする
  inputElement.value = ''
}