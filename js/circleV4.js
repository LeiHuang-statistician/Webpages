



function graf(stl){
    d3.csv("https://raw.githubusercontent.com/LeiHuang-statistician/Webpages/main/Table1.csv", function(data) {
        wid = 1200
  switch (stl) {
  case "Age":
    wid=1500;
    break;
  case "Race":
     wid = 1500;
    break;
}
       group=data.filter(row=>row.Group===stl)
       //col=data.columns
      x=group.map(function(row){return row.x});
       y=group.map(function(row){return row.y});
       N=group.map(function(row){return row.N});
       P=group.map(function(row){return row.P});
       T1=group.map(function(row){return row.T1});
       T2=group.map(function(row){return row.T2});
       text=group.map(function(row){return row.Text});
       size=group.map(function(row){return row.Size});
       l=group.map(function(row){return row.Group2});
       label=[...new Set(l)]
        xlab=group.map(function(row){return row.Label});
        tt=[...new Set(xlab)]
        xv=[...new Set(x)]

        var trace1 = {
      x: x,
      y: y,
      text :text,
      showlegend: false,
      hovertemplate : "%{text}"+"<extra></extra>",
      mode: 'markers',
      //name: 'first legend group',
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

    var data = [trace1];

    var layout = {
      title: {text: 'US adults with atherosclerotic cardiovascular disease',
              font:{family:'sans-serif', size:20, color: 'black'}
              },
      hovermode: "closest",
      hoverlabel: { font:{family:'sans-serif', size:16, color: 'white'}, align: 'left' },
      //showlegend: false,
      height: 750,
      width: wid,
      margin: {
              l: 0,
              r:0,
              t:100,
              b: 280
      },
       xaxis: {
              //tickformat: ".0%",
              //tickcolor: 'white',
//               title: {text:label[0],
//               font :{family:'sans-serif', color:'black', size:20},
//               standoff: 650
//              },
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
      },

    };

    Plotly.newPlot('myDiv', data, layout);

  for (let i=0;i<4; i++){
     s=i*4;
    $("div .one").eq(i).html(N[s]+" "+T1[s]+P[s]+T2[s]);
    $("div .two").eq(i).html(N[s+1]+" "+T1[s+1]+"<br>"+P[s+1]+T2[s+1]);
    $("div .three").eq(i).html(N[s+2]+" "+T1[s+2]+"<br>"+P[s+2]+T2[s+2]);
    $("div .four").eq(i).html(N[s+3]+" "+T1[s+3]+"<br>"+P[s+3]+T2[s+3]);
  }


  switch (stl) {
  case "All":
  //$('#cols').attr('style','top: 120px');
  $('#text1').attr('style','margin-left: 750px; margin-right: 70px;');
  $('#text2').attr('style','display: none');
  $('#text3').attr('style','display: none');
  $('#text4').attr('style','display: none');

    break;
  case "Age":
  $('#text1').attr('style','margin-left: 360px; margin-right: 30px;');
  $('#text2').attr('style','margin-right: 90px;');
  $('#text3').attr('style','margin-right: 130px;');
  $('#text4').attr('style','display: show;');
    break;

  case "Race":
  $('#text1').attr('style','margin-left: 420px; margin-right: 300px;');
  $('#text2').attr('style','margin-right: 0px;');
  $('#text3').attr('style','margin-right: 0px;');
  $('#text4').attr('style','display: show');
  break;


   case "Smoking":
   $('#text1').attr('style','margin-left: 420px; margin-right: 520px;');
   $('#text2').attr('style','margin-right: 200px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

   case "Gender":
   $('#text1').attr('style','margin-left: 400px; margin-right: 400px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

   case "Diabetes":
   $('#text1').attr('style','margin-left: 420px; margin-right: 460px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

     case "Hypertension":
   $('#text1').attr('style','margin-left: 340px; margin-right: 480px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

       case "CKD":
   $('#text1').attr('style','margin-left: 430px; margin-right: 440px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

        case "Heart Failure":
   $('#text1').attr('style','margin-left: 420px; margin-right: 500px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

    case "Reason for very-high risk":
   $('#cols').attr('style','top: 580px');
  $('#text1').attr('style','margin-left: 330px; margin-right: 150px;');
  $('#text2').attr('style','margin-right: 150px;');
  $('#text3').attr('style','margin-right: 30px;');
  $('#text4').attr('style','display: none;');
  break;

    case "Stain use":
  $('#text1').attr('style','margin-left: 500px; margin-right: 130px;');
  $('#text2').attr('style','margin-right: 150px;');
  $('#text3').attr('style','margin-right: 30px;');
  $('#text4').attr('style','display: none;');
  break;

        case "Ezetimibe or PCSK9":
         $('#cols').attr('style','top: 580px');
   $('#text1').attr('style','margin-left: 420px; margin-right: 550px;');
   $('#text2').attr('style','margin-right: 220px;');
   $('#text3').attr('style','display: none;');
   $('#text4').attr('style','display: none;');
   break;

    }


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