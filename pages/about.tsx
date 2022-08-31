import AboutMobileSlider from "components/Slider/AboutMobileSlider";
import React from "react";

export default function About(): JSX.Element {
  return (
    <section>
      <div className="grid grid-cols-12 mb-10 lg:mb-20">
        <div className="col-span-12 lg:col-span-6 mb-10 kg:mb-0">
          <h1 className="text-6xl text-black text-normal leading-[100%]">Our Values</h1>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customLightGreen h-full flex flex-row md:flex-col justify-between min-h-[228px] lg:min-h-[400px]">
            <p className="text-3xl lg:text-6xl text-black font-normal leading-[100%]">
              Do well <br />
              Do good <br />
            </p>
            <div className="flex flex-col md:flex-row justify-end">
              <img src="/images/smiley.svg" alt="smiley" height="60" width="60" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid-cols-12 gap-20 hidden md:grid">
        {/* diversity and inclusions */}
        <div className="col-span-6">
          <img src="/images/about/diversity.svg" alt="diversity and inclusion" className="object-cover w-full" />
        </div>
        <div className="col-span-6">
          <h1 className="text-6xl text-black text-normal leading-[100%] mb-4">Diversity &amp; Inclusion</h1>
          <p className="text-primaryDark leading-[150%]">
            This is DeFi for the People. We believe in breaking down social and cultural barriers by creating a welcoming community
            to anyone who is interested in creating positive social impact through DeFi.
          </p>
        </div>

        {/* accessibility */}
        <div className="col-span-6">
          <h1 className="text-6xl text-black text-normal leading-[100%] mb-4">Accessibility</h1>
          <p className="text-primaryDark leading-[150%]">
            Our products, our community, our communications, and our goals are friendly,
            transparent, relatable, easy to understand, and easy to use.
          </p>
        </div>
        <div className="col-span-6">
          <img src="/images/about/accessibility.svg" alt="accessibility" className="object-cover w-full" />
        </div>
        

        {/* community */}
        <div className="col-span-6">
          <img src="/images/about/community.svg" alt="community" className="object-cover w-full" />
        </div>
        <div className="col-span-6">
          <h1 className="text-6xl text-black text-normal leading-[100%] mb-4">Community</h1>
          <p className="text-primaryDark leading-[150%]">
            We look to foster empathy, collaboration, interconnection, and a non-rivalrous approach in all spheres,
            and intend to influence global systems as such. We understand that we benefit when everyone benefits
          </p>
        </div>

        {/* agency */}
        <div className="col-span-6">
          <h1 className="text-6xl text-black text-normal leading-[100%] mb-4">Agency</h1>
          <p className="text-primaryDark leading-[150%]">
            We believe that DeFi is a new financial system that gives individuals and communities 
            the tools to embed individual and community agency.
          </p>
        </div>
        <div className="col-span-6">
          <img src="/images/about/agency.svg" alt="Agency" className="object-cover w-full" />
        </div>

        {/* leadership */}
        <div className="col-span-6">
          <img src="/images/about/leadership.svg" alt="leadership" className="object-cover w-full" />
        </div>
        <div className="col-span-6">
          <h1 className="text-6xl text-black text-normal leading-[100%] mb-4">Leadership</h1>
          <p className="text-primaryDark leading-[150%]">
            We aim to be leaders in our communities, in the DeFi and Web3 space, 
            in the Social Impact sector, and in our lives.
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <AboutMobileSlider isThreeX />
      </div>
    </section>
  );
}
