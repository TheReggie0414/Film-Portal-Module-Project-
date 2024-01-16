import React, { useEffect, useState } from 'react';
import './Homepageslider.css';

const images = [
    new URL('../../img/image1.jpg', import.meta.url).toString(),
    new URL('../../img/image2.jpg', import.meta.url).toString(),
    new URL('../../img/image3.jpg', import.meta.url).toString(),
];

const HomePageslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideshowImageRef = React.createRef();

    useEffect(() => {
        const showNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const intervalId = setInterval(showNextSlide, 6500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="slideshow-container">
            <div className={`slide-in ${slideshowImageRef.current ? 'loaded' : ''}`}>
                <img
                    id="slideshow-image"
                    ref={slideshowImageRef}
                    src={images[currentIndex]}
                    alt="Slideshow Image"
                />
                <div className='first-title'>
                    <h1>Trailers and Reviews</h1>
                </div>
                <div className='second-title'>
                    <h2>
                        Instantly search for movies and conveniently browse the database.
                        You will always be informed about what and when to watch.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HomePageslider;