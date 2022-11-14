<template>
  <div class="create-feed" style="background-color: #4ee8a2">
    <h3>Add new Feed</h3>

    <form @submit.prevent="submit" class="create-feed__form">
      <input
        class="input-field"
        type="text"
        v-model="feed.title"
        placeholder="Title"
      />
      <textarea
        class="input-field"
        type="textarea"
        v-model="feed.body"
        placeholder="Content"
      />
      <input
        class="input-field"
        type="text"
        v-model="feed.author"
        placeholder="Author"
      />
      <div class="input-action">
        <button class="cancel-button" @click="cancelCreateFeedForm">
          Cancel
        </button>
        <button
          :disabled="!feed.title || !feed.body || !feed.author"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsFeedCard",
  props: {
    news: Object,
  },
  data() {
    return {
      feed: {
        title: "",
        body: "",
        author: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("createFeed", this.feed);
      this.feed = { title: "", body: "", author: "" };
    },
    cancelCreateFeedForm() {
      this.$emit("createFeed", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.create-feed {
  background-color: #dbcbd8 !important;
  position: absolute;
  border: 1px solid grey;
  height: 30%;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  padding: 20px;
  overflow: scroll;
  margin: 20px;
  row-gap: 10px;
  width: 50%;

  h3 {
    display: flex;
    justify-content: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    width: 100%;

    .input-field {
      width: 60%;
    }
  }
  .input-action {
    display: flex;
    column-gap: 20px;
    button {
      all: unset;
      background: #564787;
      color: #dbcbd8;
      height: 3rem;
      width: 6rem;
      border-radius: 5%;
      margin-bottom: 10px;
      text-align: center;
      cursor: pointer;
    }

    button:disabled {
      background: #b6abd7;
      color: #eae3e9;
      cursor: not-allowed;
    }
  }
}
</style>
