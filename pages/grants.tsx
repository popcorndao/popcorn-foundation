import MobileSlider from "components/Slider/MobileSlider";
import { isOdd } from "helpers";
import React from "react";

const items = [
  {
    title: "Environment",
    description: "We are committed to supporting activities that strengthen the conservation and protection of natural resources, advance ecological sustainability, and foster harmony between communities and the environment. We empower communities to access grants and other resources, embrace local solutions, and spur innovation in an effort to address the causes and reduce the effects of climate change and environmental degradation.",
    image: "/images/grants/environment.svg",
  },
  {
    title: `Free and Open
    Source Software`,
    description: `We support the development of free and open source software that promotes 
    fair and equitable access, creating opportunity in underserved and global communities alike.`,
    image: "/images/grants/open-source-software.svg",
  },
  {
    title: "Education",
    description: `Our goal is to strengthen the capacity of communities to support basic education and literacy, reduce gender 
    disparity in education, and increase adult literacy. We support education for all children and literacy for children and adults.`,
    image: "/images/grants/education.svg",
  },
  {
    title: "Inequality",
    description: `Our goal is to help reduce inequality and enable a life lived in dignity and with equal rights for all. To reduce inequality, 
    it is vital to overcome discrimination, shift mindsets toward a fairer distribution of resources, 
    and ensure that everyone can participate in society, politics, and the economy.`,
    image: "/images/grants/inequality.svg",
  }
];

export default function Grant(): JSX.Element {
  return (
    <section>
      <div className="grid grid-cols-12 mb-10 md:mb-20">
        <div className="col-span-12">
          <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customYellow h-full flex flex-col justify-between relative">
            <div>
              <h1 className="text-6xl text-black font-normal leading-[100%] pt-16 lg:pt-0">
                Get<br />
                Grant
              </h1>
              <p className="mt-6 w-full lg:w-[30%] text-primaryDark text-base">
                Potential beneficiaries of the Popcorn Foundation must be nominated by the Popcorn Foundation or by
                POP token holders through a multi-step beneficiary nomination process. The Foundation’s granting activity is
                focused but not limited to the following areas:  environmental, educational, inequality,
                and open-source initiatives. Once beneficiaries are accepted, they can then apply for a grant.
                Grants are delivered in three fixed-term durations: 1 month, 3 months, and 12 months.
                Contact us for more information on beneficiary criteria and the nomination process: grant@popcorn.foundation
              </p>
            </div>
            <div className="absolute left-[70%] -top-2 lg:-top-4 2lg:left-[75%]">
              <img src="/images/charity.svg" alt="charity icon" className="w-10 h-10 lg:w-[130px] lg:h-[130px]" />
            </div>
            <div className="absolute left-[80%] top-10 lg:top-[120px] 2lg:left-[85%]">
              <img src="/images/earth.svg" alt="earth icon" className="rotate-90 md:rotate-0 w-10 h-10 lg:w-[125px] lg:h-[125px]" />
            </div>
            <div className="flex flex-col items-end md:flex-row md:justify-end mt-10 md:mt-0">
              <img src="/images/thumbs.svg" alt="smiley" height="60" width="60" className="rotate-90 md:rotate-0" />
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
              <h1 className="text-6xl text-[#111827] text-normal leading-[100%] mb-4 whitespace-pre-line">{ item.title }</h1>
              <p className="text-primaryDark leading-[150%]">
                { item.description }
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <MobileSlider items={items} />
      </div>
    </section >
  );
}
