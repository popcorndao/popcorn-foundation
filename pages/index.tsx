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
            <div
              className="bg-mobile-content bg-cover bg-no-repeat flex-shrink-0 flex-grow-0 w-full
          h-full mb-44"
            >
              <div className="w-11/12">
                <img src="images/landing-page-graphic.svg" />
              </div>
              <div className="w-10/12 mx-auto mt-12">
                <h1 className="text-4xl font-bold text-gray-900 text-center">
                  Popcorn
                </h1>
                <h1 className="text-4xl font-bold mt-3 pb-16 text-gray-900 text-center">
                  Foundation
                </h1>
                <p className="text-md font-extralight text-gray-600 pb-8 text-center">
                  The Popcorn Foundation is a non-profit foundation committed to
                  advance human liberty, creativity, agency, thought and
                  well-being globally through the development of equitable and
                  humane software.
                </p>
                <p className=" text-md font-extralight text-gray-600 text-center">
                  Using a decentralized governance model, the Foundation seeks
                  to build a bridge between decentralized financing and social
                  impact, lower barriers, and empower all members of the Defi
                  ecosystem to align their values with social impact and
                  sustainability, and collectively generate and allocate funds
                  for the public goods.
                </p>
              </div>
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
        <div className="flex flex-row space-between mb-48 xl:mb-84 2xl:mb-104">
          <div className="w-1/12">
            <img src="images/partners-left.svg" />
          </div>
          <div className="w-10/12 pt-36  flex flex-row mx-auto">
            <div className="w-6/12">
              <h1 className="text-6xl font-bold text-gray-900">Popcorn</h1>
              <h1 className="text-6xl font-bold mt-3 pb-16">Foundation</h1>
              <p className="text-2xl font-extralight text-gray-600 pb-8">
                The Popcorn Foundation is a non-profit foundation committed to
                advance human liberty, creativity, agency, thought and
                well-being globally through the development of equitable and
                humane software.
              </p>
              <p className=" text-2xl font-extralight text-gray-600">
                Using a decentralized governance model, the Foundation seeks to
                build a bridge between decentralized financing and social
                impact, lower barriers, and empower all members of the Defi
                ecosystem to align their values with social impact and
                sustainability, and collectively generate and allocate funds for
                the public goods.
              </p>
            </div>
            <div className="w-6/12 -mr-24">
              <img src="images/landing-page-graphic.svg" />
            </div>
          </div>
          <div className="w-1/12 flex justify-end">
            <img className="mt-100" src="images/partners-right.svg" />
          </div>
        </div>
        <div className="lg:-mt-275">
          <DesktopFooter />
        </div>
      </div>
    </div>
  );
}
