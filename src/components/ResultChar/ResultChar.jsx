import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const ResultsChart = () => {
  // Transformar las tareas para obtener los datos para la gráfica
  const labels = tasks.map((task, index) => `Prueba ${index + 1}`);
  const dataPoints = tasks.map(task => task.wpm); // Suponiendo que cada tarea tiene una propiedad 'wpm'

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Palabras por minuto (WPM)',
        data: dataPoints,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Pruebas',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'WPM',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ResultsChart;
