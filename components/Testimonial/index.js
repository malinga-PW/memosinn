import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '/public/images/testimonial/img-1.jpg'
import test2 from '/public/images/testimonial/img-2.jpg'
import test3 from '/public/images/testimonial/img-3.jpg'
import Image from "next/image";





const Testimonials = [
    {
        tstImg: test1,
        name: 'Sarah Mitchell',
        title: 'Travel Blogger',
        descriptoion: 'Absolutely loved my stay at Memo\'s Inn! The location is perfect, just a short walk to Hiriketiya Beach. The staff were incredibly welcoming and helpful. Will definitely be coming back!',
    },
    {
        tstImg: test2,
        name: 'James Cooper',
        title: 'Surf Instructor',
        descriptoion: 'Best value accommodation in the area. Clean rooms, fast WiFi, and the proximity to the surf break is unbeatable. The dormitory beds are super comfortable too.',
    },
    {
        tstImg: test3,
        name: 'Anna Schmidt',
        title: 'Backpacker',
        descriptoion: 'I extended my stay twice because I loved it so much! The garden is a lovely place to relax, and the team helped me arrange a tuk-tuk to explore nearby attractions. Highly recommended!',
    },
]



const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    return (
        <div className="wpo-testimonial-area">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                            {Testimonials.map((tstml, tsm) => (
                                <div className="wpo-testimonial-item" key={tsm}>
                                    <div className="wpo-testimonial-img">
                                        <Image src={tstml.tstImg} alt="" />
                                    </div>
                                    <div className="wpo-testimonial-content">
                                        <p>{tstml.descriptoion}</p>
                                        <h2>{tstml.name}</h2>
                                        <span>Previous Client</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;