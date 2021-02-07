new Vue({
  el: "#app",
  data: {
    count: 0,
    memos: ["めも１", "めも２", "めも３"],
    inputText: "",
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    addHikakin: function() {
      this.memos.push("ヒカキン")
    },
    changeHikakin: function() {
      this.inputText = "ヒカキン"
    },
  },
})
