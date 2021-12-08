<template>
  <div class="home">
    <div class="home__bg"></div>
    <div class="home__box">
      <h2>Movie Database</h2>
      <div class="home__content">
        <h3>Movie Database</h3>
        <p>Choose your movie</p>
        <p class="home__autor"><i>made by Alex Kusov</i></p>
        <ul class="home__navigation">
          <li>
            <router-link to="/list">
              <div class="menu__link">
                <span>Список</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="menu__link">
                <span>инфо</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { TimelineMax } from "gsap/all";
export default {
  name: "Home",
  methods: {
    imgStart() {
      let tl = new TimelineMax();
      tl.fromTo(".home__box", 2, { opacity: 0 }, { opacity: 1 }, 0.5)
        .fromTo("h2", 0.5, { fontSize: 10 + "vw" }, { fontSize: 0 })
        .fromTo(".home__content", 2, { opacity: 0 }, { opacity: 1 }, 3)
        .fromTo(
          ".home__navigation li a",
          2,
          { backgroundColor: "transparent" },
          { backgroundColor: "rgb(209, 180, 213)" },
          3
        );
    },
  },
  mounted() {
    this.imgStart();
  },
};
</script>
<style lang="scss">
.home {
  &__box {
    width: 100vw;
    height: 100vh;
  }
  &__bg {
    background: black;
    animation: startBg 0.5s linear;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  & h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  &__content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__autor {
    transform: rotate(-90deg);
    position: absolute;
    right: 10%;
    bottom: 20%;
  }
  &__navigation {
    display: flex;
    & li {
      margin: 24px 24px;
      & a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        padding: 12px 24px;
        border-radius: 6px;
        color: white;
      }
    }
  }
}

@keyframes startBg {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>