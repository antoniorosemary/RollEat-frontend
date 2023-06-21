<template>
  <v-container>
    <v-row>
      <v-col class="col-auto">
        <v-card>
          <PieChart 
            chartId="driveDeliveryRatio" 
            v-bind:chartData="pieDriveDeliveryRatioData"
            :chartOptions="pieDriveDeliveryRatioOptions"
          />
          <v-btn @click="test">test</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import PieChart from '../components/Stats/PieChart.vue'
import {ChartData, ChartOptions } from 'chart.js'
import Colors from '../utils/colors'

interface Data {
  pieDriveDeliveryRatioData: ChartData | undefined
  pieDriveDeliveryRatioOptions: ChartOptions
}
export default Vue.extend({
  components:{
    PieChart
  },
  data() : Data {
    return {
      pieDriveDeliveryRatioData: undefined,
      pieDriveDeliveryRatioOptions: {
        responsive:false,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: "Comparaison Commande / Livraison"
          }
        }
      }
    }
  },
  methods:{
    test() {
      this.pieDriveDeliveryRatioData = {
        labels: [
          'Commande', 
          'Livraison'
        ],
        datasets: [
          {
            data: [
              70,
              80
            ],
            backgroundColor: [
              Colors.greenDarken1,
              Colors.blueDarken1 
            ]
          }
        ]
      }
    }
  },
  created() {
    console.log("RestaurantStatsView created")
    /*this.pieDriveDeliveryRatioData = {
      labels: [
        'Commande', 
        'Livraison'
      ],
      datasets: [
        {
          data: [
            70,
            80
          ],
          backgroundColor: [
            Colors.greenDarken1,
            Colors.blueDarken1 
          ]
        }
      ]
    }*/
  },
  updated() {
    console.log("RestaurantStatsView updated")
    console.log(this.pieDriveDeliveryRatioData)
  }
})
</script>