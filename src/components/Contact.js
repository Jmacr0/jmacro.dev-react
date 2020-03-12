import React from 'react';
import phoneImg from '../phone.png';

export const Contact = () => {
	return (
		<section id="contact" className="container-fluid" style={{ overflow: 'hidden' }}>
			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h2 data-aos="fade-left" data-aos-duration="1000">Contact</h2>
				</div>
			</div>
			<div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
				className="container-fluid form-container pt-4 pb-5 mx-auto">
				<div className="row">
					<div className="col-md-5 mx-auto">
						<div className="row">
							<div className="col">
								<div className="card-title text-center pt-1 mb-0">
									<h3 className="m-0 mb-3 pt-1 pb-2" style={{ letterSpacing: '1px', color: '#4aaaa5' }}>get in
                                    touch</h3>
								</div>
								<p className="card-text p-2">Maybe you want to contact me for some strange reason. Perhaps
									you wanted to ask me a question. Well fortunately for you my friend, this contact
                                page most definitely works! Go ahead and give it a try.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 text-center">
								<img src={phoneImg} alt="phone-icon" id="phone-icon" />
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<form className="mt-0 mx-auto" action="https://formspree.io/mvooeqqr" method="POST">
							<p id="contact-inquiries" className="text-center">Have any inquiries? Drop me a message!</p>
							<div className="form-group">
								<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
							</div>
							<div className="form-group">
								<input type="text" name="_replyto" className="form-control" id="formGroupExampleInput2"
									placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Subject" />
							</div>
							<div className="form-group">
								<textarea name="message" className="form-control" id="formGroupExampleInput4"
									placeholder="Leave a Message" />
							</div>
							<div className="text-center">
								<button className="btn btn-primary btn-lg" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
