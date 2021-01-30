const loveContainer = document.getElementById("love-container")
const loveButton = document.getElementById("love-button")
const lovecount = document.getElementById("love-count")

let counter = 0
// フレーズの入力
const phrase = [
  "どうせやらせだろ",
  "本当に？",
  "本当に本当に？",
  "本当に本当に本当に?",
  "しょうがないなぁ～",
  "大好き♡"
]

const changePhrase = function(){
  if(counter >= 100){
    loveContainer.textContent = phrase[5]
  }else if(counter >= 80){
    loveContainer.textContent = phrase[4]
  }else if(counter >= 60){
    loveContainer.textContent = phrase[3]
  }else if(counter >= 40){
    loveContainer.textContent = phrase[2]
  }else if(counter >= 20){
    loveContainer.textContent = phrase[1]
  }else if(counter >= 10){
    loveContainer.textContent = phrase[0]
  }
}

loveButton.onclick = function(){
  counter++;
  lovecount.textContent = counter
  changePhrase();
}