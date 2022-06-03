/*let t=['A','B', 'C', 'D']
var trace3 = {
  x: [1, 1, 1, 1, 2, 2, 2, 2],
  y: [1, 1, 1, 1, 1, 1, 1, 1],
  text:t,
  mode: 'markers',
  marker: {
    size: [1000,800,600,400,1000,800,600,400],
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    opacity: [1, 1, 1, 1],
    //setting 'sizeref' to less than 1, increases the rendered marker sizes
    sizeref: 0.02,
    sizemode: 'area'
  }

};

var data = [trace3];

var layout = {
  title: 'Marker Size and Color',
  hovermode: "closest",
  showlegend: false,
  height: 600,
  width: 1000,
   xaxis: {
          //tickformat: ".0%",
          //tickcolor: 'white',
          title: "Automation Probability",
          zeroline: false,
          showticklabels: false,
          //showline: false,
          showgrid: false,
        },
     yaxis: {
    showgrid: false,
    zeroline: false,
    //showline: false,
    showticklabels: false
  }
};

Plotly.newPlot('myDiv', data, layout);

*/



function graf(stl){
    d3.csv("https://raw.githubusercontent.com/LeiHuang-statistician/Webpages/main/Table1.csv", function(data) {
       group=data.filter(row=>row.Group===stl)
       //col=data.columns
       x=group.map(function(row){return row.x});
       y=group.map(function(row){return row.y});
       N=group.map(function(row){return row.N});
       text=group.map(function(row){return row.Text});
       size=group.map(function(row){return row.Size});
       l=group.map(function(row){return row.Group2});
       label=[...new Set(l)]
        xlab=group.map(function(row){return row.Label});
        tt=[...new Set(xlab)]
        xv=[...new Set(x)]
       console.log(x)
       console.log(y)
       console.log(N)
       console.log(label)
       console.log(xv)
       console.log(tt)
        var trace3 = {
      x: x,
      y: y,
      text :text,
      hovertemplate : "%{text}"+"<extra></extra>",
      mode: 'markers',
      marker: {
        size: size,
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
                'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
                'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
                'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        opacity: [1, 1, 1, 1],
        //setting 'sizeref' to less than 1, increases the rendered marker sizes
        sizeref: 0.007,
        sizemode: 'area'
      }

    };

    var data = [trace3];

    var layout = {
      title: {text: 'US adults with atherosclerotic cardiovascular disease',
              font:{family:'sans-serif', size:20, color: 'black'}
              },
      hovermode: "closest",
      hoverlabel: { font:{family:'sans-serif', size:16, color: 'white'}, align: 'left' },
      showlegend: false,
      height: 750,
      width: 1500,
      margin: {
              l: 0,
              r:0,
              t:100,
              b: 170
      },
       xaxis: {
              //tickformat: ".0%",
              //tickcolor: 'white',
              title: {text:label[0],
                      font :{family:'sans-serif', color:'black', size:20},
                      standoff: 650
              },
              zeroline: false,
              showticklabels: true,
              //showline: false,
              showgrid: false,
              tickmode: 'array',
              tickvals: xv,
              ticktext:tt,
              tickfont:{family:'sans-serif', color:'black', size:20}
            },
       yaxis: {
        showgrid: false,
        zeroline: false,
        //showline: false,
        showticklabels: false
      }

    };

    Plotly.newPlot('myDiv', data, layout);
    });
}

graf("All")

$( "li" ).click(function(e) {
    var stl=$(this).text()
    graf(stl)
});



/*$("#trace").click(function(){
  stl=$("#trace").text()
  graf(stl)
});





$("#tall").click(function(){
  stl="All"
  graf(stl)
});

$("#tage").click(function(){
  stl="Age"
  graf(stl)
});

$("#tgender").click(function(){
  stl="Gender"
  graf(stl)
});

$("#trace").click(function(){
  stl=$("#trace").text()
  graf(stl)
});
*/