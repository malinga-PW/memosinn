import React from 'react'
import Link from "next/link";


const SectionTitle = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <div className="wpo-section-title">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-md-8">
                    <div className="wpo-section-title-left">
                    <h2>{props.MainTitle}</h2>
                        <p>Discover the best places to stay and explore along Sri Lanka's beautiful southern coast.</p>
                    </div>
                </div>
                <div className="col-xl-6 col-md-4">
                    <div className="btns">
                        <Link onClick={ClickHandler} href={props.link}>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;