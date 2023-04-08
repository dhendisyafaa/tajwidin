import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCategory from "./cards/CardCategory";

const SectionCategory = () => {
  return (
    <div className="flex gap-2 lg:gap-4 overflow-x-scroll scrollbar-hide py-3 px-1">
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
};

export default SectionCategory;
