import React from 'react'

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-6  icons-wrapper text-center mx-auto">
						<span id="linkedin"><a href="https://www.linkedin.com/in/jon-anthony-macrohon-1b6881a3/"
							target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a></span>
						<span id="github"><a href="https://www.github.com/Jmacr0" target="blank"
							rel="noopener noreferrer" className="fa fa-github"></a></span>
						<span id="twitter"><a href="https://twitter.com/jmacr0_" target="_blank"
							rel="noopener noreferrer" className="fa fa-twitter"></a></span>
					</div>
					<div className="col-md-6 text-center my-auto">
						<span id="copy">&copy; COPYRIGHT JMACRO LIMITED ALL RIGHTS RESERVED</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
