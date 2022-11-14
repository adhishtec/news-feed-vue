<template>
  <div class="news-feed" :class="`${showCreateFeed && 'blur-background'}`">
    <h1 class="news-feed__header">News Feed</h1>
    <div class="search-sort">
      <input
        class="input-field"
        type="text"
        v-model="searchText"
        placeholder="Search Feed by Title"
        @input="searchTitle"
      />
      <div class="sort">
        <button class="button sort-button" @click="sortFeed('title')">
          {{
            `Sort by Title - ${titleAscending ? "Ascending" : "Descending"}`
          }}</button
        ><button class="button sort-button" @click="sortFeed('body')">
          {{
            `Sort by Body - ${bodyAscending ? "Ascending" : "Descending"}`
          }}</button
        ><button class="button sort-button" @click="sortFeed('author')">
          {{
            `Sort by Author - ${authorAscending ? "Ascending" : "Descending"}`
          }}
        </button>
      </div>
    </div>
    <div class="news-feed__button">
      <button class="button create-button" @click="addCreateFeedForm">
        Add News Entry
      </button>
    </div>
    <div class="create-feed-container">
      <create-feed v-if="showCreateFeed" @createFeed="createFeed" />
    </div>
    <div v-for="oneArticle in newsToShow" :key="oneArticle.id">
      <news-feed-card :news="oneArticle" />
    </div>
  </div>
</template>

<script>
import NewsFeedCard from "./NewsFeedCard.vue";
import CreateFeed from "./CreateFeed.vue";
import { newsFeed } from "../assets/newsFeed";

export default {
  name: "NewsFeed",
  props: {
    msg: String,
  },
  components: {
    NewsFeedCard,
    CreateFeed,
  },
  data() {
    return {
      showCreateFeed: false,
      searchText: "",
      titleAscending: true,
      bodyAscending: true,
      authorAscending: true,
      news: newsFeed,
    };
  },
  created() {
    this.newsToShow = this.news.slice();
  },
  methods: {
    addCreateFeedForm() {
      this.showCreateFeed = true;
    },
    createFeed(feed) {
      if (feed) {
        this.news.unshift(feed);
        this.newsToShow = [...this.news];
      }

      this.showCreateFeed = false;
    },
    searchTitle() {
      this.newsToShow = this.news.filter((element) => {
        return element.title
          .split(" ")
          .join("")
          .toLowerCase()
          .includes(this.searchText.toLowerCase().split(" ").join(""));
      });
    },
    sortFunction(sortName) {
      return this.news.slice().sort((a, b) => {
        if (a[sortName].toLowerCase() < b[sortName].toLowerCase()) {
          return this.titleAscending ||
            this.bodyAscending ||
            this.authorAscending
            ? -1
            : 1;
        }
        if (a[sortName].toLowerCase() > b[sortName].toLowerCase()) {
          return this.titleAscending ||
            this.bodyAscending ||
            this.authorAscending
            ? 1
            : -1;
        }
        return 0;
      });
    },

    sortFeed(sortName) {
      if (sortName === "title") {
        this.titleAscending = !this.titleAscending;
        this.bodyAscending = false;
        this.authorAscending = false;
      } else if (sortName === "body") {
        this.bodyAscending = !this.bodyAscending;
        this.titleAscending = false;
        this.authorAscending = false;
      } else if (sortName === "author") {
        this.authorAscending = !this.authorAscending;
        this.titleAscending = false;
        this.titleAscending = false;
      }
      this.newsToShow = this.sortFunction(sortName);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-feed {
  position: relative;
  height: 100%;
  margin-bottom: 30px;

  &__header {
    height: 50px;
    background: #564787;
    color: #fefdfe;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-sort {
    display: flex;
    justify-content: space-between;
    margin: 20px;

    .input-field {
      padding: 10px;
      width: 30%;
    }

    .sort {
      display: flex;
      column-gap: 10px;

      .sort-button {
        padding: 10px;
      }
    }
  }

  .button {
    all: unset;
    background: #9ad4d6;
    color: #101935;

    border-radius: 5%;

    text-align: center;
    cursor: pointer;
    font-weight: 600;
  }

  &__button {
    display: flex;
    justify-content: center;

    .create-button {
      height: 3rem;
      width: 15%;
      margin-bottom: 10px;
      padding: 5px;
    }
  }

  .create-feed-container {
    display: flex;
    justify-content: center;
    z-index: 10;
  }
}

.blur-background {
  background-color: #f2fdff;
}
</style>
