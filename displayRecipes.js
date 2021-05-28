fetch('https://v2.jokeapi.dev/joke/Any')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("myData");
      var div = document.createElement("div");
      div.innerHTML = 'Setup: ' + data.setup + ' Delivery: ' + data.delivery;
      mainContainer.appendChild(div);
  }