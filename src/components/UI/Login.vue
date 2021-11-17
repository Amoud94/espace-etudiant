<template>
  <div class="container">
    <div class="ui form">
      <div class="ui basic segment">
        <h2 class="ui icon blue header">
          <i class="eye icon"></i>
          <div class="content">
            ESOA
            <div class="sub header">L'Ecole Supérieure d’Optique Appliquée</div>
          </div>
        </h2>

      </div>
      <div class="ui blue segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input
              type="text"
              class="form control"
              name="username"
              placeholder="Nom d'utilisateur"
            />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input
              type="password"
              class="form control"
              name="password"
              placeholder="Mot de passe"
            />
          </div>
        </div>
        <div class="ui fluid blue button" @click="onLogin">
          <span>Log In</span>
        </div>
      </div>
      <div class="ui error message"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onLogin() {
      this.$store.dispatch("loggedIn");
      this.$router.push("/accueil");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
.container {
  display: flex;
  flex:1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 800px;
}
.ui.form {
  text-align: center;
  padding-top: 100px;
  width: 500px;
}
</style>
