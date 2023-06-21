<template>
  <v-skeleton-loader 
    v-if="chartData===undefined" 
    width="300" 
    height="300"
    class="skeleton"
  />
  <canvas v-else :id="chartId"/>
</template>

<script lang="ts">
import { Chart, ChartData, ChartOptions } from 'chart.js';
import Vue, { PropType } from 'vue'

interface Data {
  chart: Chart | undefined
}

export default Vue.extend({
  data() : Data {
    return {
      chart: undefined
    }
  },
  props:{
    chartId: {
      type: String as PropType<string>,
      required: true
    },
    chartData: {
      type: Object as PropType<ChartData | undefined>,
      required: true
    },
    chartOptions: {
      type: Object as PropType<ChartOptions | undefined>,
      required: true
    }
  },
  updated() {
    console.log("PieChart updated");
    if(this.chartData != undefined){
      if(this.chart == undefined){
        const chartElement = document.getElementById(this.chartId) as HTMLCanvasElement

        this.chart = new Chart(
          chartElement,
          {
            type: 'pie',
            data: this.chartData,
            options: this.chartOptions
          }
        )
      }
      else
        this.chart.update();
      
    }
  }
})
</script>

<style>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>