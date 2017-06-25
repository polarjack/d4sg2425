Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '使用次數'
  },
  subtitle: {
    text: 'MW && PW系列'
  },
  xAxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '個數',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'MW',
    data: [16, 10, 8, 3, 5, 4, 4, 1, 3, 3, 3, 4, 2, 2, 1, 2, 4, 1, 3, 3, 1, 3, 2, 1, 1, 0, 0, 1]
  }, {
    name: 'PW',
    data: [6 , 1 , 0, 4, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }]
});
///days part

Highcharts.chart('dayscontainer', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '使用天數'
  },
  subtitle: {
    text: 'MW & PW 系列'
  },
  xAxis: {
    categories: ['0~15',
      '15~30',
      '30~45',
      '45~60',
      '60~75',
      '75~90',
      '90~105',
      '105~120',
      '120~135',
      '135~150',
      '150~165',
      '165~180',
      '180~195',
      '195~210',
      '210~225',
      '225~240',
      '240~255',
      '255~270',
      '270~285',
      '285~300',
      '300~315',
      '315~330',
      '330~345',
      '345~360'
    ],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '天數',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
      name: 'MW_DAYS',
      data: [16, 12, 11, 4, 6, 4, 3, 2, 5, 5, 5, 4, 3, 2, 0, 1, 0, 5, 0, 1, 0, 0, 2, 0]
    },
    {
      name: 'PW_DAYS',
      data: [5, 4, 1, 0, 1, 0, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
});