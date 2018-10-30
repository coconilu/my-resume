import React, { Component } from 'react';
import Chart from 'chart.js'

class MyAbility extends Component {

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

    let color = Chart.helpers.color
    let chartGreenWithAlpha = color(chartColors.green).alpha(0.5).rgbString()
    let chartBlueWithAlpha = color(chartColors.blue).alpha(0.5).rgbString()
    let chartGreen = chartColors.green
    let chartBlue = chartColors.blue
    let ctx = document.getElementById('my-ability').getContext('2d')

    let myAbility = {
      labels: ['HTML \\ CSS \\ JavaScript', 'NodeJS \\ Express \\ Koa', 'VueJS \\ React', 'TypeScript', 'Jest', 'Webpack \\ Babel', 'Git \\ GitHub', 'GraphQL'],
      datasets: [{
        label: '专业技能熟练指数',
        backgroundColor: [chartGreenWithAlpha, chartGreenWithAlpha, chartGreenWithAlpha, chartGreenWithAlpha, chartGreenWithAlpha, chartBlueWithAlpha, chartBlueWithAlpha, chartBlueWithAlpha],
        borderColor: [chartGreen, chartGreen, chartGreen, chartGreen, chartGreen, chartBlue, chartBlue, chartBlue],
        borderWidth: 1,
        data: [90, 85, 85, 70, 70, 60, 65, 70]
      }]
    }
    window.myAbilityCanvas = new Chart(ctx, {
      type: 'horizontalBar',
      data: myAbility,
      options: {
        elements: {
          rectangle: {
            borderWidth: 2,
          }
        },
        responsive: true,
        legend: {
          display: false,
          position: 'bottom',
        },
        title: {
          display: false,
          text: '专业技能评估'
        },
        scales: {
          xAxes: [{
            ticks: {
              min: 0,
              max: 100
            }
          }]
        }
      }
    })
  }

  render() {
    return (
      <article className="my-ability-container">
        <canvas id="my-ability"></canvas>
      </article>
    );
  }
}

export default MyAbility;
