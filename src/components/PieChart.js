import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export const PieChart = () => {
	const [chartData, setChartData] = useState({
		data: {
			labels: ['HTML', 'CSS', 'Javascript', 'Project One', 'Node.js', 'ES6', 'mySQL', 'MVC', "Full-Stack", "Project Two", "MongoDB", "Progressive Web Apps", "React", 'Locked'],
			datasets: [
				{
					label: 'Topics',
					backgroundColor: ['#ff9100', '#008cff', '#ffe600', '#4aaaa5', '#00ad00', '#ffe600', '#57ddff', '#830288', '#882524', '#cffe77', '#00ad00', '#1d44f2', '#00ddd2', '#ddd'],
					borderWidth: 0,
					data: [1, 1, 4, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 4]
				}
			]
		},

		options: {

			title: {
				display: true,
				text: "Bootcamp Progress",
				fontSize: 20,
				fontColor: "#ffffff"
			},

			responsive: true,
			cutoutPercentage: 20,
			animation: {
				animateScale: true
			},
			maintainAspectRatio: false,
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: '#ffffff'
				}
			}
		}

	});

	return (
		<div data-aos="fade-down" data-aos-easing="linear">
			<Doughnut
				data={chartData.data}
				options={chartData.options}
				height='500px'
			/>
		</div>

	)
}
