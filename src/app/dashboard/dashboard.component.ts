import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    try {
      let elem = undefined;
      elem = document.getElementById("line_chart");
      if(elem)
        new Chart(elem.getContext('2d'), this.getChartJs('line'));
    } catch (error) {
      return;
    }
  }


  getChartJs = function (type) {
    var config = null;

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
    return config;
  }
}
