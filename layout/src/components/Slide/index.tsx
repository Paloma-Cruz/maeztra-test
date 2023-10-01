// SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';

// SWIPER STYLE
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss';

// MODULES
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// INTERFACE
import { SlideProps } from '../../interfaces/slide';

const Slide = ({
  list, 
  slidesPerView, 
  spaceBetween, 
  pagination, 
  navigation, 
  centeredSlides
}: SlideProps) => {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          enabled: pagination
        }}
        navigation={navigation}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slide