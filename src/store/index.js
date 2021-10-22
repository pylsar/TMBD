import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imdbDatabase: []
  },
  mutations: {
    SET_TMDB_TO_STATE: (state, imdbDatabase) => {
      state.imdbDatabase = imdbDatabase;
    }
  },
  actions: {
    GET_TMDB_FROM_API({ commit }) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=d022d604787c4d53b153ce7673b05f14&language=ru-RU&page=1"
        )
        .then((imdbDatabase) => {
          commit("SET_TMDB_TO_STATE", imdbDatabase.data.results);
          console.log(imdbDatabase.data.results);
          return imdbDatabase;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  },
  getters: {
    TMDB(state) {
      return state.imdbDatabase;
    },
    movieById: (state) => (id) =>
      state.imdbDatabase.find((move) => move.id === id)
  },
  modules: {
  }
})
