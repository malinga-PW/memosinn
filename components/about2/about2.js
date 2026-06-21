import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about.jpg'
import Image from 'next/image'

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="about-title">
                                    <span>Who We Are</span>
                                    <h2>Welcome to Memo's Inn - Your Cozy Haven in Hiriketiya</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>Located just a stone's throw away from the pristine beaches of Hiriketiya and Dickwella, Memo's Inn offers the perfect base to explore the beauty of the southern coast of Sri Lanka. Enjoy the convenience of free Wi-Fi, complimentary parking, and our friendly staff who are always ready to assist you.</p>
                                    <div className="about-info-wrap">
                                        <div className="about-info-left">
                                            <p>Free Wi-Fi & Parking</p>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="about-info-right">
                                            <p>Rooms From</p>
                                            <h3>$28</h3>
                                        </div>
                                    </div>
                                    <Link className="theme-btn" onClick={ClickHandler} href='/room'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;