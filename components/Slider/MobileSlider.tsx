import React, { useRef, useState, FC } from "react";
import Slider from "react-slick";

let inactiveDot = "bg-black bg-opacity-25";
let activeDot = "bg-black";

interface IPageContent {
  title: string;
  description: string;
  image: string;
}

interface IMobileSlider {
  items: {title: string; description: string; image: string}[];
}

const MobileSlider: FC<IMobileSlider> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customSlider = useRef(null);

  const gotoSlide = (id: number) => {
    setCurrentSlide(id);
    customSlider.current.slickGoTo(id);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    easing: "easeInOut",
    pauseOnHover: false,
    beforeChange: (_: undefined, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <>
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
        {items.map((item) => (
          <>
            <div>
              <img src={item.image} alt={item.title} />
              <h1 className="text-black text-3xl leading-[110%] mt-4">{item.title}</h1>
              <p className="text-primaryDark leading-[150%] mt-4">{item.description}</p>
            </div>
            <button className="flex justify-center pt-6 gap-5 w-full">
              {items.map((_, index) => (
                <div
                  className={`${currentSlide == index ? activeDot : inactiveDot
                    } rounded-full h-3 w-3 transition-all`}
                  onClick={() => gotoSlide(index)}
                ></div>
              ))}
            </button>
          </>
        ))}
      </Slider>
    </>
  );
};

export default MobileSlider;
