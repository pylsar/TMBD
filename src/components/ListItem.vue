<template>
  <div
    class="list-item"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieItem.backdrop_path})`,
    }"
  >
    <h1 class="list-item__title">{{ movieItem.title }}</h1>
    <p class="list-item__description">{{ movieItem.overview }}</p>
    <button class="list-item__btn" @click="$router.go(-1)">Назад</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { TimelineMax } from "gsap/all";
export default {
  name: "ListItem",
  data() {
    return {
      id: this.$route.params["id"],
    };
  },
  computed: {
    ...mapGetters(["TMDB"]),
    movieItem() {
      //необходимо привести к числу
      return this.$store.getters.movieById(+this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(["GET_TMDB_FROM_API"]),
    descriptionAnimate() {
      let tl = new TimelineMax();

      tl.fromTo(
        ".list-item__title",
        { y: -50, x: 20, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          ".list-item__description",
          { y: -50, x: 20, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 1 }
        )
        .fromTo(".list-item__btn", { opacity: 0 }, { opacity: 1, duration: 1 });
    },
  },
  mounted() {
    this.GET_TMDB_FROM_API();
    this.descriptionAnimate();
  },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params.id;
    },
  },
};
</script>  
<style lang="scss">
.list-item {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-shadow: #FC0 1px 0 10px;
  padding: 50px;
  &__title {
    text-align: center;
    padding-bottom: 70px;
  }
  &__btn {
    padding: 10px 30px;
    margin-top: 20px;
    background: skyblue;
    outline: none;
    border: none;
    color: white;
    text-transform: uppercase;
    transition: all 0.5s ease;
    letter-spacing: 1px;
    opacity: 0; // фикса при загрузке страницы
    &:hover {
      cursor: pointer;
      border-radius: 20px;
      letter-spacing: 5px;
      transform: translateX(-15px);
      transition: all 0.5s ease;
    }
  }
}
</style>