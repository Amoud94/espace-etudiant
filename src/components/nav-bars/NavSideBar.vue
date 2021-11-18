<template>
  <div class="ui basic inverted container segment">
    <div class="ui vertical fluid black labeled icon buttons">
      <router-link to="/accueil" class="left aligned ui button">
        <i class="icon flag checkered alternate outline"></i>
        Accueil
      </router-link>
      <router-link to="/emploi" class="left aligned ui button">
        <i class="icon calendar alternate outline"></i>
        Emploi du temps
      </router-link>
      <router-link to="/cours" class="left aligned ui button">
        <i class="icon book"></i>
        Courses
      </router-link>
      <router-link to="/evenement" class="left aligned ui button">
        <i class="icon clipboard check"></i>
        Evenement
      </router-link>
      <router-link to="/messagerie" class="left aligned ui button">
        <i class="icon envelope"></i>
        Messagerie
      </router-link>
      <router-link to="/absence" class="left aligned ui button">
        <i class="clipboard list icon"></i>
        Absences
      </router-link>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 63px;
  padding-bottom: 90px;
  width: 320px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
}
</style>
