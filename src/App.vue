<template>
  <div id="app">
    <the-header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
body {
  background: #F4F4F4;
}

::-webkit-scrollbar {
  height: 6px;
  width: 10px;
  border-radius: 6px;
}
::-webkit-scrollbar-track {
  background-clip: content-box; /* Важно */
}
::-webkit-scrollbar-thumb {
  background: rgb(52, 106, 213);
  border-radius: 6px;
}
</style>
