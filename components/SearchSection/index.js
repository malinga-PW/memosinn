import React, { useState } from 'react'
import Link from 'next/link'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchSection = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [roomType, setRoomType] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`wpo-select-section ${props.svClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form className="clearfix" onSubmit={SubmitHandler}>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={endDate} onChange={(date) => setendDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="input-group">
                                            <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="form-control">
                                                <option value="">Select Room Type</option>
                                                <option value="economy-double">Economy Double Room - $28/night</option>
                                                <option value="deluxe-queen">Deluxe Queen Room - $32/night</option>
                                                <option value="dormitory-mixed">Mixed Dormitory (4-Bed) - $16/bed</option>
                                                <option value="dormitory-female">Female Dormitory (4-Bed) - $16/bed</option>
                                                <option value="dormitory-male">Male Dormitory (4-Bed) - $16/bed</option>
                                                <option value="deluxe-balcony">Deluxe Queen with Balcony - $36/night</option>
                                            </select>
                                            <i className="fi flaticon-user"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/search-result">Check Availability</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchSection;

