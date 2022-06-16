import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


import { Line } from 'react-chartjs-2';
// import {faker} from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position:'top',
        },

        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['2018','2019','2020','2021','2022' ];

   const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [9600,9000,10000, 10000,12000],
        }]
      }

export function Chartperso() {
    return <Line options={options} data={data}  />;
}
