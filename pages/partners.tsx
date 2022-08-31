import React from "react";
import SliderContainer from "components/Slider";


export default function Index(): JSX.Element {
  return (
    <>
      <section className="-mb-36 hidden">
        <div className="flex flex-row ">
          <div className="w-2/12">
            <img src="images/partners-left.svg" />
          </div>
          <div className="w-8/12 pt-36">
            <h1 className="text-center text-6xl font-bold">Partners</h1>
            <div className="grid justify-items-stretch">
              <div className="justify-self-center pl-24 2lg:pl-36 xl:pl-44 2xl:pl-36 my-32 flex flex-wrap">
                <a href="https://www.patch.io/" target="_blank" className="">
                  <img
                    src="images/partners/patch.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>

                <a href="https://jumpcap.com/" target="_blank">
                  <img
                    src="images/partners/jump.svg"
                    className="cursor-pointer"
                    style={{ width: 224, marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://www.newformcap.com/" target="_blank">
                  <img
                    src="images/partners/nf.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://kenetic.capital/" target="_blank">
                  <img
                    src="images/partners/kenetic.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    src="images/partners/cake.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://www.thelao.io/" target="_blank">
                  <img
                    src="images/partners/lao.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://impossible.finance/" target="_blank">
                  <img
                    src="images/partners/imp.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    src="images/partners/cf.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://www.bigbrain.holdings/" target="_blank">
                  <img
                    src="images/partners/bb.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://hestiainv.com/" target="_blank">
                  <img
                    src="images/partners/hestia.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
                <a href="https://www.aminocapital.com/" target="_blank">
                  <img
                    src="images/partners/amino.svg"
                    className="cursor-pointer"
                    style={{ marginRight: 40, marginBottom: 60 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/12 flex justify-end">
            <img className="mt-100" src="images/partners-right.svg" />
          </div>
        </div>
      </section>
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
