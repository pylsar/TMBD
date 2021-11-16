<template>
  <header class="header">
    <button class="fix-menu" @click="toggleMenu">
      <span v-if="!menuIsOpened">открыть</span>
      <span v-else>закрыть</span>
    </button>
    <nav class="menu" :class="{ showNav: menuIsOpened }">
      <ul>
        <li>
          <router-link to="/">
            <div class="menu__link">
              <span>главная</span>
            </div>
          </router-link>
        </li>
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
        <li>
          <router-link to="/comments">
            <div class="menu__link">
              <span>Комментарии</span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { TimelineMax } from "gsap/all";
export default {
  name: "Home",
  data() {
    return {
      menuIsOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpened = !this.menuIsOpened;
    },
    showMeFixMenu() {
      let tl = new TimelineMax();
      tl.fromTo(".fix-menu", 1, { y: -24 }, { y: 0 }, 2);
    },
  },
  created() {
    const onClickOutside = (e) =>
      (this.menuIsOpened = this.$el.contains(e.target) && this.menuIsOpened);
    document.addEventListener("click", onClickOutside);
    this.$on("hook:beforeDestroy", () =>
      document.removeEventListener("click", onClickOutside)
    );
  },
  mounted() {
    this.showMeFixMenu();
  },
};
</script>

<style lang="scss" >
.fix-menu {
  width: 100%;
  height: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgb(219, 213, 213);
  outline: none;
  border: none;
  cursor: pointer;
}
.menu {
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: rgb(219, 213, 213);
  transform: translateY(-100px);
  transition: all 0.5s ease;
  & ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    & li {
      & a {
        text-decoration: none;
        text-transform: uppercase;
        color: #4d4d4d;
      }
    }
  }
  &__link {
    &:hover span {
      animation: row 1s linear infinite;
    }
  }
}

@keyframes row {
  0% {
    text-shadow: rgb(22, 21, 19) 1px 0 10px;
  }
  100% {
    text-shadow: rgb(22, 21, 19) 1px 0 2px;
  }
}

.showNav {
  transform: translateY(24px);
  transition: all 0.5s ease;
}
</style>