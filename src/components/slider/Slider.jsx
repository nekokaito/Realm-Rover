import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div>
            <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/xM8k3KM/silder1-1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/HHVyh7p/silder1-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/dPq2kJ4/silder1-1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/qy0ZyGh/silder1-3.jpg" alt="" /></SwiperSlide>
    </Swiper>
        </div>
        
    );
};

export default Slider;