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
        <bar-chart
          class="chart"
          label="Absences de cette semaine"
          :colors="color"
          :charData="charData"
          :options="charOptions"
        ></bar-chart>
      </div>
    </div>
    <div class="content">
      <div class="ui red padded segment">
        <div class="header">
          <h2 class="ui header">
            <i class="bell outline icon"></i>
            <div class="content">Messagerie d'absence</div>
          </h2>
        </div>
        <table class="ui selectable basic table">
          <thead>
            <tr>
              <th>Time</th>
              <th>From</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021-10-25T10:30</td>
              <td>Madam Zineb</td>
              <td>Absence non justifier</td>
            </tr>
            <tr>
              <td>2021-09-05T09:30</td>
              <td>Mr Hamza</td>
              <td>Absence non justifier</td>
            </tr>
            <tr>
              <td>2021-06-15T08:30</td>
              <td>Madam Nazha</td>
              <td>Acces du nombre d'absence</td>
            </tr>
            <tr>
              <td>2021-06-15T08:30</td>
              <td>Madam Nazha</td>
              <td>Absence non justifier</td>
            </tr>
            <tr>
              <td>2021-06-15T08:30</td>
              <td>Madam Nazha</td>
              <td>Absence non justifier</td>
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
import BarChart from "../charts/BarChart.vue";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      charData: [],
      charOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      color: {
        backgroundColor: "rgba(255,99,132,0.5)",
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
    for (let i = 0; i < 8; i++) {
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

<style scoped> 
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

.content .header .ui.header {
  padding-bottom: 14px;
}
</style>
