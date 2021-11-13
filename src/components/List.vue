<template>
  <section>
    <h1>Ща Глянем</h1>
    <div class="list">
      <div class="list__card" v-for="(movie, index) in TMDB" :key="index">
        <div class="list__card-img">
          <router-link :to="'/list/' + movie.id" class="list__link">
            <img
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              alt=""
            />
          </router-link>
        </div>
        <div class="list__card-content">
          <h3 class="list__title">{{ movie.title }}</h3>
          <div v-if="movie.overview">
            <p class="list__desc">{{ movie.overview }}</p>
          </div>
          <div v-else>
            <p class="list__desc--empty">На данный момент описания нет</p>
          </div>
          <router-link :to="'/list/' + movie.id" class="list__link">
            <span class="list__link">Читать</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import { TimelineMax } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

export default {
  name: "List",
  data() {
    return {
      // controller: null,
      // tween: null,
      // scene: null,
    };
  },
  computed: {
    ...mapGetters(["TMDB"]),
  },
  methods: {
    ...mapActions(["GET_TMDB_FROM_API"]),
    animation() {
      let tl = new TimelineMax();
      tl.staggerFrom(".list__card", 1.25, {
        scale: 0,
        stagger: {
          from: "center",
          amount: 0.25,
        },
      });
    },
  },
  mounted() {
    this.GET_TMDB_FROM_API();
    this.animation();
  },
};
</script> 
<style lang="scss">
.list {
  &__card {
    width: 100%;
    height: 300px;
    display: flex;
    margin-bottom: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  &__card-img {
    height: 300px;
    position: relative;
    & img {
      max-width: 100%;
      min-width: 300px;
      max-height: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
    }
  }
  &__card-content {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__title {
    text-align: center;
    text-transform: uppercase;
  }
  &__desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    &--empty {
      color: skyblue;
    }
  }
  &__link {
    display: block;
    margin-top: auto;
    margin-left: auto;
    text-decoration: none;
  }
}
</style>

