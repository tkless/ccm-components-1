/**
 * @overview configurations of ccm component for rendering a "Highchart.js" chart
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "line": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/series-label.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "line",
    "switcher": true,
    "title": "Solar Employment Growth by Sector, 2010-2016",
    "subtitle": "Source: thesolarfoundation.com",
    "y_title": "Number of Employees",
    "point_start": 2010,
    "data": [
      {
        "name": "Installation",
        "data": [ 43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175 ]
      },
      {
        "name": "Manufacturing",
        "data": [ 24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434 ]
      },
      {
        "name": "Sales & Distribution",
        "data": [ 11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387 ]
      },
      {
        "name": "Project Development",
        "data": [ null, null, 7988, 12169, 15112, 22452, 34400, 34227 ]
      },
      {
        "name": "Other",
        "data": [ 12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111 ]
      }
    ]
  },
  "area": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "area",
    "switcher": true,
    "title": "US and USSR nuclear stockpiles",
    "subtitle": "Source: <a href=\"http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf\">thebulletin.metapress.com</a>",
    "y_title": "Nuclear weapon states",
    "tooltip": "{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
    "point_start": 1940,
    "data": [
      {
        "name": "USA",
        "data": [ null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
          1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
          27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
          26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
          22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
          10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104 ]
      },
      {
        "name": "USSR/Russia",
        "data": [ null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
          4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
          15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
          33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
          35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000 ]
      }
    ]
  },
  "bar": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "bar",
    "switcher": true,
    "title": "Historic World Population by Region",
    "subtitle": "Source: <a href=\"https://en.wikipedia.org/wiki/World_population\">Wikipedia.org</a>",
    "categories": [ "Africa", "America", "Asia", "Europe", "Oceania" ],
    "y_title": "Population (millions)",
    "tooltip": "{point.y} millions",
    "data": [
      {
        "name": "Year 1800",
        "data": [ 107, 31, 635, 203, 2 ]
      },
      {
        "name": "Year 1900",
        "data": [ 133, 156, 947, 408, 6 ]
      },
      {
        "name": "Year 2012",
        "data": [ 1052, 954, 4250, 740, 38 ]
      }
    ]
  },
  "column": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "column",
    "switcher": true,
    "title": "Monthly Average Rainfall",
    "subtitle": "Source: WorldClimate.com",
    "categories": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    "y_title": "Rainfall (mm)",
    "tooltip": "{series.name}: {point.y:.1f} mm",
    "data": [
      {
        "name": "Tokyo",
        "data": [ 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4 ]
      },
      {
        "name": "New York",
        "data": [ 83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3 ]
      },
      {
        "name": "London",
        "data": [ 48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2 ]
      },
      {
        "name": "Berlin",
        "data": [ 42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1 ]
      }
    ]
  },
  "pie": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "pie",
    "switcher": true,
    "title": "Browser market shares January, 2015 to May, 2015",
    "tooltip": "{series.name}: <b>{point.percentage:.1f}%</b>",
    "tooltip_label": "Brands",
    "data_label": "<b>{point.name}</b>: {point.percentage:.1f} %",
    "data": [
      {
        "name": "IE",
        "y": 56.33
      },
      {
        "name": "Chrome",
        "y": 24.03
      },
      {
        "name": "Firefox",
        "y": 10.38
      },
      {
        "name": "Safari",
        "y": 4.77
      },
      {
        "name": "Opera",
        "y": 0.91
      },
      {
        "name": "Other",
        "y": 0.2
      }
    ]
  },
  "pie-semi-circle": {
    "css": [ "ccm.load", "../highchart/resources/default.css" ],
    "libs": [ "ccm.load", [ "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "chart": "pie-semi-circle",
    "switcher": true,
    "title": "Browser<br>shares<br>2015",
    "tooltip": "{series.name}: <b>{point.percentage:.1f}%</b>",
    "tooltip_label": "Browser share",
    "data": [
      [ "Firefox", 10.38 ],
      [ "IE",      56.33 ],
      [ "Chrome",  24.03 ],
      [ "Safari",   4.77 ],
      [ "Opera",    0.91 ],
      {
        "name": "Proprietary or Undetectable",
        "y": 0.2,
        "dataLabels": {
          "enabled": false
        }
      }
    ]
  },
  "spiderweb": {
    "libs": [ "ccm.load", [ "https://code.jquery.com/jquery-3.1.1.min.js", "https://code.highcharts.com/highcharts.js", "https://code.highcharts.com/highcharts-more.js", "https://code.highcharts.com/modules/exporting.js" ] ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ],
    "settings": {
      "chart": {
        "polar": true,
        "type": "line"
      },
      "title": {
        "text": "Budget vs. Spending",
        "x": -80
      },
      "pane": {
        "size": "80%"
      },
      "xAxis": {
        "categories": [ "Sales", "Marketing", "Development", "Customer Support", "Information Technology", "Administration" ],
        "tickmarkPlacement": "on",
        "lineWidth": 0
      },
      "yAxis": {
        "gridLineInterpolation": "polygon",
        "lineWidth": 0,
        "min": 0
      },
      "tooltip": {
        "shared": true,
        "pointFormat": "<span style='color:{series.color}'>{series.name}: <b>${point.y:,.0f}</b><br/>"
      },
      "legend": {
        "align": "right",
        "verticalAlign": "top",
        "y": 70,
        "layout": "vertical"
      },
      "series": [
        {
          "name": "Allocated Budget",
          "data": [ 43000, 19000, 60000, 35000, 17000, 10000 ],
          "pointPlacement": "on"
        },
        {
          "name": "Actual Spending",
          "data": [ 50000, 39000, 42000, 31000, 26000, 14000 ],
          "pointPlacement": "on"
        }
      ]
    },
    "style": "min-width: 400px; max-width: 600px; height: 400px; margin: 0 auto"
  }
};