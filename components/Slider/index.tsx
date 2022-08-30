import { FC } from "react";
import Slider  from "react-slick";

interface Props {
  slidesToShow?: number;
}

const SliderContainer: FC<Props> = ({ children, slidesToShow = 5 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 0,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    easing: "easeInOut",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderContainer;