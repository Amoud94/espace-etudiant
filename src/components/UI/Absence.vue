<template>
  <div class="container">
    <div class="chart">
      <div class="ui red very padded segment">
        <div class="timeBox">
          <div class="ui floating labeled fluid icon dropdown button">
            <i class="filter icon"></i>
            <span class="text">Filter</span>
            <div class="menu">
              <div class="header">
                <i class="tags icon"></i>
                Filter by :
              </div>
              <div class="item">
                <div class="ui red empty circular label"></div>
                Month
              </div>
              <div class="item">
                <div class="ui blue empty circular label"></div>
                Week
              </div>
              <div class="item">
                <div class="ui yellow empty circular label"></div>
                Day
              </div>
            </div>
          </div>
        </div>
        <line-chart
          class="chart"
          label="Absences de cette semaine"
          :colors="color"
          :charData="charData"
          :options="charOptions"
        ></line-chart>
      </div>
    </div>
    <div class="content">
      <div class="ui padded segment">
        <h2 class="header">A header</h2>

        <table class="ui very basic table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Approved</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Jamie</td>
              <td>Approved</td>
              <td>Requires call</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Denied</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
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
      ).format("MM/DD");
      const nbrAbsence = Math.floor(Math.random() * 10);
      this.charData.push({ date, nbrAbsence });
    }
    console.log(this.charData);
  },
  mounted() {
    $(".timeBox .ui.dropdown").dropdown();
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.chart {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.chart .timeBox {
  flex: 1;
  width: 380px;
  margin-bottom: 30px;
}
.content {
  flex: 1;
  width: 100%;
  margin: 20px;
}
</style>
