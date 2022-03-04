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
            <div className="bg-mobile-content bg-cover bg-no-repeat sm:pb-72 md:pb-104">
              <p className="font-bold text-4xl text-center my-16">Partners</p>
              <a href="https://www.patch.io/" target="_blank">
                <img
                  src="images/partners/patch.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>

              <a href="https://jumpcap.com/" target="_blank">
                <img
                  src="images/partners/jump.svg"
                  className="cursor-pointer mx-auto"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="https://www.newformcap.com/" target="_blank">
                <img
                  src="images/partners/nf.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://kenetic.capital/" target="_blank">
                <img
                  src="images/partners/kenetic.svg"
                  className="cursor-pointer mx-auto"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="images/partners/cake.svg"
                  className="cursor-pointer mx-auto"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="https://www.thelao.io/" target="_blank">
                <img
                  src="images/partners/lao.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://impossible.finance/" target="_blank">
                <img
                  src="images/partners/imp.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="images/partners/cf.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://www.bigbrain.holdings/" target="_blank">
                <img
                  src="images/partners/bb.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://hestiainv.com/" target="_blank">
                <img
                  src="images/partners/hestia.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://www.aminocapital.com/" target="_blank">
                <img
                  src="images/partners/amino.svg"
                  className="cursor-pointer mx-auto"
                  style={{ marginBottom: 60 }}
                />
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
        <section className="-mb-36">
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
        <DesktopFooter />
      </div>
    </div>
  );
}
