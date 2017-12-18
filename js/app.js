var lineChart = document.getElementById('lineChart');
var myLineChart = new Chart(lineChart, {
  type:'line',
  data: {
    labels: ['2014','2015', '2016','2017'],
    datasets: [
      {
        label: 'Deserción',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rbga(75, 75, 120, 0.4)',
        borderColor: 'rbga(75, 75, 120, 1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rbga(75, 75, 120, 1)',
        poinBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rbga(75, 75, 120, 1)',
        pontHoverBorderColor: 'rbga(75, 75, 120, 0.4)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [25, 32, 14, 20]
      }
    ]
  }
});

var ctx = document.getElementById("myChart");

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF4394",
                "#36A2EB",
                "#FFCE56"
            ]


        }]
};

var options = {
	cutoutPercentage:40,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

var ctx = document.getElementById("myBars");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '% técnico',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx = document.getElementById('myLines').getContext("2d");

var barStroke = ctx.createLinearGradient(700, 0, 120, 0);
barStroke.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
barStroke.addColorStop(1, 'rgba(0, 205, 194, 0.6)');

var barFill = ctx.createLinearGradient(700, 0, 120, 0);
barFill.addColorStop(0, "rgba(0, 255, 188, 0.6)");
barFill.addColorStop(1, "rgba(0, 205, 194, 0.6)");

var barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
barFillHover.addColorStop(0, "rgba(0, 255, 188, 0.8)");
barFillHover.addColorStop(1, "rgba(0, 205, 194, 0.6)");

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"],
        datasets: [{
            label: "Sprint",
            borderColor: barStroke,
			borderWidth: 1,
            fill: true,
            backgroundColor: barFill,
			hoverBackgroundColor: barFillHover,
            data: [100, 50, 60, 80, 70]
        }]
    },
    options: {
        animation: {
            easing: "easeOutQuart"
        },
        legend: {
            position: "bottom",
			display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "##555555",
                    fontStyle: "bold",
                    beginAtZero: true,
                    padding: 15,
					//display: false - remove this and commenting to display: false
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					color: "#555555",
					zeroLineColor: "#555555"
                }
            }],
            xAxes: [{
                gridLines: {
					display: false,
					color: "#555555",
					zeroLineColor: "#555555"
                },
                ticks: {
                    padding: 15,
					beginAtZero: true,
                    fontColor: "#555555",
                    fontStyle: "bold",
					maxTicksLimit: 20,
					//display: false - remove this and commenting to display: false
                }
            }]
        }
    }
});
/* * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
