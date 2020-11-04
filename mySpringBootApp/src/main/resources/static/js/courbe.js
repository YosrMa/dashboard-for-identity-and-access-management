var ctxL = document.getElementById("lineChart");
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
    datasets: [{
        label: "Nombre de comptes dont le mot de passe a été modifié ",
        data: [65, 59, 80, 81, 56, 55, 40,30,55,90,43,66],
        backgroundColor: [
          'rgba(253, 56, 0, .2)',
        ],
        borderColor: [
          'rgba(236, 121,39, .7)',
        ],
        borderWidth: 2
      },
     
    ]
  },
  options: {
    responsive: true
  }
});