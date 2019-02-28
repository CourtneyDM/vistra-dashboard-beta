document.addEventListener("DOMContentLoaded", () => {
	let myChart = Highcharts.chart("container", {
		chart: {
			type: "bar"
		},
		title: {
			text: "My Test Chart"
		},
		xAxis: {
			title: {
				text: "Fruit eaten"
			}
		},
		series: [
			{
				name: "Courtney",
				data: [1, 0, 9]
			},
			{
				name: "Senia",
				data: [5, 7, 3]
			}
		]
	});
});

// let chart1;
// document.addEventListener("DOMContentLoaded", function() {
// 	chart1 = Highcharts.stockChart("container", {
// 		rangeSelector: {
// 			selected: 1
// 		},
// 		series: [
// 			{
// 				name: "USD to EUR",
// 				data: usdtoeur
// 			}
// 		]
// 	});
// });
