import React, { useRef, useState } from "react";
import Slider from "react-slick";

let inactiveDot = "bg-black bg-opacity-25";
let activeDot = "bg-black";

interface IPageContent {
  title: string;
  description: string;
  image: string;
}

const pageContent:IPageContent[] = [
  {
    title: "Diversity & Inclusion",
    description: "This is DeFi for the People. We believe in breaking down social and cultural barriers by creating a welcoming community to anyone who is interested in creating positive social impact through DeFi.",
    image: "/images/about/diversity.svg",
  },
  {
    title: "Accessibility",
    description: "Our products, our community, our communications, and our goals are friendly, transparent, relatable, easy to understand, and easy to use.",
    image: "/images/about/accessibility.svg",
  },
  {
    title: "Community",
    description: "We look to foster empathy, collaboration, interconnection, and a non-rivalrous approach in all spheres, and intend to influence global systems as such. We understand that we benefit when everyone benefits.",
    image: "/images/about/community.svg",
  },
  {
    title: "Agency",
    description: "We believe that DeFi is a new financial system that gives individuals and communities the tools to embed individual and community agency.",
    image: "/images/about/agency.svg",
  },
  {
    title: "Leadership",
    description: "We believe that DeFi is a new financial system that gives individuals and communities the tools to embed individual and community agency.",
    image: "/images/about/leadership.svg",
  }
];

const AboutMobileSlider = ({ isThreeX }) => {
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
        {pageContent.map((content) => (
          <>
            <div>
              <img src={content.image} alt={content.title} />
              <h1 className="text-black text-3xl leading-[110%] mt-4">{content.title}</h1>
              <p className="text-primaryDark leading-[150%] mt-4">{content.description}</p>
            </div>
            <button className="flex justify-center pt-6 gap-5 w-full">
              {pageContent.map((_, index) => (
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

export default AboutMobileSlider;
