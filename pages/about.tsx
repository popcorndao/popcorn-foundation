import MobileSlider from "components/Slider/MobileSlider";
import React from "react";
import { isOdd } from 'helpers';

const items = [
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

export default function About(): JSX.Element {
  return (
    <section>
      <div className="grid grid-cols-12 mb-10 lg:mb-20">
        <div className="col-span-12 lg:col-span-6 mb-10 lg:mb-0">
          <h1 className="text-6xl text-black text-normal leading-[100%]">Our Values</h1>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customLightGreen h-full flex flex-row md:flex-col justify-between min-h-[228px] lg:min-h-[400px]">
            <p className="text-3xl md:text-6xl text-black font-normal leading-[100%]">
              Do well <br />
              Do good <br />
            </p>
            <div className="flex flex-col md:flex-row justify-end">
              <img src="/images/smiley.svg" alt="smiley" height="60" width="60" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block space-y-20">
        {items.map((item, index) => (
          <div className="grid-cols-12 gap-20 grid" key={index}>
            <div key={index} className={`col-span-6 ${isOdd(index + 1) ? 'order-1' : 'order-2'}`}>
              <img src={item.image} alt={item.title} className="object-cover w-full" />
            </div>
            <div className={`col-span-6 ${isOdd(index + 1) ? 'order-2' : 'order-1'}`}>
              <h1 className="md:text-6xl text-[#111827] text-normal leading-[100%] mb-4 whitespace-pre-line">{item.title}</h1>
              <p className="text-primaryDark leading-[150%]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <MobileSlider items={items} />
      </div>
    </section>
  );
}
