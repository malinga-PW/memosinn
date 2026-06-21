import React from 'react'
import Link from 'next/link'
import PrImg1 from '/public/images/pricing/1.jpg'
import PrImg2 from '/public/images/pricing/2.jpg'
import PrImg3 from '/public/images/pricing/3.jpg'
import SectionTitleS2 from '../SectionTitleS2'
import Image from 'next/image'


const Pricing = [
    {
        prImg: PrImg1,
        pakage: 'Economy Stay',
        price: '28',
        subs: 'Night',
        l1: 'Free Wi-Fi',
        l2: 'Private Bathroom',
        l3: '1 Double Bed',
        l4: '2 Guests Max'
    },
    {
        prImg: PrImg2,
        pakage: 'Deluxe Queen',
        price: '32',
        subs: 'Night',
        l1: 'Free Wi-Fi',
        l2: 'Air Conditioning',
        l3: '1 Queen Bed',
        l4: '2 Guests Max'
    },
    {
        prImg: PrImg3,
        pakage: 'Dormitory Bed',
        price: '16',
        subs: 'Night',
        l1: 'Free Wi-Fi',
        l2: 'Shared Bathroom',
        l3: 'Single Bed in Dorm',
        l4: '4 Guests per Room'
    },
]

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const PricingSection = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <SectionTitleS2 MainTitle={'Our Awesome Packages'} />
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricing.map((pricing, pitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="wpo-pricing-img">
                                            <Image src={pricing.prImg} alt="" />
                                        </div>
                                        <div className="wpo-pricing-text">
                                            <h4>{pricing.pakage}</h4>
                                            <h2>${pricing.price}<span>/Per {pricing.subs}</span></h2>
                                        </div>
                                    </div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                <li>{pricing.l1}</li>
                                                <li>{pricing.l2}</li>
                                                <li>{pricing.l4}</li>
                                                <li>{pricing.l3}</li>
                                            </ul>
                                            <Link onClick={ClickHandler} className="theme-btn" href="/pricing">Book Rooms</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection;