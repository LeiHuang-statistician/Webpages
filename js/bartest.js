function graf(stl){
    d3.csv("https://raw.githubusercontent.com/LeiHuang-statistician/Webpages/main/Table2.csv", function(data) {
       color=['rgb(93, 164, 214)', 'rgb(255, 144, 14)','rgb(44, 160, 101)', 'rgb(255, 65, 54)']
       group=data.filter(row=>row.Group===stl)
       p=group.map(function(row){return row.P1});
       lab=group.map(function(row){return row.Label});
       tt=[...new Set(lab)]
       nl=group.map(function(row){return row.LDL});
       nls=[...new Set(nl)]
       //name=nls.split(",") can not use name as variable
       til=group.map(function(row){return row.Title});
       title=[...new Set(til)]
       xtil=group.map(function(row){return row.xtitle});
       xtitle=[...new Set(xtil)]
       y0=group.filter(row=>row.LDL===nls[0]).map(function(row){return row.N})
       y1=group.filter(row=>row.LDL===nls[1]).map(function(row){return row.N})
       y2=group.filter(row=>row.LDL===nls[2]).map(function(row){return row.N})
       y3=group.filter(row=>row.LDL===nls[3]).map(function(row){return row.N})
       text0=group.filter(row=>row.LDL===nls[0]).map(function(row){return parseFloat(row.P1).toFixed(1)+"%"})
       text1=group.filter(row=>row.LDL===nls[1]).map(function(row){return parseFloat(row.P1).toFixed(1)+"%"})
       text2=group.filter(row=>row.LDL===nls[2]).map(function(row){return parseFloat(row.P1).toFixed(1)+"%"})
       text3=group.filter(row=>row.LDL===nls[3]).map(function(row){return parseFloat(row.P1).toFixed(1)+"%"})
       atotal=group.map(function(row){return row.T});
       tot=[...new Set(atotal)].map(function(row){return parseFloat(row).toFixed(1)})
       //tmax=Math.max(...tot)/13;
       atxt=Array.from(tot, x=>`${x} Million`)
       ay=Array.from(tot, x=>x*1.1)
       var items = ay.map((y, index) => {
          return {
            y: y,
            x: tt[index],
            xref: 'x',
            yref: 'y',
            text: atxt[index],
            showarrow: false,
            font: {size:18}
          }
        });



      var trace0 = {
      x: tt,
      y: y0,
      name: nls[0],
      type: 'bar',
      text: text0,
      insidetextanchor: "middle",
      legendgroup: "group",
      legendgrouptitle: {text:"LDL-C, mg/dL", font: {color: 'black', size: 18}},
      textposition: 'auto',
      textfont: {size: 18, color: 'white'},
      marker:{color: color[0]}
    };

        var trace1 = {
      x: tt,
      y: y1,
      name: nls[1],
      type: 'bar',
      text: text1,
      insidetextanchor: "middle",
      legendgroup: "group",
      legendgrouptitle: {text:"LDL-C, mg/dL", font: {color: 'black', size: 18}},
      textposition: 'auto',
      textfont: {size: 18, color: 'white'},
      marker:{color: color[1]}
    };

           var trace2 = {
      x: tt,
      y: y2,
      name: nls[2],
      text: text2,
      type: 'bar',
      insidetextanchor: "middle",
      legendgroup: "group",
      legendgrouptitle: {text:"LDL-C, mg/dL", font: {color: 'black', size: 18}},
      textposition: 'auto',
      textfont: {size: 18, color: 'white'},
      marker:{color: color[2]}
    };


      var trace3 = {
      x: tt,
      y: y3,
      name: nls[3],
      type: 'bar',
      text: text3,
      insidetextanchor: "middle",
      legendgroup: "group",
      legendgrouptitle: {text:"LDL-C, mg/dL", font: {color: 'black', size: 18}},
      textposition: 'auto',
      textfont: {size: 18, color: 'white'},
      marker:{color: color[3]}
    };


    var data = [trace0, trace1, trace2, trace3];

    var layout = {barmode: 'stack',
      title: {text: title[0],
              font:{family:'sans-serif', size:20, color: 'black'}
              },
      hovermode: "closest",
      hoverlabel: { font:{family:'sans-serif', size:16, color: 'white'}, align: 'left' },
      showlegend: true,
      height: 750,
      width: 1500,


       xaxis: {
              //tickformat: ".0%",
              //tickcolor: 'white',
              title: {text: xtitle[0],
                      font :{family:'sans-serif', color:'black', size:20},
                      standoff: 200
              },
              zeroline: false,
              showticklabels: true,
              //showline: false,
              showgrid: false,
              tickmode: 'array',
              tickfont:{family:'sans-serif', color:'black', size:20}
            },
       yaxis: {
        showgrid: false,
        zeroline: false,
        //showline: false,
        showticklabels: false
      },
      legend: {font:{size:18}},

      annotations: items

    };


Plotly.newPlot('myDiv', data, layout);
    });
}

graf("Overall population")

$( "li" ).click(function(e) {
    var stl=$(this).text()
    graf(stl)
});