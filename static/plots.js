var mydata = fetch("data.json")
  .then(response => response.json())
  .then(json => console.log(json));

var stockdata= JSON.stringify(mydata);
var dataset = JSON.parse(stockdata);
  

//

let sortestimate = data.sort((a, b) => b.estimate - a.estimate);

//
slicedData = sortestimate.slice(3, 50);

// 
reversedData = slicedData.reverse();

// 
let trace1 = {
  x: reversedData.map(object => object.estimate),
  y: reversedData.map(object => object.symbol),
  text: reversedData.map(object => object.reportDate),
  name: "symbol",
  mode: 'markers',
  marker: {
            color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
            'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            size: reversedData.map(object => object.estimate),
            }
};


// 
let traceData = [trace1];

// 
let layout = {
  title: "Top Stock earning estimate",
  margin: {
  showlegend: false,
  height: 2000,
  width: 2000
  }
};

// 
Plotly.newPlot("plot", traceData, layout);

