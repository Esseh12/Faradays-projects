// src/components/Product/ProductNotFound.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
			<Container className='product-not-found'>
				<Row>
					<Col className='text-center'>
						<h2>404: Product Not Found</h2>
						<DotLottieReact
							src='https://lottie.host/bf056829-6354-4f6d-9e1b-62dd325ac512/X3x77bnoWQ.lottie'
							background='transparent'
							speed='1'
							style={{ width: '300px', height: '300px' }}
							loop
							autoplay
						/>
						<p>
							The product you are looking for does not exist or has been
							removed. Please check the URL or return to the products page.
						</p>
					</Col>
				</Row>
				<style jsx>{`
					.product-not-found {
						padding: 4rem 0;
						margin-top: 4rem;
					}
					.product-not-found h2 {
						font-size: 2rem;
						margin-bottom: 1rem;
						color: #004976;
					}
					.product-not-found p {
						font-size: 1.1rem;
						color: #6c757d;
					}
				`}</style>
			</Container>
			<Footer />
		</>
	);
};

export default ProductNotFound;
