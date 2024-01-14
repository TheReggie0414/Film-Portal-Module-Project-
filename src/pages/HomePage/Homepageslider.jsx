import React, { useEffect, useState } from 'react';
import './Homepageslider.css';

const HomePageslider = () => {
    const images = [
        new URL('../../img/image1.jpg', import.meta.url).toString(),
        new URL('../../img/image2.jpg', import.meta.url).toString(),
        new URL('../../img/image3.jpg', import.meta.url).toString(),
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideshowImage = document.getElementById("slideshow-image");

        const showNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const intervalId = setInterval(showNextSlide, 6500);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div id="slideshow-container">
            <div className='slide-in'>
                <img id="slideshow-image" src={images[currentIndex]} alt="Slideshow Image" />
                {<div className='first-title'><h1>Трейлери та рецензії</h1></div>}
                {<div className='second-title'><h2>Миттєвий пошук фільмів і зручний серфінг по базі даних.
                    Ви завжди будете у курсі, що і коли дивитися.</h2></div>}
            </div>
        </div>
    );
};

export default HomePageslider;