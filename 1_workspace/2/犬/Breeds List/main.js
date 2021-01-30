// Dog API
const inputDog = document.getElementById("inputDog")
const imageElement = document.getElementById("dog-image")
const fetchImage = document.getElementById("button1")
const update = document.getElementById("button2")

// 指定したサーバーにデータを取りに行く
const dog = () => {
  fetch("https://dog.ceo/api/breed/text/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
}

fetchImage.onclick = function(){
  const text = inputDog.value
  dog ()
}

update.onclick = dog
