<template>
  <div class="chart-container mx-auto mt-4" style="width: 1000px">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  BarController,
} from 'chart.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

const chartRef = ref(null)

const db = getFirestore()
const providersCollection = collection(db, 'accessibilityProviders')

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Number of Providers',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
})

const fetchData = async () => {
  const querySnapshot = await getDocs(providersCollection)
  const providerData = querySnapshot.docs.map((doc) => doc.data())

  const regionCounts = {}
  providerData.forEach((provider) => {
    const region = provider.region || 'Unknown'
    if (!regionCounts[region]) {
      regionCounts[region] = 0
    }
    regionCounts[region]++
  })

  const labels = Object.keys(regionCounts)
  const data = Object.values(regionCounts)

  chartData.value = {
    labels,
    datasets: [
      {
        label: 'Number of Providers',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  // Create chart
  new ChartJS(chartRef.value, {
    type: 'bar',
    data: chartData.value,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Number of Accessibility Providers by Region',
          font: {
            size: 24,
            weight: 'bold',
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Region',
            font: {
              size: 20,
            },
          },
          ticks: {
            font: {
              size: 13,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: 'Number of Providers',
            font: {
              size: 20,
            },
          },
          ticks: {
            font: {
              size: 13,
            },
            stepSize: 1,
          },
          min: 0,
        },
      },
    },
  })
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.chart-container canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
