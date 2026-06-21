import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about2.jpg'
import Image from 'next/image'

const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s3 section-padding">
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
                                    <span>About Us</span>
                                    <h2>Your Perfect Getaway on Sri Lanka's Southern Coast</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>Memo's Inn is your cozy home away from home in the heart of Hiriketiya. Whether you are surfing the famous waves, relaxing on the golden sands, or exploring the nearby attractions, we provide comfortable accommodations and warm Sri Lankan hospitality at affordable rates.</p>
                                    <Link className="theme-btn" onClick={ClickHandler} href='/about'>Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About3;