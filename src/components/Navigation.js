import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Navigation = ({ goTo }) => {
	return (
		<Navbar data-aos="fade-down" data-aos-duration="3000" id="nav" className="navbar navbar-expand-md fixed-top navbar-light" expand='md'>
			<div className="container col-12 col-lg-10 col-xl-8 pl-0 pr-0">
				<a className="navbar-brand" href="index.html">jmacro . dev<span style={{ color: '#474747' }}>eloper</span></a>
				<Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse className="collapse navbar-collapse navbar-dark" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href='#about'>about</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">portfolio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">contact</a>
						</li>
					</ul>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}
