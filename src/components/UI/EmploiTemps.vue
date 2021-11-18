<template>
  <div class="container">
    <div class="ui red basic padded segment">
      <div class="timetable">
        <div class="week-names">
          <div>monday</div>
          <div>tuesday</div>
          <div>wednesday</div>
          <div>thursday</div>
          <div>friday</div>
          <div class="weekend">saturday</div>
          <div class="weekend">sunday</div>
        </div>
        <div class="time-interval">
          <div>8:00 - 10:00</div>
          <div>10:00 - 12:00</div>
          <div>12:00 - 14:00</div>
          <div>14:00 - 16:00</div>
          <div>16:00 - 18:00</div>
          <div>18:00 - 20:00</div>
        </div>
        <div class="content">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
* {
  box-sizing: border-box;
}
.timetable {
  display: grid;
  grid-template-areas:
    ". week"
    "time content";
  grid-template-columns: 100px;
  grid-template-rows: 50px;
  width: 70vw;
  height: 70vh;
  /* padding: 20px; */
  margin-top: 50px;
}
.week-names {
  grid-area: week;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-transform: uppercase;
  font-size: 12px;
}
.week-names > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 0px 0px #fae1e1;
}
.time-interval {
  grid-area: time;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  font-size: 14px;
}
.time-interval > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 1px 0px #fae1e1;
}
.content {
  grid-area: content;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
}
.content > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 0px #fae1e1;
}
</style>
