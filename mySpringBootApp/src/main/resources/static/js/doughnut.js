  var ctxD = document.getElementById("doughnutChart");
        var myLineChart = new Chart(ctxD, {
          type: 'doughnut',
          data: {
            labels: ["super admins ", "admins"],
            datasets: [{
              data: [25,75],
              backgroundColor: ["#F7464A", "#46BFBD"],
              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
            }]
          },
          options: {
            cutoutPercentage : 80 ,
            responsive: true
          }
        });