import { Transition } from "@headlessui/react";
import Burger from "components/Burger";
import { DesktopFooter } from "components/DesktopFooter";
import Menu from "components/Menu";
import { MobileExpandableMenu } from "components/MobileExpandableMenu";
import { MobileFooter } from "components/MobileFooter";
import Navbar from "components/NavBar";
import Link from "next/link";
import React, { useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../hooks";

export default function Index(): JSX.Element {
  const [menuVisible, toggleMenu] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

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
            <header className="w-full bg-white border-b border-gray-300">
              <nav className="flex flex-row items-center justify-between p-6 border-b border-primaryLight">
                <div>
                  <Link href="/" passHref>
                    <a>
                      <img
                        src="/images/logo3.svg"
                        alt="Logo"
                        className="flex-grow-0 flex-shrink-0 w-12 h-12"
                      ></img>
                    </a>
                  </Link>
                </div>
                <div ref={node}>
                  <FocusLock disabled={!open}>
                    <Burger
                      open={open}
                      setOpen={setOpen}
                      aria-controls={menuId}
                    />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                  </FocusLock>
                </div>
              </nav>
            </header>
            <div className="flex-grow-0 flex-shrink-0 w-full h-full bg-no-repeat bg-cover bg-mobile-content mb-44">
              <div className="w-11/12">
                <img src="images/landing-page-graphic.svg" />
              </div>
              <div className="w-10/12 mx-auto mt-12">
                <h1 className="text-4xl font-bold text-center text-gray-900">
                  Poporn
                </h1>
                <h1 className="pb-16 mt-3 text-4xl font-bold text-center text-gray-900">
                  Foundation
                </h1>
                <p className="pb-8 text-center text-gray-600 text-md font-extralight">
                  The Popcorn Foundation is a non-profit foundation committed to
                  advance human liberty, creativity, agency, thought and
                  well-being globally through the development of equitable and
                  humane software.
                </p>
                <p className="text-center text-gray-600 text-md font-extralight">
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
      <div className="flex-col hidden w-full h-full lg:flex">
        <header className="w-full bg-primary">
          <Navbar />
        </header>
        <div className="flex flex-row mb-48 space-between xl:mb-84 2xl:mb-104">
          <div className="w-1/12">
            <img src="images/partners-left.svg" />
          </div>
          <div className="flex flex-row w-10/12 mx-auto pt-36">
            <div className="w-6/12">
              <h1 className="text-6xl font-bold text-gray-900">Popcorn</h1>
              <h1 className="pb-16 mt-3 text-6xl font-bold">Foundation</h1>
              <p className="pb-8 text-2xl text-gray-600 font-extralight">
                The Popcorn Foundation is a non-profit foundation committed to
                advance human liberty, creativity, agency, thought and
                well-being globally through the development of equitable and
                humane software.
              </p>
              <p className="text-2xl text-gray-600 font-extralight">
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
          <div className="flex justify-end w-1/12">
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
