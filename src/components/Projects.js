import React, { useState } from 'react'
import { Project } from './Project';
import readMeImg from '../read-me.png';
import bloggerImg from '../blogger.png';

export const Projects = () => {
	const [details, setDetails] = useState({
		reviewme: {
			title: 'ReviewMe',
			description: 'ReviewMe is a full stack reviewing application',
			img: readMeImg,
			technologies: 'React MongoDB Express Node',
			live: 'https://jmacr0.github.io/project_one'
		},
		blogger: {
			title: 'Blogger',
			description: 'Blogger is a full stack blogging application that provides user authentication and database for storage. Routes are protected via passport.js and are only accessed once authenticated. User is able to create a new blog post, like and comment on other User posts, and view / edit their profile page. User can view all their posts on their profile. Home page shows all post made by users in reverse chronological order. Data is accessed using mySQL and sequelize ORM library.',
			img: bloggerImg,
			technologies: 'mySQL Sequelize Node Express Passport Handlebars',
			live: 'https://blogger-blogger.herokuapp.com/'
		},
		readme: {
			title: 'ReadMe',
			description: 'ReadMe is a book search application that takes in multiple user set criteria and filters book results accordingly.The random function allow users to search for random books.Finally, the application allows users to save books into their favourites and displays them in the favourites page. Once done, they are	able to	remove them from favourites.',
			img: readMeImg,
			technologies: 'AJAX jQuery Javascript HTML CSS',
			live: 'https://jmacr0.github.io/project_one'
		}
	})


	return (
		<section id="portfolio" className="container-fluid">

			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h2 data-aos="fade-left" data-aos-duration="1000" className="mb-4">Portfolio</h2>
				</div>
			</div>


			<div className="row">
				<div className="col-lg-10 mx-auto">
					<div className="row">
						<div className="col-md-4">
							<Project details={details.reviewme} />
						</div>
						<div className="col-md-4">
							<Project details={details.blogger} />
						</div>
						<div className="col-md-4">
							<Project details={details.readme} />
						</div>
					</div>
				</div>
			</div>


		</section>
	)
}
