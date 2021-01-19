const person = document.getElementById("person")

let age = 26
let isWorking = true // 仕事をしているか
let isInSpace = false // 宇宙にいるか
let isBeardShaved = false // ひげを剃っているか

const draw = function () {
  if (isWorking) {
    person.textContent = "🧑‍💻"
  } else {
    person.textContent = "😄"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡️🌏"
  }
}

const quitWorkingButton = document.getElementById("quit-working-button")
const launchButton = document.getElementById("launch-button")

// 退勤ボタン
quitWorkingButton.onclick = function () {
  isWorking = false
  draw()
}

// 打ち上げボタン
launchButton.onclick = function () {
  isInSpace = true
  draw()
}