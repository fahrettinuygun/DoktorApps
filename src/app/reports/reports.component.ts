import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    try {
      let elem1,elem2,elem3 = undefined;
      elem1 = document.getElementById("line_chart_1");
      elem2 = document.getElementById("line_chart_2");
      elem3 = document.getElementById("line_chart_3");
      if(elem1)
        new Chart(elem1.getContext('2d'), this.getChartJs('line'));
        new Chart(elem2.getContext('2d'), this.getChartJs('pie'));
        new Chart(elem3.getContext('2d'), this.getChartJs('pie'));
    } catch (error) {
      return;
    }
  }

  randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
  };

  getChartJs = function (type) {
    var config = null;
    let chartColors = {
      blue: "rgb(54, 162, 235)",
      green: "rgb(75, 192, 192)",
      grey: "rgb(201, 203, 207)",
      orange: "rgb(255, 159, 64)",
      purple: "rgb(153, 102, 255)",
      red: "rgb(255, 99, 132)",
      yellow: "rgb(255, 205, 86)"
    }
    if (type === 'line') {
      config = {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(0, 188, 212, 0.75)',
            backgroundColor: 'rgba(0, 188, 212, 0.3)',
            pointBorderColor: 'rgba(0, 188, 212, 0)',
            pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
            pointBorderWidth: 1
          }, {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(233, 30, 99, 0.75)',
            backgroundColor: 'rgba(233, 30, 99, 0.3)',
            pointBorderColor: 'rgba(233, 30, 99, 0)',
            pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
            pointBorderWidth: 1
          }]
        },
        options: {
          responsive: true,
          legend: false
        }
      }
    }
    else if(type === 'pie'){
      config = {
        type: 'pie',
        data: {
          datasets: [{
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue,
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
          ]
        },
        options: {
          responsive: true
        }
      };
    }
    else if(type === 'doughnut'){
      config = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              this.chartColors.red,
              this.chartColors.orange,
              this.chartColors.yellow,
              this.chartColors.green,
              this.chartColors.blue,
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
    }
    else if(type === 'bar'){
      config = {
				type: 'bar',
				data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Dataset 1',
            backgroundColor: this.chartColors.red,
            stack: 'Stack 0',
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ]
          }, {
            label: 'Dataset 2',
            backgroundColor: this.chartColors.blue,
            stack: 'Stack 0',
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ]
          }, {
            label: 'Dataset 3',
            backgroundColor: this.chartColors.green,
            stack: 'Stack 1',
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ]
          }]
    
        },
				options: {
					title: {
						display: true,
						text: 'Chart.js Bar Chart - Stacked'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			}
    }
    return config;
  }

}
