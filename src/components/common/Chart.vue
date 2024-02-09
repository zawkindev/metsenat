<template>
  <div class="flex flex-col w-full h-full bg-white p-2 pb-10 sm:p-10 sm:pb-20 rounded-lg">


  <p class="text-lg sm:text-3xl font-bold">Homiy va Talabalar soni</p>
  <Line :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      data,
      options,
    };
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Homiy",
      borderColor: "#3e95cd",
      backgroundColor: "#3e95cd",
      data: [40, 39, 10, 40, 39, 80, 40],
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Talabalar",
      borderColor: "#f23057", // Red color
      backgroundColor: "#f23057",
      data: [20, 50, 60, 20, 70, 40, 60],
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleLineColor: "#fff",
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};
</script>
