import React, { Component } from 'react';
import Chart from 'chart.js'

class MyMetaAbility extends Component {

  componentDidMount() {
    let chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };
    let color = Chart.helpers.color;
    let config = {
      type: 'radar',
      data: {
        labels: ['学 习 能 力', '社 交 能 力', '抗 压 能 力', '执 行 力', '创 新 能 力', '鉴 赏 能 力'],
        datasets: [{
          label: '个人素质能力',
          backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
          borderColor: chartColors.red,
          pointBackgroundColor: chartColors.red,
          data: [90, 80, 80, 80, 75, 70]
        }]
      },
      options: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Radar Chart'
        },
        scale: {
          ticks: {
            min: 0,
            max: 100
          }
        }
      }
    };

    window.myMetaAbility = new Chart(document.getElementById('my-meta-ability'), config);
  }

  render() {
    return (
      <article className="my-meta-ability-container">
        <canvas id="my-meta-ability"></canvas>
      </article>
    );
  }
}

export default MyMetaAbility;
