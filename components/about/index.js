import React from 'react'
import Link from 'next/link'

const About = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    
    return(
        <section className="wpo-about-section-s2 section-padding">
            <div className="container-fluid">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-12 offset-xl-6 offset-lg-4 offset-md-2">
                            <div className="wpo-about-content">
                                <div className="about-title">
                                    <span>Welcome to Memo's Inn</span>
                                    <h2>Experience the Charm of Hiriketiya Beach</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <div className="about-info-wrap">
                                        <div className="about-info-left">
                                            <p>Located just 6 min from Hiriketiya Beach</p>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="about-info-right">
                                            <p>Starting From</p>
                                            <h3>$28</h3>
                                        </div>
                                        <Link onClick={ClickHandler} className="theme-btn" href="/room">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;