fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=WSWHDLRSUMO2PIET')
  .then((response) => response.json())
  .then((data) => console.log(data));