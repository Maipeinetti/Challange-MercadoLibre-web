import React from "react";
//Image swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

export default function Thumbnail(props) {
  const detail = props.product;

  return detail ? (
    <div className="thumbnail__div">
      <Swiper
        wrapperTag="ul"
        className="swiper__container"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {detail.picture.map((imgUrl, i) => {
          return (
            <SwiperSlide key={i} tag="li" className="swiper__wrapper">
              <img
                src={`${imgUrl}`}
                alt="selling product"
                className="product__image"
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    ""
  );
}
