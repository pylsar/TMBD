<template>
  <div class="comments">
    <form class="comments__form" @submit.prevent="onSubmit">
      <div>
        <label for="nameMovie">Название фильма</label>
        <input
          v-model="movie"
          type="text"
          id="nameMovie"
          placeholder="писать тут"
        />
      </div>
      <div>
        <label for="nameUser">Имя пользователя</label>
        <input
          v-model="user"
          type="text"
          id="nameUser"
          placeholder="писать тут"
        />
      </div>
      <div>
        <label for="text">Комментарий</label>
        <textarea
          v-model="text"
          type="textarea"
          id="text"
          placeholder="писать тут"
        />
      </div>
      <button @click="addComment">Done</button>
    </form>
    <div class="comments__text" v-for="(comment, i) in comments" :key="i">
      <div class="comments__head">
        <span>{{ comment.movie }}</span>
        <span>{{ comment.user }}</span>
      </div>
      <div class="comments__content">
        {{ comment.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Comments",
  data() {
    return {
      movie: "",
      user: "",
      text: "",
      comment: "",
      comments: [
        {
          movie: "jhslkfd",
          user: "askjhd",
          text: "skdjfh",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.movie = "";
      this.user = "";
      this.text = "";
    },
    addComment() {
      if (this.movie && this.user && this.text) {
        this.comments.push({
          movie: this.movie,
          user: this.user,
          text: this.text,
        });
      }
    },
  },
};
</script>
<style lang="scss">
.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__form {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  }
  &__text {
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 10px 20px;
  }
  &__head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>