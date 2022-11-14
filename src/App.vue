<template>
  <div id="app">
    <!-- <router-view/> -->
    <news-feed></news-feed>
  </div>
</template>

<script>
import NewsFeed from "./components/NewsFeed.vue";

export default {
  name: "App",
  components: {
    NewsFeed,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
