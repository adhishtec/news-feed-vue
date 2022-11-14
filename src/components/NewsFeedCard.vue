<template>
  <div class="news-feed-card">
    <div class="title">
      <h2>{{ news.title }}</h2>
    </div>
    <div class="body">{{ news.body }}</div>
    <div class="author">By - {{ news.author }}</div>
  </div>
</template>

<script>
export default {
  name: "NewsFeedCard",
  props: {
    news: Object,
  },
};
</script>

<style lang="scss" scoped>
.news-feed-card {
  box-shadow: 10px 5px 5px #dbd6d6;
  max-height: 30%;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  padding: 20px;
  overflow: scroll;
  margin: 20px;

  .title {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 10%;
  }

  .body {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-height: 60%;
  }

  .author {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 10%;
    font-style: italic;
    font-weight: 600;
  }
}
</style>
