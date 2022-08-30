import React from "react";

export default function PopcornDao(): JSX.Element {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3">
        <h1 className="text-6xl text-black leading-[100%] font-normal mb-4">
          PopcornDAO
        </h1>
        <p className="text-base font-normal text-primaryDark pb-8">
          PopcornDAO is a decentralized autonomous
          organization of members holding
          Popcorn governance tokens (POP). Popcorn
          holders use their stake to vote on proposals
          that influence the parameters of
          Popcorn smart contracts. These members
          share the common goal and responsibility
          of fueling the future growth of the protocol,
          decentralizing the organization, and nurturing
          the mission of driving social impact for
          the public benefit in perpetuity.
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 md:col-end-13 mt-12 md:mt-0">
        <div className="rounded-lg p-6 md:px-8 md:py-9 bg-pink h-full flex flex-col justify-between">
          <p className="text-3xl lg:text-6xl text-black font-normal leading-[100%]">
            Enjoy noble yield <br />
            while creating <br />
            real world impact <br />
          </p>
          <div className="flex flex-col items-end md:flex-row md:justify-end mt-8 md:mt-[108px]">
            <img src="/images/smiley.svg" alt="" height="60" width="60" />
          </div>
        </div>
      </div>
    </div>
  );
}
