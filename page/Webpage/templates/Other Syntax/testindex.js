var stock_data1 = []
stock_dps = []


const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=7LINTJ5X99QYQWST';
//'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=7LINTJ5X99QYQWST'
// 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=7LINTJ5X99QYQWST'

const dataPromise =d3.json(url);
console.log("Data Promise: ", dataPromise);

var cdata = d3.json(url).then(function(data){
 var masput=data[['Time Series (Daily)']]
 var ohlc = [];
 var volume = [];
 var date = [];
 var open = [];
 var high = [];
 var low = [];
 var close = [];
 var closendate = [];
 dataLength = data['Time Series (Daily)'],
 i = 0;
 for(var time in dataLength)
 {
   var stock_info = dataLength[time];  
   ohlc.push([        
     time,           
     Number(stock_info["1. open"]),
     Number(stock_info["2. high"]),
     Number(stock_info["3. low"]),
     Number(stock_info["4. close"])

   ]);

   volume.push([   
        time,                
       Number(stock_info["5. volume"]) 
   ]);

   date.push([
    time
   ]);
   open.push([
    Number(stock_info["1. open"])
   ]);
   high.push([
    Number(stock_info["2. high"])
   ]);
   low.push([
    Number(stock_info["3. low"])
   ]);
   close.push([
    Number(stock_info["4. close"])
   ]);
   closendate.push([
    time,
    Number(stock_info["4. close"])
   ]);
}
console.log(time)

// var close2 = new Array();
// for (let i =0; i<=close.length; i++){
//     console.log(close[i])
// }

// var date2 = new Array();
// for (let i =0; i<=date.length; i++){
//     console.log(date[i])
// }

// var open2 = new Array();
// for (let i =0; i<=open.length; i++){
//     console.log(open[i])
// }

// var high2 = new Array();
// for (let i =0; i<=high.length; i++){
//     console.log(high[i])
// }

// var low2 = new Array();
// for (let i =0; i<=low.length; i++){
//     console.log(low[i])
// }

// const rawSeries = data['Time Series (Daily)']
// const series = Object.keys(rawSeries).reverse().map(timestamp => {
//   return rawSeries[timestamp]['2. high']

// })

// const rawSeries2 = data['Time Series (Daily)']
// const series2 = Object.keys(rawSeries2).reverse().map(timestamp => {
//   return rawSeries2[timestamp]


// })
// const rawSeries3 = data['Time Series (Daily)']
// const series3 = Object.keys(rawSeries).reverse().map(timestamp => {
//   return rawSeries3[timestamp]
// })
})







  
//   var arr = Array.isArray(date)





    // var symbol = data['Meta Data']['2. Symbol']
    // var lastRefreshed = data['Meta Data']['3. Last Refreshed']
    // var lastTradePriceOnly = data['Time Series (Daily)']['4. close']
    // var lastVolume = data['Time Series (Daily)'][lastRefreshed]['5. volume']
    // console.log(lastVolume)
//     var data = { "meta" : "", "series" : ""};
// for (var strProp in apiResults) {
//     if (strProp == "Meta Data") {
//         data["meta"] = apiResults[strProp];
//     } else if (strProp ==  "Time Series (Daily)") {
//         data["series"] = apiResults[strProp];
//     } else {
//         console.error(`Cannot read data from API call! Returns: ${apiResults}`);
//     }
//     console.log(data["series"])
// }
