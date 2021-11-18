<template>
  <div id="container">
    <div class="row">
      <div class="news">
        <!--  -->
        <div class="ui red segment">
          <div class="ui placeholder segment">
            <div class="ui icon header">
              <i class="pdf file outline icon"></i>
              No demandes have been made so far.
            </div>
            <div class="ui primary button">Ask For Document</div>
          </div>
        </div>
      </div>
      <div class="todaySchd">
        <!--  -->
        <div class="ui orange segment">
          <h2 class="ui header">
            <i class="newspaper outline icon"></i>
            <div class="content">Actualités :</div>
          </h2>

          <div class="ui feed">
            <div class="event">
              <div class="label">
                <img
                  src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
                />
              </div>
              <div class="content">
                <div class="summary">
                  <a>Joe Henderson</a> posted
                  <div class="date">3 days ago</div>
                </div>
                <div class="extra text">
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </div>
                
              </div>
            </div>
            <div class="event">
              <div class="label">
                <img
                  src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
                />
              </div>
              <div class="content">
                <div class="summary">
                  <a>Joe Henderson</a> posted
                  <div class="date">3 days ago</div>
                </div>
                <div class="extra text">
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </div>
                
              </div>
            </div>
            <div class="event">
              <div class="label">
                <img
                  src="https://semantic-ui.com/images/avatar/small/joe.jpg"
                />
              </div>
              <div class="content">
                <div class="summary">
                  <a>Joe Henderson</a> posted
                  <div class="date">3 days ago</div>
                </div>
                <div class="extra text">
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </div>
                
              </div>
            </div>
          </div>

          <!-- <div class="ui orange segment">
            <p>
              I'm here to tell you something, and you will probably read me
              first.
            </p>
          </div>
          <div class="ui inverted orange segment">
            <p>
              I'm here to tell you something, and you will probably read me
              first.
            </p>
          </div>
          <div class="ui inverted orange segment">
            <p>
              I'm here to tell you something, and you will probably read me
              first.
            </p>
          </div>
          <div class="ui inverted orange segment">
            <p>
              I'm here to tell you something, and you will probably read me
              first.
            </p>
          </div>
          <div class="ui secondary inverted orange segment">
            <p>
              I am pretty noticeable but you might check out other content
              before you look at me.
            </p>
          </div>
          <div class="ui tertiary inverted orange segment">
            <p>If you notice me you must be looking very hard.</p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="attendance">
      <div class="ui red very padded segment">
        <line-chart
          class="chart"
          label="Absences de cette semaine"
          :colors="color"
          :charData="charData"
          :options="charOptions"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import momemt from "moment";
import LineChart from "../charts/LineChart.vue";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      charData: [],
      charOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      color: {
        borderColor: "orange",
        pointBorderColor: "orange",
        pointBackgroundColor: "white",
        backgroundColor: "white",
      },
    };
  },
  methods: {
    randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    },
  },
  beforeMount() {
    for (let i = 0; i < 5; i++) {
      const date = momemt(
        this.randomDate(new Date(2021, 11, 11), new Date()),
        "YYYYMMDD"
      ).format("DD-MM");
      const nbrAbsence = Math.floor(Math.random() * 10);
      this.charData.push({ date, nbrAbsence });
    }
    console.log(this.charData);
  },
};
</script>

<style scoped>
.segment > h2{
  margin-bottom: 25px;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#container .row {
  display: flex;
  flex-direction: row;
  width: 100%;
}
#container .row .news{
  padding-right: 5px;
}
#container .row .news .segment {
  flex: 1;
  height:100%;
}
#container .row .todaySchd {
  flex: 2;
  padding-right: 5px;
  height: 300px;
  overflow-y: scroll;
}
#container .attendance {
  flex: 1;
  display: flex;
  margin: 5px;
  width: 100%;
}
.attendance .segment {
  width: 100%;
  margin: 5px;
}
</style>
