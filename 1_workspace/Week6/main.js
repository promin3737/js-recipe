new Vue({
  el: "#app",
  data: {
    totalMoney: "",
    total: 0,
    items: [],
    inputMoney: "",
  },
  methods: {
    buyItem: function(x) {
      if (x === "コーラ") {
        this.totalMoney -= 100;
        this.items.push("コーラを買いました");
        this.total += 1;
      } else {
        this.totalMoney -= 80;
        this.items.push("お茶を買いました");
        this.total += 1;
      }
    },
    insertMoney: function() {
      this.totalMoney += Number(this.inputMoney);
    },
  },
});
