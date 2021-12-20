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
                        src="/images/logo.png"
                        alt="Logo"
                        className="flex-grow-0 flex-shrink-0 h-14"
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
            <img
              className="px-5 pb-6 mx-auto"
              style={{ marginTop: 48 }}
              src="images/rocket-mobile.svg"
            />
            <p
              className="text-4xl font-bold text-center"
              style={{ marginBottom: 32 }}
            >
              PopcornDAO
            </p>
            <p
              className="font-light text-center"
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
                  className="text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
      <div className="flex-col hidden w-full h-full lg:flex">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section className="flex flex-row w-10/12 mx-auto -mb-20">
          <div className="w-6/12" style={{ marginTop: 146 }}>
            <p
              className="mb-10 font-bold text-gray-900 font-landing"
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
            <a href="https://popcorn.network/" className="cursor-pointer ">
              <button
                type="button"
                className="text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-44 xl:mb-12"
                style={{ width: 240, height: 64, marginTop: 32 }}
              >
                Get Involved
              </button>
            </a>
          </div>
          <div className="w-1/12"></div>
          <div className="w-5/12" style={{ marginTop: 146 }}>
            <img className="px-5 py-5" src="images/rocket.svg" />
          </div>
        </section>
        <DesktopFooter />
      </div>
    </div>
  );
}
