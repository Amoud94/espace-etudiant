<template>
  <div id="container">
    <div class="row">
      <div class="news">
        <!--  -->
        <div class="ui red segment">
          <h4 class="ui header">A header</h4>

          <div class="ui placeholder segment">
            <div class="ui icon header">
              <i class="pdf file outline icon"></i>
              No documents are listed for this customer.
            </div>
            <div class="ui primary button">Add Document</div>
          </div>
        </div>
      </div>
      <div class="today_schd">
        <!--  -->
        <div class="ui orange basic segment">
          <h4 class="ui header">A header</h4>

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
          </div>
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

<style>
#container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
#container .row {
  flex: 1;
  display: flex;
  width: 100%;
}
.row .news {
  flex-grow: 2;
  margin: 5px;
}
.row .today_schd {
  margin: 5px;
  height: 310px;
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
