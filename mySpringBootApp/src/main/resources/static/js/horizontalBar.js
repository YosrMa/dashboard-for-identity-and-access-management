new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["niveau très sécurisé", "niveau général", "niveau de faible sécurité"],
      datasets: [
        {
          label: "Nombre de personne",
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          data: [25,75,150]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Nombre d’identités dans chaque groupe'
      },
      responsive: true,
    }
});