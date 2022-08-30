import React from "react";

export default function Index(): JSX.Element {
  return (
    <section className="w-10/12 mx-auto flex flex-row mb-20">
      <div className="w-6/12" style={{ marginTop: 146 }}>
        <p
          className="text-gray-900 font-landing font-bold mb-10"
          style={{ fontSize: 72 }}
        >
          PopcornDAO
        </p>
        <p className="text-2xl font-light">
          PopcornDAO is a decentralized autonomous organization of members
          holding Popcorn governance tokens (POP). Popcorn holders use their
          stake to vote on proposals that influence the parameters of
          Popcorn smart contracts. These members share the common goal and
          responsibility of fueling the future growth of the protocol,
          decentralizing the organization, and nurturing the mission of
          driving social impact for the public benefit in perpetuity.
        </p>
        <a href="https://popcorn.network/" className=" cursor-pointer">
          <button
            type="button"
            className="border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-44 xl:mb-12"
            style={{ width: 240, height: 64, marginTop: 32 }}
          >
            Get Involved
          </button>
        </a>
      </div>
      <div className="w-1/12"></div>
      <div className="w-5/12" style={{ marginTop: 146 }}>
        <img className="py-5 px-5" src="images/rocket.svg" />
      </div>
    </section>
  );
}
