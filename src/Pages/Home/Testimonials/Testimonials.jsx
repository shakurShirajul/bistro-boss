import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="my-20">
            <SectionTitle heading="What Our Client Say"
                subheading="Testimonials" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div >

                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center mx-24 my-16">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="py-8">{review.details}</p>
                                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;