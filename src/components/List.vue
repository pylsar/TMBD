<template>
  <section class="container">
    <h1>Топ Новинок</h1>
    <div class="list__navigation">
      <div class="list__navigation-input">
        <input type="text" v-model="srch" />
      </div>
      <div class="list__btns">
        <button
          class="list__navigation-btn"
          @click="prewPage"
          :disabled="pageNumber === 0"
          :class="{ unActive: pageNumber === 0 }"
        >
          <span>Предыдущая</span>
        </button>
        <button
          class="list__navigation-btn"
          @click="nextPage"
          :disabled="pageNumber >= pageCount - 1"
        >
          <span>Следующая</span>
        </button>
      </div>
    </div>
    <div class="list">
      <div
        class="list__card"
        v-for="(movie, index) in paginatedData"
        :key="index"
      >
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

export default {
  name: "List",
  data() {
    return {
      srch: "",
      pageNumber: 0,
      size: 8,
    };
  },
  computed: {
    ...mapGetters(["TMDB"]),
    paginatedData() {
      return this.filteredData.slice(
        this.pageNumber * this.size,
        this.pageNumber * this.size + this.size
      );
    },
    filteredData() {
      return this.TMDB.filter((item) => {
        return item.title.toLowerCase().includes(this.srch.toLowerCase());
      });
    },
    pageCount() {
      return Math.ceil(this.TMDB.length / this.size);
    },
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
    prewPage() {
      this.pageNumber--;
    },
    nextPage() {
      this.pageNumber++;
    },
  },
  mounted() {
    this.GET_TMDB_FROM_API();
    this.animation();
  },
};
</script> 
<style lang="scss">
h1 {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
}
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
      color: lightgray;
    }
  }
  &__link {
    display: block;
    margin-top: auto;
    margin-left: auto;
    text-decoration: none;
  }
  &__navigation {
    width: 50vw;
    margin: 0 auto 40px auto;
  }
  &__navigation-input {
    width: 50vw;
    & input {
      width: 100%;
      height: 30px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      border-radius: 10px;
      border: none;
      outline: none;
      padding-left: 10px;
      margin-bottom: 10px;
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  &__navigation-btn {
    width: 25vw;
    padding: 10px;
    border: none;
    outline: none;
    background: skyblue;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid purple;
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    &:hover span {
      color: white;
    }
  }
}
.container {
  width: 90vw;
  margin: 0 auto;
}
.unActive {
  pointer-events: none;
}
</style>

