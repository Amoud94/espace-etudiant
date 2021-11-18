<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: {
    label: {
      type: String,
    },
    charData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    colors: {
      type: Object,
    },
  },
  mounted() {
    const dates = this.charData.map((d) => d.date);
    const nbrAbsence = this.charData.map((d) => d.nbrAbsence);

    const { backgroundColor } = this.colors;

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: nbrAbsence,
            backgroundColor:backgroundColor
          },
        ],
      },
      this.options
    );
  },
};
</script>
