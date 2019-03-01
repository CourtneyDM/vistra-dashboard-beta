document.addEventListener("DOMContentLoaded", () => {
	let chart1 = Highcharts.chart("chart1", {
		chart: {
			type: "bar"
		},
		title: {
			text: "Fuel"
		},
		xAxis: {
			title: {
				text: "Fuel Type"
			}
		},
		series: [
			{
				name: "Coal",
				data: [38671]
			},
			{
				name: "Natural Gas",
				data: [21876]
			},
			{
				name: "Nuclear",
				data: [21876]
			},
			{
				name: "Wind",
				data: [1536]
			},
			{
				name: "Other",
				data: [1508]
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
