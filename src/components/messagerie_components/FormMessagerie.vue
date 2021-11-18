<template>
  <div class="ui padded red segment">
    <div class="ui form">
      <div class="field">
        <label>Destinataires</label>
        <input type="text" name="email" placeholder="email address" />
      </div>
      <div class="field">
        <label>Objet</label>
        <input type="text" name="subject" placeholder="subject" />
      </div>
      <div class="field">
        <label>Short Text</label>
        <textarea rows="4"></textarea>
      </div>
      <div class="ui primary right labeled icon button">
        <i class="icon paper plane outline"></i>
        Envoyer
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
