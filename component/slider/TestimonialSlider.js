import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
const TestimonialSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize(); // Call it initially

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="testimonial-slider-container">
            <Swiper
                slidesPerView={slidesPerView}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                modules={[Autoplay]}
                className="swiper mySwiper overflow-hidden"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">

                        <p className="single-testimonial__txt">
                            <h4>200 Mbps Internet with </h4>
                            <ul>
                                <li>Stream and download movies, shows, and photos effortlessly with ' lightning-fast 200 Mbps internet. Enjoy seamless connectivity and high-speed performance.</li>
                                <li>Only $39.99 per Month</li>
                                <li>With Auto Pay, plus taxes and equipment charges.</li>
                                <li>Disney+ Included for 12 Months</li>
                                <li>Get Disney+ on us for the first 12 months, then $6.99/month thereafter.</li>
                                <li>Genie HD DVR Included</li>
                                <li>Store over 200 hours of your favorite TV shows and movies with the Genie HD DVR.</li>
                            </ul>
                        </p>

                        <div className="testimonial-writer d-flex">
                            <img
                                src="assets/img/user/author-2.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">
                                    Donald H. James
                                </h6>
                                <span className="testimonial-writer__label">
                                    Rental Customer
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">


                        <p className="single-testimonial__txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Animi eaque voluptate, exercitationem temporibus velit
                            tempora quidem totam, corrupti accusamus facilis
                            consequuntur qui consequatur pariatur. Ea minima ab et
                            quo ad!
                        </p>

                        <div className="testimonial-writer d-flex">
                            <img
                                src="assets/img/user/user-4.png"
                                alt="person"
                                className=" testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">beth moony</h6>
                                <span className="testimonial-writer__label">
                                    customer
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="single-testimonial">


                        <p className="single-testimonial__txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Animi eaque voluptate, exercitationem temporibus velit
                            tempora quidem totam, corrupti accusamus facilis
                            consequuntur qui consequatur pariatur. Ea minima ab et
                            quo ad!
                        </p>

                        <div className="testimonial-writer d-flex">
                            <img
                                src="assets/img/user/user-1.png"
                                alt="person"
                                className="testimonial-writer__img"
                            />
                            <div className="testimonial-writer__info">
                                <h6 className="testimonial-writer__name">beth moony</h6>
                                <span className="testimonial-writer__label">
                                    customer
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}

export default TestimonialSlider