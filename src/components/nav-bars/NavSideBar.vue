<template>
  <div class="ui basic inverted container segment">
    <div class="ui vertical fluid black labeled icon buttons">
      <button class="left aligned ui button">
        <i class="icon home"></i>
        <router-link to="/accueil">Accueil</router-link>
      </button>
      <button class="left aligned ui button">
        <i class="icon calendar alternate outline"></i>
        <router-link to="/emploi">Emploi du temps</router-link>
      </button>
      <button class="left aligned ui button">
        <i class="icon book"></i>
        <router-link to="/cours">Courses</router-link>
      </button>
      <button class="left aligned ui button">
        <i class="icon clipboard check"></i>
        Evenement
      </button>
      <button class="left aligned ui button">
        <i class="icon envelope"></i>
        Messagerie
      </button>
      <button class="left aligned ui button">
        <i class="clipboard list icon"></i>
        <router-link to="/absence">Absences</router-link>
      </button>
      <button class="left aligned ui button">
        <i class="icon pencil"></i>
        Notes
      </button>
      <button class="left aligned ui button">
        <i class="icon calendar check outline"></i>
        Planning des examens
      </button>
    </div>
    <button class="red fluid ui button">
      <i class="eye icon"></i>
      Consulter mes payments
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.ui.segment {
  height: 100%;
  margin-top: 60px;
  width: 320px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
}
.red.button {
  position: relative;
  top: 40%;
}
</style>
