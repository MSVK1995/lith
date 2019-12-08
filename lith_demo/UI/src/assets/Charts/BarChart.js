import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {

    let data = {
        labels: props.dtpoints.label_arr,
        datasets: [{
            label: "Cars",
            data: props.dtpoints.counts,
            backgroundColor: [
                'rgb(119, 213, 151)',
                'rgb(229, 225, 81)',
                'rgb(54, 162, 235)',
            ]
        }]
    }

    const y_upper_limit=Math.max(...props.dtpoints.counts)+1


    const options = { 
        maintainAspectRatio: false,
        title: {
            display: true,
            text: props.title,
            fontSize: 25
        },
        legend: {
            display: false, 
            position: 'right'
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: y_upper_limit,
                    fontSize: 15,
                    stepSize: 1
                }
            }],
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                fontSize: 15
            }
        }]
        }
     }

    return (
        <Bar
            data={data}
            width={300}
            height={400}
            options={options}
        />
    )
}

export default BarChart;
