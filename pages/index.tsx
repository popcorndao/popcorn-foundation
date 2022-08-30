import React from "react";

export default function Index(): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row mx-auto justify-between">
      <div className="w-full lg:w-[30%]">
        <h1 className="text-6xl text-black leading-[100%] font-normal mb-4">
          Popcorn <br />
          Foundation
        </h1>
        <p className="text-base font-normal text-primaryDark pb-8">
          The Popcorn Foundation is a non-profit foundation committed to
          advance human liberty, creativity, agency, thought and
          well-being globally through the development of equitable and
          humane software.
        </p>
        <p className=" text-base font-normal text-primaryDark">
          Using a decentralized governance model, the Foundation seeks to
          build a bridge between decentralized financing and social
          impact, lower barriers, and empower all members of the Defi
          ecosystem to align their values with social impact and
          sustainability, and collectively generate and allocate funds for
          the public goods.
        </p>
      </div>
      <div className="w-full lg:w-6/12 mt-10 lg:mt-0 2lg:w-4/12">
        <div className="rounded-lg p-6 md:px-8 md:py-9 bg-customYellow h-full flex flex-row md:flex-col justify-between">
          <p className="hidden lg:block text-6xl text-black font-normal leading-[100%]">
            Yield <br />
            That <br />
            Counts <br />
          </p>
          <p className="block lg:hidden text-3xl text-black font-normal leading-[90%]">
            Connect <br />
            Stake <br />
            Do well <br />
            Do good <br />
          </p>
          <div className="flex flex-col md:flex-row justify-end">
            <img src="/images/smiley.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
