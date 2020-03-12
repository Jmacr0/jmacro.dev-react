import React from 'react'
import { Blinker } from './Blinker'

export const Welcome = () => {

	return (
		<header className="jumbotron-fluid">
			<div className="container h-100 mx-auto">
				<div className="row h-100">
					<div className="col text-center m-auto">
						<h1 data-aos="fade-down" data-aos-duration="1500">Jon Anthony Macrohon</h1>
						<h2 data-aos="fade-right" data-aos-duration="2500">Full Stack Software Developer<Blinker /></h2>
					</div>
				</div>
			</div>
		</header>
	)
}
