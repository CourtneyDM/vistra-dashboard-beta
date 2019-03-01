document.addEventListener("DOMContentLoaded", () => {
	let chart1 = Highcharts.chart("chart1", {
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

	let chart2 = Highcharts.chart("chart2", {
		chart: {
			type: "bar"
		},
		title: {
			text: "Net Scheduled Interchange - 5 Minute Interval"
		},
		xAxis: {
			title: {
				text: "Instance"
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

	let chart3 = Highcharts.chart("chart3", {
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

	let chart4 = Highcharts.chart("chart4", {
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