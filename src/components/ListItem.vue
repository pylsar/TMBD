<template>
  <div
    class="list-item"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieItem.backdrop_path})`,
    }"
  >
    <h1>{{ movieItem.title }}</h1>
    <p>{{ movieItem.overview }}</p>
    <button @click="$router.go(-1)">Назад</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
  },
  mounted() {
    this.GET_TMDB_FROM_API();
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
}
</style>