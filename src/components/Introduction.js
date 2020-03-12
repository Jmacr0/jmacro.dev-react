import React from 'react';
import { PieChart } from './PieChart';

export const Introduction = () => {
	return (
		<main className="container-fluid">
			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h2 id="about" data-aos="fade-left" data-aos-duration="1000">About</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h3 className="pt-4">Full Stack Developer: <span role='img' aria-label='construction-sign'>🚧</span> ETA March 2020</h3>
					<p>I am a Full Stack Developer. Over the course of 24 weeks I have built this website to showcase the skills I have attained through my time at Monash Coding Bootcamp. I have included multiple <b><em>Full Stack Applications</em></b> and have developed proficiency in creating fully fledged products. Ultimately I wish to find a position in the tech industry and believe the skills obtained from this bootcamp, alongside innumerous hours of project building and self study, will assist in positioning me well for this career transition</p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h3 className="pt-2">Background <span role='img' aria-label='doctor-syringe'>👨‍⚕️💉</span></h3>
					<p>I was born and raised in Auckland, New Zealand. I am a University of Auckland graduate with a
					Bachelors Degree in Nursing. I have worked as a Registered Nurse for five years specialising in
					Perioperative Nursing. I have experience in different surgical specialities including: general,
					urology, plastics, gynaecology, orthopaedic, and liver procedures. Recently I've dropped to
                    part-time work in order to dedicate more time to the bootcamp and software development.</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<PieChart />
				</div>
			</div>
		</main>
	)
}
