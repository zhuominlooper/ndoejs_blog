//首页的统计图
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['每周']
    },
    xAxis: {
        data: ["生活", "理想", "技术", "趣事"]
    },
    yAxis: {},
    series: [{
        name: '每周',
        type: 'bar',
        data: [5, 20, 88, 10]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//首页的轮播图

$(function () {
    $("#myCarousel").carousel('cycle');
});