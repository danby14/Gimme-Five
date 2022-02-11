import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const VotesGraph = ({ results }) => {
  const data = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
      {
        label: 'Votes',
        backgroundColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        barPercentage: 0.6,
        data: results,
      },
    ],
  };
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          scales: { y: { offset: true } },
        }}
      />
    </div>
  );
};

export default VotesGraph;
