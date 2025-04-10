import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OffcanvasNavbar from '../Navbar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from '../Footer';

const ProductNotFound = () => {
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
				className='product-not-found'
				fluid>
				<Row className='justify-content-center align-items-center text-center min-vh-80'>
					<Col
						xs={12}
						md={8}>
						<h2>404: Product Not Found</h2>
						<DotLottieReact
							src='https://lottie.host/d59097ec-b55d-4b1f-be5e-d25379b2edee/Igt6IGC6tR.lottie'
							background='transparent'
							speed='1'
							style={{ width: '300px', height: '300px', margin: '0 auto' }}
							loop
							autoplay
						/>
						<p>
							The product you are looking for does not exist or has been
							removed. Please check the URL or return to our products page.
						</p>
						<Link to='/product'>
							<Button
								variant='primary'
								className='mt-3'>
								Back to Products
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
			<Footer />

			<style jsx>{`
				.product-not-found {
					padding: 4rem 1rem;
					margin-top: 4rem;
				}
				.product-not-found h2 {
					font-size: 2.5rem;
					margin-bottom: 1rem;
					color: #004976;
				}
				.product-not-found p {
					font-size: 1.2rem;
					color: #6c757d;
					margin-bottom: 1.5rem;
				}
				@media (max-width: 576px) {
					.product-not-found h2 {
						font-size: 2rem;
					}
					.product-not-found p {
						font-size: 1rem;
					}
				}
			`}</style>
		</>
	);
};

export default ProductNotFound;
