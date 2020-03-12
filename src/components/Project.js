import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, Image } from 'react-bootstrap';

export const Project = ({ details: { title, description, img, technologies, live } }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<h3 className='app-name pointer' onClick={handleShow}>
				{title}
			</h3>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>
						{title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row >
							<Col >
								{description}
							</Col>
						</Row>
						<Row className='mt-3'>
							<Col>
								<Image src={img} width='100%' />
							</Col>
						</Row>
						<Row className='text-center font-weight-bold mt-2'>
							<Col>
								{technologies}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer className='mx-auto'>
					<Button variant="primary">
						<a href={live} target='_blank' rel="noopener noreferrer" className='text-light'>
							Live Version
						</a>
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
