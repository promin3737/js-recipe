<template>
  <div>
    <div class="container">
      <p class="date">{{ year }}/{{ month }}/{{ day }}</p>
      <div class="time">
        <p class="time-item hours">{{ hours }}</p>
        <p class="time-item">:</p>
        <p class="time-item minutes">{{ minutes }}</p>
        <p class="time-item">:</p>
        <p class="time-item seconds">{{ seconds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    year: function() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth() + 1;
    },
    day() {
      return this.date.getDate();
    },
    hours() {
      return this.date.getHours();
    },
    minutes() {
      return this.date.getMinutes();
    },
    seconds: function() {
      return this.date.getSeconds();
    },
  },
  mounted() {
    const that = this;
    setInterval(function() {
      that.setDate();
    }, 1000);
  },
  methods: {
    setDate() {
      this.date = new Date();
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #3a4a5e;
  padding: 3%;
}

.date {
  text-align: right;
  color: #fff;
  font-family: "digital-clock-font";
  font-size: 40px;
  letter-spacing: 1px;
  margin: 0;
  line-height: 1;
}

.time {
  display: flex;
  background-color: gray;
}

.time-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  height: 100px;
  position: relative;
  padding: 5px;
  margin: 3px;
  color: #fff;
  font-family: "digital-clock-font";
  font-size: 30px;
  line-height: 1;
  box-sizing: border-box;
}

.time-item:before {
  position: absolute;
  right: 5px;
  bottom: 1px;
  color: #fff;
  font-family: "Teko", sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.hours:before {
  content: "Hours";
}

.minutes:before {
  content: "Minutes";
}

.seconds:before {
  content: "Seconds";
}
</style>
