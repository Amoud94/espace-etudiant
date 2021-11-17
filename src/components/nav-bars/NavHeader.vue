<template>
  <nav>
    <ul>
      <li class="logo">esoasup</li>
      <li class="items">
        <router-link to="/profile"><a href="#">Profile</a> </router-link>
      </li>
      <li class="items" @click="logout">
        <router-link to="/login"><a href="#">Log out</a></router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      console.log("hello");
      this.$store.dispatch("loggedOut");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
nav {
  background: #ffffff;
  padding: 5px 40px;
  height: 60px;
  width: 100%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
}
nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
nav ul li {
  padding: 15px 0;
  cursor: pointer;
}
nav ul li.items {
  position: relative;
  width: auto;
  margin: 0 16px;
  text-align: center;
  order: 3;
}
nav ul li.items:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 6px;
  height: 3px;
  width: 100%;
  background: #ff7253;
  opacity: 0;
  transition: all 0.2s linear;
}
nav ul li.items:hover:after {
  opacity: 1;
  bottom: 8px;
}
nav ul li.logo {
  flex: 1;
  color: rgb(0, 0, 0);
  font-size: 25px;
  font-weight: 600;
  cursor: default;
  user-select: none;
}
nav ul li a {
  color: rgb(7, 7, 7);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.4s;
}
nav ul li:hover a {
  color: #ff7253;
}
</style>
