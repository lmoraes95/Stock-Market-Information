const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput')

if(storageInput) {
  text.textContent = storedInput
}

storageInput.addEventListener('input', letter =>{
  text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)

console.log(localStorage)





var symbol = text.textContent
var symbol2 = 'SPY';
var interval = '5min'



const dailyurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symbol+'&outputsize=full&apikey=7LINTJ5X99QYQWST';
const intradayurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval='+interval+'&outputsize=full&apikey=7LINTJ5X99QYQWST'
const seconddailyurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symbol2+'&outputsize=full&apikey=7LINTJ5X99QYQWST';
const weeklyurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+symbol+'&outputsize=full&apikey=7LINTJ5X99QYQWST';
const monthlyurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+symbol+'&outputsize=full&apikey=7LINTJ5X99QYQWST';
const overviewurl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+symbol+'&apikey=7LINTJ5X99QYQWST';
const earningsurl = 'https://www.alphavantage.co/query?function=EARNINGS&symbol='+symbol+'&apikey=7LINTJ5X99QYQWST'
const cpiurl = 'https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=7LINTJ5X99QYQWST';
const inflationurl = 'https://www.alphavantage.co/query?function=INFLATION&apikey=7LINTJ5X99QYQWST';
const inflationexpecturl = 'https://www.alphavantage.co/query?function=INFLATION_EXPECTATION&apikey=7LINTJ5X99QYQWST';
const vwapurl = 'https://www.alphavantage.co/query?function=VWAP&symbol='+symbol+'&outputsize=ful&interval=60min&apikey=7LINTJ5X99QYQWST';
const emaurl = 'https://www.alphavantage.co/query?function=EMA&symbol='+symbol+'&interval=daily&time_period=10&series_type=open&apikey=7LINTJ5X99QYQWST'
const sentimenturl = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=7LINTJ5X99QYQWST%27'
const unemployurl = 'https://www.alphavantage.co/query?function=UNEMPLOYMENT&apikey=7LINTJ5X99QYQWST%27'
const gdpurl = 'https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=7LINTJ5X99QYQWST%27'
const yield = 'https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=7LINTJ5X99QYQWST%27'



const dataPromise =d3.json(dailyurl);
const dataPromise2 =d3.json(seconddailyurl);
const dataPromise3 =d3.json(weeklyurl);
const dataPromise4 =d3.json(monthlyurl);
const dataPromise5 =d3.json(overviewurl);
const dataPromise6 =d3.json(earningsurl);
const dataPromise7 =d3.json(cpiurl);
const dataPromise8 =d3.json(inflationurl);
const dataPromise9 =d3.json(inflationexpecturl);
const dataPromise0 =d3.json(vwapurl);
const dataPromise11 =d3.json(emaurl);
const dataPromise12 =d3.json(intradayurl);
const dataPromise13 =d3.json(sentimenturl);
const dataPromise14 =d3.json(unemployurl);
const dataPromise15 =d3.json(gdpurl);
const dataPromise16 =d3.json(yield);


if (text.textContent == 0 ) {

  // fetch('sample.json')
  // .then(Response => Response.json())
  // .then(sample=>{
  //   console.log(sample);
  
  
  // const para = document.createElement("p");
  //   const node = document.createTextNode(sample);
  //   para.appendChild(node);
  //   const element = document.getElementById("div1");
  //   element.appendChild(para);
  // })
  
  document.getElementById('div1').style.display = "none"
  document.getElementById('div2').style.display = "none"
  document.getElementById('div3').style.display = "none"
  document.getElementById('div4').style.display = "none"
  document.getElementById('div5').style.display = "none"

 
  var inflation = d3.json(inflationurl).then(function(inflationdata){


    const inflationseries = inflationdata["data"]
    const inflationdate = Object.keys(inflationseries).reverse().map(timestamp => {
      return inflationseries[timestamp]["date"]
    
     })
  
     const inflationseries2 = inflationdata["data"]
    const inflationvalue = Object.keys(inflationseries2).reverse().map(timestamp => {
      return inflationseries2[timestamp]["value"]
    
     })
    
  var inflationexpect = d3.json(inflationexpecturl).then(function(inflationexpectdata){


    const inflationexpectseries = inflationexpectdata["data"]
    const inflationexpectdate = Object.keys(inflationexpectseries).reverse().map(timestamp => {
      return inflationexpectseries[timestamp]["date"]
    
     })
  
     const inflationexpectseries2 = inflationexpectdata["data"]
    const inflationexpectvalue = Object.keys(inflationexpectseries2).reverse().map(timestamp => {
      return inflationexpectseries2[timestamp]["value"]
    
     })


     


     //inflation chart   
     var trace1 = {
      x: inflationexpectdate,
      y: inflationexpectvalue,
      name: 'Inflation(Expected)',
      marker: {
        color: 'rgb(164, 194, 244)',
        size: 12,
        line: {
          color: 'white',
          width: 0.5
        }
      },
      type: 'scatter'
    };
    
    var trace2 = {
      x: inflationdate,
      y: inflationvalue,
      name: 'Inflation(Reported)',
      marker: {
        color: 'rgb(255, 217, 102)',
        size: 12
      },
      type: 'scatter'
    };
  
  
    
    var data = [trace1, trace2];
    
    var layout = {
      title: 'Reported vs. Expected Inflation',
      xaxis: {
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Inflation %',
        showline: true
      }
    };

    var graph = document.getElementById('graph');
    


    Plotly.newPlot(graph, data, layout);
   });


  })

  var cpi = d3.json(cpiurl).then(function(cpidata){


    const cpiSeries = cpidata["data"]
    const cpidate = Object.keys(cpiSeries).reverse().map(timestamp => {
      return cpiSeries[timestamp]["date"]
    
     })
  
     const cpiSeries2 = cpidata["data"]
    const cpivalue = Object.keys(cpiSeries2).reverse().map(timestamp => {
      return cpiSeries2[timestamp]["value"]
    
     })

    var trace2 = {
      x: cpidate,
      y: cpivalue,
      name: 'Inflation(Reported)',
      marker: {
        color: 'rgb(255, 217, 102)',
        size: 12
      },
      type: 'scatter'
    };
  
  
    
    var data = [trace2];
    
    var layout = {
      title: 'Consumer Price Index',
      xaxis: {
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'CPI',
        showline: false
      }
    };

    var graph = document.getElementById('graph2');
    


    Plotly.newPlot(graph, data, layout);
  
    })

    
}


     
else {

  var maindata = d3.json(dailyurl).then(function(data){

    //volume series
      const volumeSeries = data['Time Series (Daily)']
      const volseries = Object.keys(volumeSeries).reverse().map(timestamp => {
    return volumeSeries[timestamp]["5. volume"]
  })
  
  
  //building date array series
  const dateSeries = data['Time Series (Daily)']
  const dates = Object.keys(dateSeries).reverse().map(timestamp => {
    return [timestamp]
    
     })
     //date array series
     const dateArray = dates.flat()
  
  
  //high series
  const highSeries = data['Time Series (Daily)']
  const high = Object.keys(highSeries).reverse().map(timestamp => {
    return highSeries[timestamp]['2. high']
  
  })
  
  //close series
  const closeSeries= data['Time Series (Daily)']
  const close = Object.keys(closeSeries).reverse().map(timestamp => {
    return closeSeries[timestamp]["4. close"]
  
  })
  
  //low series
  const lowSeries = data['Time Series (Daily)']
  const low = Object.keys(lowSeries).reverse().map(timestamp => {
    return lowSeries[timestamp]["3. low"]
  
  })
  
  //open series
  const openSeries = data['Time Series (Daily)']
  const open = Object.keys(openSeries).reverse().map(timestamp => {
    return openSeries[timestamp]["1. open"]
  
  })

  var emadata = d3.json(emaurl).then(function(data4){

    const emaSeries = data4["Technical Analysis: EMA"]
  const ema = Object.keys(emaSeries).reverse().map(timestamp => {
  return emaSeries[timestamp]["EMA"]
  
  })
  
    const emadateSeries = data4["Technical Analysis: EMA"]
    const emadate = Object.keys(emadateSeries).reverse().map(timestamp => {
    return [timestamp]
    
     })
  
     var emaarray = emadate.flat()

     var secondarydata = d3.json(seconddailyurl).then(function(data2){

      const secondcloseSeries = data2['Time Series (Daily)']
      const close2 = Object.keys(secondcloseSeries).reverse().map(timestamp => {
      return secondcloseSeries[timestamp]["4. close"]
    
    })
    
      const dateSeries2 = data2['Time Series (Daily)']
      const dates2 = Object.keys(dateSeries2).reverse().map(timestamp => {
      return [timestamp]
      
       })
       //date array series
       const dateArray2 = dates2.flat()

       var Primary = {
        x: dateArray,
        y: close,
        name: symbol,
        type: 'scatter'
      };
    
      var Secondary = {
        x: dateArray2,
        y: close2,
        name: symbol2,
        type: 'scatter'
      };
    
      var layout = {
        title: 'Historical Adjusted Close',
      };
    
    
    
      
      var ddata = [ Primary, Secondary];
      
      Plotly.newPlot('graph2', ddata, layout);
  
   
  var emaline = {
    x: emaarray,
    y: ema,
    name: 'EMA',
    type: 'scatter'
  };
  
  
  //primary candlestick chart
    var trace1 = {
    
      x: dateArray, 
      
      close: close, 
      
      decreasing: {line: {color: 'red'}}, 
      
      high: high, 
      
      increasing: {line: {color: 'green'}}, 
      
      line: {color: 'rgba(31,119,180,1)'}, 
      
      low: low, 
      
      open: open, 
      
      type: 'candlestick', 
      xaxis: 'x', 
      yaxis: 'y',
      name: 'Historical Data'
  
  
  
    };
  
    
    var candledata = [trace1, emaline];
    
    var layout = {
      dragmode: 'zoom', 
      margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
      }, 
      showlegend: true, 
      xaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: [], 
        rangeslider: {range: []}, 
        title: symbol, 
        type: 'date'
      }, 
      yaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: [], 
        type: 'linear'
      }
    };
    
    Plotly.newPlot('main-graph', candledata, layout);
   })
  
 //daily and low prices chart 
var Primary = {
  x: dateArray,
  y: low,
  name: 'Low of Day',
  type: 'scatter'
};

var Secondary = {
  x: dateArray,
  y: high,
  name: 'High of Day',
  type: 'scatter'
};

var layout = {
  title: 'Daily High and Low Prices',
};




var ddata = [ Primary, Secondary];

Plotly.newPlot('graph', ddata, layout);


var earnings = d3.json(earningsurl).then(function(earningsdata){


  const earningsseries = earningsdata["quarterlyEarnings"]
  const earningsdate = Object.keys(earningsseries).reverse().map(timestamp => {
    return earningsseries[timestamp]["reportedDate"]
  
   })


   const earningseries2 = earningsdata["quarterlyEarnings"]
   const earningseps = Object.keys(earningseries2).reverse().map(timestamp => {
   return earningseries2[timestamp]["reportedEPS"]
   
   })

   const earningseries3 = earningsdata["quarterlyEarnings"]
   const earningseps3 = Object.keys(earningseries3).reverse().map(timestamp => {
   return earningseries3[timestamp]["estimatedEPS"]
   
   })
   

 //earnings vs expected chart
   var trace1 = {
    x: earningsdate,
    y: earningseps,
    mode: 'markers',
    name: 'Reported EPS',
    marker: {
      color: 'rgb(164, 194, 244)',
      size: 12,
      line: {
        color: 'white',
        width: 0.5
      }
    },
    type: 'scatter'
  };
  
  var trace2 = {
    x: earningsdate,
    y: earningseps3,
    mode: 'markers',
    name: 'Estimated EPS',
    marker: {
      color: 'rgb(255, 217, 102)',
      size: 12
    },
    type: 'scatter'
  };


  
  var data = [trace1, trace2];
  
  var layout = {
    title: 'Reported vs Estimated EPS',
    xaxis: {
      title: 'Date',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Earnings',
      showline: false
    }
  };
  
  Plotly.newPlot('graph3', data, layout);
 })

 Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
//min value of array
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


// console.log(volseries.max())
// console.log(volseries.min())

//average function

  let sum = volseries.reduce((a,b)=>a+b);
 let count = volseries.filter((x) => x.length).length;
 let avg = sum/count;

   //overview variables to plot on website
   var overview = d3.json(overviewurl).then(function(overdata){
    var weekhigh = overdata['52WeekHigh']
    var weeklow = overdata['52WeekLow']
    var description = overdata["Description"]
    var targetprice = overdata["AnalystTargetPrice"]
    var marketcap = overdata["MarketCapitalization"]


    const para = document.createElement("p");
    const node = document.createTextNode('52 Week High:'+weekhigh);
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
   

    const para2 = document.createElement("p");
    const node2 = document.createTextNode('52 Week Low:'+weeklow);
    para2.appendChild(node2);
    const element2 = document.getElementById("div2");
    element2.appendChild(para2);

    const para1 = document.createElement("p");
    const node1 = document.createTextNode(description);
    para1.appendChild(node1);
    const element1 = document.getElementById("div3");
    element1.appendChild(para1);

    const para3 = document.createElement("p");
    const node3 = document.createTextNode("Analyst Target Price:"+targetprice);
    para3.appendChild(node3);
    const element3 = document.getElementById("div4");
    element3.appendChild(para3);

    const para4 = document.createElement("p");
    const node4 = document.createTextNode("Market Cap:"+marketcap);
    para4.appendChild(node4);
    const element4 = document.getElementById("div5");
    element4.appendChild(para4);

    })



})})}
