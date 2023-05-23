import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../layout/header';

export default function BannerSlider() {
  const settings = {
    dots: true, // Enable dots for navigation
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const BannerImages = [
    { image: '../images/bharti.png', data1: 'STUDY MBA/PGDM IN PUNE AND MUMBAI', data2: 'ADMISSION OPEN FOR 2022 INTAKE' },
    { image: '../images/slide2.png', data1: 'STUDY MBA/PGDM IN PUNE AND MUMBAI', data2: 'ADMISSION OPEN FOR 2022 INTAKE' },
    { image: '../images/slide1.png', data1: 'STUDY MBA/PGDM IN PUNE AND MUMBAI', data2: 'ADMISSION OPEN FOR 2022 INTAKE' },
    { image: '../images/slide3.png', data1: 'STUDY MBA/PGDM IN PUNE AND MUMBAI', data2: 'ADMISSION OPEN FOR 2022 INTAKE' }
  ];

  return (
    <div>
      <div className='mob-slider'>
        <Header />
        <div className="slider-dots">
          <Slider className="slider-position " {...settings}>
            {BannerImages.map((data, index) => (
              <div key={index}>
                <img src={data.image} className='slide-img' alt="Slide" />

              </div>
            ))}

          </Slider>
        </div>
      </div>
      <div className="slider-text-block">
        <h1>STUDY MBA/PGDM IN PUNE AND MUMBAI</h1>
        <h1>ADMISSION OPEN FOR 2022 INTAKE</h1>
      </div>

    </div>

  );
}

