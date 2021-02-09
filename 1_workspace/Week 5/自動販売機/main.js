new Vue({
  el: "#app",
  data: {
    totalMoney: 0,
    lines: [],
    inputText: "",
  },
  methods: {
    insertCoin: function() {
      if (!Number.isNaN(Number(this.inputText))) {
        this.totalMoney += Number(this.inputText)
      } else {
        this.lines.push("数字を入れてください。")
        localStorage.lines = JSON.stringify(this.lines)
      }
    },
    buyTea: function() {
      if (this.totalMoney >= 120) {
        this.totalMoney -= 120
        this.lines.push("お茶を買いました。")
        localStorage.lines = JSON.stringify(this.lines)
      } else {
        this.lines.push("お金が足りません。")
        localStorage.lines = JSON.stringify(this.lines)
      }
    },
  },
  created: function() {
    this.lines = JSON.parse(localStorage.lines)
  },
})
