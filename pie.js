// Create the chart
Highcharts.chart('container1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '使用者身份--使用目的'
    },
    subtitle: {
        text: '樞紐分析'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}次'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '老人',
            y: 528,
            drilldown: 'old'
        }, {
            name: '一般使用者',
            y: 396,
            drilldown: 'nor'
        }, {
            name: '身心障礙者',
            y: 112,
            drilldown: 'dis'
        }]
    }],
    drilldown: {
        series: [{
            name: '使用目的',
            id: 'nor',
            data: [
                ['休閒旅遊', 315],
                ['生病/退化', 121],
                ['臨時受傷', 53],
                ['其他', 20],
                ['試用輔具/體驗學習', 12],
                ['暫代輔具', 7]
            ]
        },{
            name: '使用目的',
            id: 'dis',
            data: [
                ['臨時受傷', 209],
                ['休閒旅遊', 97],
                ['其他', 57],
                ['生病/退化', 21],
                ['試用輔具/體驗學習', 9],
                ['暫代輔具', 3],
            ]
        },{
            name: '使用目的',
            id: 'old',
            data: [
                ['休閒旅遊', 78],
                ['其他', 11],
                ['暫代輔具', 10],
                ['試用輔具/體驗學習', 6],
                ['臨時受傷', 5],
                ['生病/退化', 2],
            ]
        },
        ]
    }
});


// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '使用者國籍--使用目的'
    },
    subtitle: {
        text: '樞紐分析'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}次'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '國內',
            y: 881,
            drilldown: 'in'
        }, {
            name: '國外',
            y: 177,
            drilldown: 'out'
        }]
    }],
    drilldown: {
        series: [{
            name: '使用目的',
            id: 'in',
            data: [
                ['休閒旅遊', 368],
                ['臨時受傷', 240],
                ['其他', 93],
                ['試用輔具/體驗學習', 26],
                ['暫代輔具', 18]
            ]
        },{
            name: '使用目的',
            id: 'out',
            data: [
                ['休閒旅遊', 131],
                ['臨時受傷', 27],
                ['生病/退化', 9],
                ['其他', 7],
                ['暫代輔具', 2],
                ['試用輔具/體驗學習', 1],
            ]
        }]
    }
});
