import React, { useState } from 'react';
// import './Carousel.css';

const Carousel = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
		console.log('click right');
	};

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
		console.log('click prev');
	};

	return (
		<>
			<div className='carousel-section'>
				<div className='carousel'>
					<button onClick={goToPrevious} className='carousel-button'>
						&#8592;
					</button>
					<div className='carousel-content'>
						{items.map((item, index) => (
							<div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
								<h2 className='carousel-title'>{item.title}</h2>
								<img src={item.image} alt={item.title} className='carousel-image' />
								<p className='carousel-text'>{item.text}</p>
							</div>
						))}
					</div>
					<button onClick={goToNext} className='carousel-button'>
						&#8594;
					</button>
				</div>
				<div className='dots-section'>
					<div className='dots'>
						{items.map((_, index) => (
							<button
								key={index}
								className={` ${currentIndex === index ? 'fill' : 'blank'}`}
								onClick={() => setCurrentIndex(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
