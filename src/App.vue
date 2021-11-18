<template>
  <div id="app">
    <div class="content" v-if="loggedIn">
      <nav-header></nav-header>
      <div class="ui tow column grid">
        <div class="four wide column">
          <nav-side-bar></nav-side-bar>
        </div>
        <div class="twelve wide column" id="view">
            <router-view />
        </div>
      </div>
    </div>
    <div v-else><router-view /></div>
  </div>
</template>

<script>
import "../libs/semantic-ui/semantic.min.js";
import "../libs/semantic-ui/semantic.min.css";

import NavHeader from "./components/nav-bars/NavHeader.vue";
import NavSideBar from "./components/nav-bars/NavSideBar.vue";
export default {
  components: {
    NavHeader,
    NavSideBar,
  },
  computed: {
    loggedIn() {
      return this.$store.getters.getLoggedIn;
    },
  },
};
</script>

<style>
#app {
  height: 650px;
}
#view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
  padding-right: 40px;
}
</style>
