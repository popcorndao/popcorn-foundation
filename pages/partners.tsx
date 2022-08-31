import React from "react";
import SliderContainer from "components/Slider";


export default function Partners(): JSX.Element {
  return (
    <>
      <div className="col-span-12 md:col-span-8 md:col-start-4 ">
        <h6 className="text-3xl lg:text-6xl text-black font-normal leading-[100%] mb-10 md:mb-20">Our Partners</h6>
        <SliderContainer slidesToShow={7}>
          <img src="/images/Partners/banklessdao.png" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/ohm.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/giveth.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/newform.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/kenetic.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/bigbrainholding.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/impossiblefinance.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/cryptofoundersnetwork.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/hesticholdings.svg" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/jumpcap.png" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/theLAO.png" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
          <img src="/images/Partners/xbto.png" alt="" className="px-2 md:px-5 w-10 h-10 object-contain" />
        </SliderContainer>
      </div>
      <div className="grid grid-cols-12 mt-10 md:mt-20">
        <div className="col-span-12">
          <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customLightPurple h-full flex flex-col justify-between">
            <p className="text-3xl lg:text-6xl text-black font-normal leading-[100%]">
              Together, we <br />
              make the world <br />
              a better place. <br />
            </p>
            <div className="flex flex-col items-end md:flex-row md:justify-end mt-8 md:mt-[108px]">
              <img src="/images/smiley.svg" alt="smiley" height="60" width="60" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
