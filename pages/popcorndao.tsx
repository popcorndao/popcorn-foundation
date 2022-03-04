import { Transition } from "@headlessui/react";
import { DesktopFooter } from "components/DesktopFooter";
import { MobileExpandableMenu } from "components/MobileExpandableMenu";
import { MobileFooter } from "components/MobileFooter";
import Navbar from "components/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "react-feather";

export default function Index(): JSX.Element {
  const [menuVisible, toggleMenu] = useState<boolean>(false);

  return (
    <div className="font-landing">
      {/* MOBILE VERSION */}
      <div className="w-full h-full lg:hidden">
        <Transition
          show={menuVisible}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <MobileExpandableMenu toggleMenuVisible={toggleMenu} />
        </Transition>

        <Transition
          show={!menuVisible}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
          <header className="w-full px-8 py-6 bg-white border-b border-gray-300">
              <nav className="flex flex-row items-center justify-between">
                <div>
                  <Link href="/" passHref>
                    <a>
                      <img
                        src="/images/popLogo.png"
                        alt="Logo"
                        className="w-8 h-8 flex-grow-0 flex-shrink-0"
                      ></img>
                    </a>
                  </Link>
                </div>
                <Menu onClick={(e) => toggleMenu(true)} />
              </nav>
            </header>
            <img
              className="pb-6 px-5 mx-auto"
              style={{ marginTop: 48 }}
              src="images/rocket-mobile.svg"
            />
            <p
              className="text-4xl text-center font-bold"
              style={{ marginBottom: 32 }}
            >
              PopcornDAO
            </p>
            <p
              className="text-center font-light"
              style={{ marginLeft: 24, marginRight: 24, marginBottom: 32 }}
            >
              PopcornDAO is a decentralized autonomous organization of members
              holding Popcorn governance tokens (POP). Popcorn holders use their
              stake to vote on proposals that influence the parameters of
              Popcorn smart contracts. These members share the common goal and
              responsibility of fueling the future growth of the protocol,
              decentralizing the organization, and nurturing the mission of
              driving social impact for the public benefit in perpetuity.
            </p>
            <div className="flex justify-center">
              <a href="https://popcorn.network/" className="pb-24">
                <button
                  type="button"
                  className="border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ width: 240, height: 64, marginTop: 32 }}
                >
                  Get Involved
                </button>
              </a>
            </div>
            <MobileFooter />
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section className="w-10/12 mx-auto flex flex-row -mb-20">
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
        <DesktopFooter />
      </div>
    </div>
  );
}
