import React from 'react'
import Link from 'next/link'
import simg1 from '/public/images/room/img-7.jpg'
import simg2 from '/public/images/room/img-8.jpg'
import rv1 from '/public/images/room/r1.jpg'
import rv2 from '/public/images/room/r2.jpg'
import RoomSidebar from './RoomSidebar'
import Image from 'next/image'

const RoomDetails = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="Room-details-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="room-description">
                            <div className="room-title">
                                <h2>Description</h2>
                            </div>
                            <p className="p-wrap">Welcome to Memo's Inn, your cozy home away from home in the heart of Hiriketiya. Our comfortable rooms are designed to provide you with a relaxing stay after a day of exploring the beautiful southern coast of Sri Lanka.</p>
                            <p>Each room comes equipped with essential amenities including free Wi-Fi, comfortable bedding, and clean private or shared bathroom facilities. Our friendly staff are always available to help you arrange local transportation, book tours, or recommend the best surf spots and restaurants nearby.</p>
                            <p>Whether you are a solo backpacker, a couple on vacation, or a group of friends, Memo's Inn offers the perfect blend of comfort, convenience, and affordability. We pride ourselves on delivering warm Sri Lankan hospitality to every guest who walks through our doors.</p>
                        </div>
                        <div className="room-details-service">
                            <div className="row">
                                <div className="room-details-item">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="room-d-text">
                                                <div className="room-title">
                                                    <h2>Amenities</h2>
                                                </div>
                                                <ul>
                                                    <li>Free High-Speed Wi-Fi</li>
                                                    <li>Air Conditioning / Fan</li>
                                                    <li>Electric Kettle & Tea/Coffee</li>
                                                    <li>Hot & Cold Water</li>
                                                    <li>Towels & Linen Provided</li>
                                                    <li>On-Site Parking</li>
                                                    <li>Airport Pickup Available</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="room-d-img">
                                                <Image src={simg1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="room-d-img">
                                                <Image src={simg2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <div className="room-d-text2">
                                                <div className="room-title">
                                                    <h2>Room Services</h2>
                                                </div>
                                                <ul>
                                                    <li>Daily Housekeeping</li>
                                                    <li>Free On-Site Parking</li>
                                                    <li>Complimentary Breakfast</li>
                                                    <li>Free Wi-Fi Throughout</li>
                                                    <li>Surfboard Storage</li>
                                                    <li>Luggage Storage</li>
                                                    <li>Local Tour Assistance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-area">
                            <div className="room-title">
                                <h2>Pricing Plans</h2>
                            </div>
                            <div className="pricing-table">
                                <table className="table-responsive pricing-wrap">
                                    <thead>
                                        <tr>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                            <th>Sun</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$28</td>
                                            <td>$28</td>
                                            <td>$28</td>
                                            <td>$28</td>
                                            <td>$28</td>
                                            <td>$32</td>
                                            <td>$32</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="map-area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6678762677653!2d80.58709677475225!3d5.998183829708661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1f53b5b3e0c61%3A0x7e8b3e5a3f5f3b0!2sDodampahala%2C+Dikwella!5e0!3m2!1sen!2slk!4v1"></iframe>
                            </div>
                        </div>
                        <div className="room-review">
                            <div className="room-title">
                                <h2>Room Reviews</h2>
                            </div>
                            <div className="review-item">
                                <div className="review-img">
                                    <Image src={rv1} alt=""/>
                                </div>
                                <div className="review-text">
                                    <div className="r-title">
                                        <h2>Marry Watson</h2>
                                        <ul>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                    <p>The room was fantastic! Clean, comfortable, and exactly as described. The location is unbeatable - just a few minutes walk to the beach. The staff went above and beyond to make our stay special. Highly recommend!</p>
                                </div>
                            </div>
                            <div className="review-item">
                                <div className="review-img">
                                    <Image src={rv2} alt=""/>
                                </div>
                                <div className="review-text">
                                    <div className="r-title">
                                        <h2>Lily Havenly</h2>
                                        <ul>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                    <p>Great value for money! The dormitory was clean, the WiFi was fast, and the common area was perfect for meeting other travelers. The staff helped me arrange a surfboard rental and gave great tips about local restaurants.</p>
                                </div>
                            </div>
                        </div>
                        <div className="add-review">
                            <div className="room-title">
                                <h2>Add Review</h2>
                            </div>
                            <div className="wpo-blog-single-section review-form ">
                                <div className="give-rat-sec">
                                    <p>Your rating *</p>
                                    <div className="give-rating">
                                        <label>
                                            <input type="radio" name="stars" value="1" />
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="2" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="3" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="4" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="5" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="review-add">
                                    <div className="comment-respond">
                                        <form id="commentform" className="comment-form" onSubmit={SubmitHandler}>
                                            <div className="form-inputs">
                                                <input placeholder="Your Name*" type="text" />
                                                <input placeholder="Your Email*" type="email" />
                                            </div>
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Your Review"></textarea>
                                            </div>
                                            <div className="form-check">
                                                <div className="shipp pb">
                                                    <input type="checkbox" id="c2" name="cc" />
                                                    <label htmlFor="c2"><span></span>Save my name, email, and website in
                                                        this browser for the next time I comment.</label>
                                                </div>
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Submit Now" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RoomSidebar/>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails;