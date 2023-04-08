import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const CarouselHome = () => {
  {
    /* mobile img size: 800 x 500 px */
  }
  {
    /* large img size: 1000 x 400 px */
  }

  const [screenWidth, setScreenWidth] = useState(0);
  console.log(screenWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Kode di bawah hanya dijalankan pada lingkungan klien
      setScreenWidth(window.innerWidth);
    }
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
        className="rounded-xl"
      >
        <SwiperSlide>
          {screenWidth > 900 ? (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1591202812044-246db6e6e68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2NDYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
            />
          ) : (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1586767003402-8ade266deb64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2MjM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {screenWidth > 900 ? (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1591202812044-246db6e6e68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2NDYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
            />
          ) : (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1586767003402-8ade266deb64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2MjM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {screenWidth > 900 ? (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1591202812044-246db6e6e68d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2NDYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
            />
          ) : (
            <img
              className="h-full  object-cover"
              src="https://images.unsplash.com/photo-1586767003402-8ade266deb64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8aXNsYW18fHx8fHwxNjgwOTE2MjM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            />
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHome;
