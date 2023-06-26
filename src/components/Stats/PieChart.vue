<template>
  <SquareSkeletonLoaderVue 
    :loading="chartData===undefined" 
    width="300px" 
    height="300px"
  >
    <canvas :id="chartId"/>
  </SquareSkeletonLoaderVue>
  
</template>

<script lang="ts">
import { Chart, ChartData, ChartOptions } from 'chart.js';
import Vue, { PropType } from 'vue'
import SquareSkeletonLoaderVue from '../RectangleSkeletonLoader.vue';

interface Data {
  chart: Chart | undefined
}

export default Vue.extend({
  components:{
    SquareSkeletonLoaderVue
  },
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