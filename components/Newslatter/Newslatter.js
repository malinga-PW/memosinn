import Image from 'next/image';
import React from 'react';
import Shape1 from '/public/images/nshape1.png'
import Shape2 from '/public/images/nshape2.png'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Newslatter = (props) => {

    return (
        <section className={`wpo-newslatter-section section-padding ${props.nClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="wpo-section-title-s2">
                            <h2>Stay Updated with Memo's Inn</h2>
                            <p>Sign up for our newsletter to receive exclusive offers, travel tips, and updates about Memo's Inn and the beautiful southern coast of Sri Lanka.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-newsletter">
                    <div className="newsletter-form">
                        <form onSubmit={SubmitHandler}>
                            <input type="email" className="form-control"
                                    placeholder="Enter your email address..." required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="n-shape">
                <Image src={Shape1} alt=""/>
            </div>
            <div className="n-shape2">
                <Image src={Shape2} alt=""/>
            </div>
        </section>
    )
}


export default Newslatter;