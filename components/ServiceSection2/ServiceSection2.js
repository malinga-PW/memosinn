import React from 'react'
import Services from '../../api/service'
import Link from 'next/link'


const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <div className="wpo-service-area section-padding">
            <div className="wpo-service-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-8 col-12">
                            <div className="wpo-service-content">
                                <h2>Everything You Need for a Comfortable Stay</h2>
                                <p>From free Wi-Fi to airport transfers, we provide all the amenities to make your stay at Memo's Inn memorable and hassle-free. </p>
                                <a className="theme-btn" href="/service">Discover More</a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-12">
                            <div className="wpo-service-items">
                                {Services.map((service, sitem) => (
                                    <div className="wpo-service-item" key={sitem}>
                                        <i className={`fi ${service.fIcon}`}></i>
                                        <Link onClick={ClickHandler} href="/service/[slug]" as={`/service/${service.slug}`}>{service.title}</Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2;