Highcharts.chart('linecontainer', {
    chart: {
        type: 'line'
    },
    title: {
        text: '國內 vs 國外'
    },
    subtitle: {
        text: 'Monthly Average visit customers'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: '次數'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '國內',
        data: [73,74,106,81,61,89,80,78,88,82,53,53]
    }, {
        name: '國外',
        data: [18,9,9,22,9,24,17,7,9,17,13,38]
    }]
});