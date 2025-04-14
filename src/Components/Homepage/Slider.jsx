import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from 'styled-components';
import Grid_down from '../../assets/Images/lights-stay-on-desktop.avif';
import sleek from '../../assets/Images/sleek-durable-desktop.avif';

// Styled components with responsive adjustments
const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	min-height: 600px;
	overflow: hidden;
	background-color: #000;

	@media (max-width: 768px) {
		height: 100vh;
		min-height: 500px;
	}
`;

const Slide = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	color: white;
`;

const DarkOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0.4) 50%,
		rgba(0, 0, 0, 0.2) 100%
	);
	z-index: 2;
`;

const SlideContent = styled.div`
	position: relative;
	padding: 0 40px;
	max-width: 600px;
	z-index: 3;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 0 20px;
		max-width: 100%;
	}
`;

const SlideBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const SlideImage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
`;

const SlideVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const DotsContainer = styled.div`
	position: absolute;
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 12px;
	z-index: 3;

	@media (max-width: 768px) {
		bottom: 20px;
	}
`;

const Dot = styled.button`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: #fff;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 24px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 12px;
	}
`;

const Button = styled.a`
	display: inline-block;
	padding: 12px 24px;
	background-color: ${(props) => (props.primary ? '#3e6ae1' : 'transparent')};
	color: #fff;
	border: ${(props) => (props.primary ? 'none' : '2px solid #fff')};
	border-radius: 4px;
	text-decoration: none;
	font-weight: 500;
	cursor: pointer;
	text-align: center;

	&:hover {
		background-color: ${(props) =>
			props.primary ? '#2a4da8' : 'rgba(255, 255, 255, 0.1)'};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const SlideTitle = styled(motion.h1)`
	font-size: 42px;
	margin-bottom: 20px;
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 32px;
	}

	@media (max-width: 480px) {
		font-size: 28px;
	}
`;

const SlideDescription = styled(motion.p)`
	font-size: 18px;
	line-height: 1.6;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		font-size: 16px;
		margin-bottom: 20px;
	}
`;

// Slide data
const slides = [
	{
		id: 1,
		title: 'Install Solar Panels, Power a Sustainable Home',
		description:
			'Generate, use, store and charge—all with one fully integrated clean energy ecosystem by Faraday. All of our products work together seamlessly, optimizing your energy usage and savings while minimizing your impact on the environment.',
		mediaType: 'video',
		media: '/Video/power-home-carousel-slide-01-desktop.webm',
		backgroundPosition: 'center',
	},
	{
		id: 2,
		title: 'Grid Goes Down, Lights Stay On',
		description:
			'Solar panels generate energy from sunlight for you to use in your home. You can store your excess energy for use whenever you want. As severe weather becomes more common and the grid less reliable, Powerwall can keep your lights on when outages occur.',
		mediaType: 'image',
		media: Grid_down,
		backgroundPosition: 'center',
	},
	{
		id: 3,
		title: 'Maximize Your Savings',
		description:
			"Faraday's integrated solar and storage solutions help you earn credits from your utility when you produce excess energy. Take control of your energy consumption and protect yourself from rising electricity costs.",
		mediaType: 'image',
		media: sleek, // Update with actual image path
		backgroundPosition: 'center',
	},
];

// Animation variants
const slideVariants = {
	enter: (direction) => ({
		x: direction > 0 ? '100%' : '-100%',
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction) => ({
		x: direction < 0 ? '100%' : '-100%',
		opacity: 0,
	}),
};

const SolarSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [direction, setDirection] = useState(0);
	const videoRefs = useRef({});

	// Handle automatic video playback when slide changes
	useEffect(() => {
		const currentSlideData = slides[currentSlide];

		// Pause all videos first
		Object.values(videoRefs.current).forEach((videoRef) => {
			if (videoRef && videoRef.pause) {
				videoRef.pause();
			}
		});

		// Play current video if it exists
		if (
			currentSlideData.mediaType === 'video' &&
			videoRefs.current[currentSlideData.id] &&
			videoRefs.current[currentSlideData.id].play
		) {
			const playPromise = videoRefs.current[currentSlideData.id].play();

			if (playPromise !== undefined) {
				playPromise.catch((error) => {
					console.error('Video playback failed:', error);
				});
			}
		}
	}, [currentSlide]);

	const handleDotClick = (index) => {
		setDirection(index > currentSlide ? 1 : -1);
		setCurrentSlide(index);
	};

	const currentSlideData = slides[currentSlide];

	const renderSlideBackground = (slide) => {
		if (slide.mediaType === 'video') {
			return (
				<SlideVideo
					ref={(el) => (videoRefs.current[slide.id] = el)}
					src={slide.media}
					autoPlay
					muted
					loop
					playsInline
				/>
			);
		} else {
			return <SlideImage style={{ backgroundImage: `url(${slide.media})` }} />;
		}
	};

	// Auto-advance slides every 8 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			const nextSlide = (currentSlide + 1) % slides.length;
			setDirection(1);
			setCurrentSlide(nextSlide);
		}, 8000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<SliderContainer>
			<AnimatePresence
				custom={direction}
				initial={false}
				mode='wait'>
				<Slide
					key={currentSlide}
					custom={direction}
					variants={slideVariants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.5 },
					}}>
					<SlideBackground>
						{renderSlideBackground(currentSlideData)}
					</SlideBackground>
					<DarkOverlay />
					<SlideContent>
						<SlideTitle
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}>
							{currentSlideData.title}
						</SlideTitle>
						<SlideDescription
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}>
							{currentSlideData.description}
						</SlideDescription>
						<ButtonContainer>
							<Button
								primary
								href='/contact'>
								Schedule a Consultation
							</Button>
							<Button href='/contact'>Learn More</Button>
						</ButtonContainer>
					</SlideContent>
				</Slide>
			</AnimatePresence>

			<DotsContainer>
				{slides.map((slide, index) => (
					<Dot
						key={slide.id}
						active={index === currentSlide}
						onClick={() => handleDotClick(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</DotsContainer>
		</SliderContainer>
	);
};

export default SolarSlider;
