new Vue({
  el: "#quiz-container",
  data: {
    quizText: "",
    feedback: "",
    quizImage: "",
  },
  methods: {
    displayQuiz: function() {
      this.quizText = "この星の名前は何でしょう？";
      this.quizImage = "./images/Ganymede.jpg";
    },
    choice1: function() {
      this.feedback =
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。";
    },
    choice2: function() {
      this.feedback =
        "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。";
    },
    choice3: function() {
      this.feedback = "正解！ガニメデは、木星の第三惑星だよ！";
    },
    choice4: function() {
      this.feedback =
        "残念！ソラーテは、「モチベーションが上がらない」といって退団した元阪神の野球選手だよ。";
    },
  },
});
