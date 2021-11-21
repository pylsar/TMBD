<template>
  <div class="comments">
    <form class="comments__form" @submit.prevent="onSubmit">
      <div class="comments__form-items">
        <label for="nameMovie">Название фильма</label>
        <input
          v-model="movie"
          type="text"
          id="nameMovie"
          placeholder="писать тут"
        />
      </div>
      <div class="comments__form-items">
        <label for="nameUser">Имя пользователя</label>
        <input
          v-model="user"
          type="text"
          id="nameUser"
          placeholder="писать тут"
        />
      </div>
      <div class="comments__form-items">
        <label for="text">Комментарий</label>
        <textarea
          v-model="text"
          type="textarea"
          id="text"
          placeholder="писать тут"
          rows="5"
        />
      </div>
      <button class="comments__btn" @click="addComment">Done</button>
    </form>
    <div class="comments__text" v-for="(comment, i) in comments" :key="i">
      <div class="comments__head">
        <span>
          <strong>{{ comment.movie }}</strong>
        </span>
        <span>
          <strong>{{ comment.user }}</strong>
        </span>
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
          movie: "Оно",
          user: "Наливкин",
          text: "Ну ни че так кинцо, можно посмотреть",
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
  mounted() {
    if (localStorage.getItem("comments")) {
      this.comments = JSON.parse(localStorage.getItem("comments"));
    }
  },
  watch: {
    comments: {
      handler() {
        localStorage.setItem("comments", JSON.stringify(this.comments));
      },
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
    width: 90%;
    margin: 0 auto;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &__form-items {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    & label {
      width: 20%;
      margin-right: 20px;
    }
    & input,
    & textarea {
      width: 70%;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      border-radius: 10px;
      border: none;
      outline: none;
      padding-left: 10px;
      &::placeholder {
        opacity: 0.5;
      }
    }
    & input {
      height: 30px;
    }
    & textarea {
      resize: none;
    }
  }
  &__btn {
    padding: 10px 30px;
    margin: 0 auto;
    background: skyblue;
    outline: none;
    border: none;
    color: white;
    text-transform: uppercase;
    transition: all 0.5s ease;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
      border-radius: 20px;
      letter-spacing: 5px;
    }
  }
  &__text {
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
  }
  &__head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    margin-top: 20px;
  }
}
</style>