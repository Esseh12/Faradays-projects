// src/components/PageNotFound.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OffcanvasNavbar from '../Components/Navbar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from '../Components/Footer';

const PageNotFound = () => {
	const projectDetailStyle = {
		navLinkDefaultColor: '#000',
		defaultBg: 'bg-[#fff]',
		scrolledBg: 'bg-[#e5e5e5]',
		defaultNavLinkColor: '#000',
	};

	return (
		<>
			<OffcanvasNavbar styleProps={projectDetailStyle} />
			<Container
				className='page-not-found'
				fluid>
				<Row className='justify-content-center align-items-center text-center min-vh-80'>
					<Col
						xs={12}
						md={8}>
						<h2>404: Page Not Found</h2>
						<DotLottieReact
							src='https://lottie.host/2e078344-00be-4e45-bbf9-38d9cb48532b/KpDPE1NRDO.lottie'
							background='transparent'
							speed='1'
							style={{ width: '400px', height: '400px', margin: '0 auto' }}
							loop
							autoplay
						/>
						<p>
							The page you are looking for does not exist or has been moved.
							Please check the URL or return to our home page.
						</p>
						<Link to='/'>
							<Button
								variant='primary'
								className='mt-3'>
								Back to Home
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
			<Footer />

			<style jsx>{`
				.page-not-found {
					padding: 4rem 1rem;
					margin-top: 4rem;
				}
				.page-not-found h2 {
					font-size: 2.5rem;
					margin-bottom: 1rem;
					color: #004976;
				}
				.page-not-found p {
					font-size: 1.2rem;
					color: #6c757d;
					margin-bottom: 1.5rem;
				}
				@media (max-width: 576px) {
					.page-not-found h2 {
						font-size: 2rem;
					}
					.page-not-found p {
						font-size: 1rem;
					}
				}
			`}</style>
		</>
	);
};

export default PageNotFound;
