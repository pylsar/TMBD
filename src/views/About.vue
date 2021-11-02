<template>
  <div class="info">
    <h1>TMBD api</h1>
    <div class="info__box">
      <h3>Используемые технологии:</h3>
      <div class="info__container">
        <ul class="info__list">
          <li>Vue</li>
          <li>VueX</li>
          <li>Vue-Router</li>
          <li>Axios</li>
          <li>Gsap</li>
          <li>Scss</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss">
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & h1 {
    margin-bottom: 24px;
    font-size: 14vw;
  }
  & h3 {
    margin-bottom: 12px;
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__container {
    height: 24px;
    overflow: hidden;
    transform: translateY(-5px);
  }
  &__list {
    transform: translateY(-90%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    animation: text-animate 10s linear infinite;
    &:hover {
      cursor: default;
      -webkit-animation-play-state: paused;
      -moz-animation-play-state: paused;
      -o-animation-play-state: paused;
      animation-play-state: paused;
    }
    & li {
      margin: 5px 15px;
      font-size: 24px;
      line-height: 1;
      height: 24px;
      text-shadow: #FC0 1px 0 10px;
    }
  }
}

@keyframes text-animate {
  0% {
    transform: translateY(-90%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>