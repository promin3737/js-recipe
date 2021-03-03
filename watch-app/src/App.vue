<template>
  <div id="app">
    <Watch class="clock" />
  </div>
</template>

<script>
import Watch from "@/components/Watch.vue";

export default {
  components: {
    Watch,
  },
};
</script>

<style scoped>
.clock {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}
</style>
