<template>
  <div class="ui basic red segment">
    <div class="headBar">
      <div class="ui icon input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <button class="ui positive labeled icon button">
        <i class="add icon"></i>
        Nouveau message
      </button>
    </div>
    <div class="ui pointing fluid three item secondary tabular menu">
      <a class="item active" data-tab="inbox"><i class="icon mail"></i>Inbox</a>
      <a class="item" data-tab="social"><i class="icon users"></i> Social</a>
      <a class="item" data-tab="administration">
        <i class="icon exclamation"></i>Administration</a
      >
    </div>
    <div class="ui active tab" data-tab="inbox">
      <table class="ui selectable striped single line table">
        <tbody>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ui tab" data-tab="social">
      <table class="ui selectable striped single line table">
        <tbody>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ui tab" data-tab="administration">
      <table class="ui selectable striped single line table">
        <tbody>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td class="collapsing"><i class="paper plane outline icon"></i></td>
            <td>John Lilki</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>
              <div class="icons">
                <i class="star outline icon"></i>
                <i class="bookmark outline icon"></i>
                <i class="icon red trash"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    $(".tabular.menu .item").tab();
  },
};
</script>

<style scoped>
.headBar {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.icons {
  display: flex;
  justify-content: space-evenly;
}

.icons > i {
  cursor: pointer;
}

input {
  width: 350px;
}
</style>
