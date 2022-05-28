<template>
  <div class="text-[20px] font-bold text-center uppercase block mb-4">
    Power Chart
  </div>
  <Bar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
 name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' , 'April'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12 , 10]
          },
           {
            label: 'Data Two',
            backgroundColor: '#f34343',
            data: [20 , 40, 8 , 10]
          }
        ]
      }
    }
  }
}
</script>