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
            <div className="bg-no-repeat bg-cover bg-mobile-content sm:pb-72 md:pb-104">
              <p className="my-16 text-4xl font-bold text-center">Partners</p>
              <a href="https://www.patch.io/" target="_blank">
                <img
                  src="images/partners/patch.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>

              <a href="https://jumpcap.com/" target="_blank">
                <img
                  src="images/partners/jump.svg"
                  className="mx-auto cursor-pointer"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="https://www.newformcap.com/" target="_blank">
                <img
                  src="images/partners/nf.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://kenetic.capital/" target="_blank">
                <img
                  src="images/partners/kenetic.svg"
                  className="mx-auto cursor-pointer"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="images/partners/cake.svg"
                  className="mx-auto cursor-pointer"
                  style={{ width: 200, marginBottom: 60 }}
                />
              </a>
              <a href="https://www.thelao.io/" target="_blank">
                <img
                  src="images/partners/lao.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://impossible.finance/" target="_blank">
                <img
                  src="images/partners/imp.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="images/partners/cf.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://www.bigbrain.holdings/" target="_blank">
                <img
                  src="images/partners/bb.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://hestiainv.com/" target="_blank">
                <img
                  src="images/partners/hestia.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
              </a>
              <a href="https://www.aminocapital.com/" target="_blank">
                <img
                  src="images/partners/amino.svg"
                  className="mx-auto cursor-pointer"
                  style={{ marginBottom: 60 }}
                />
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
        <section className="-mb-36">
          <div className="flex flex-row ">
            <div className="w-2/12">
              <img src="images/partners-left.svg" />
            </div>
            <div className="w-8/12 pt-36">
              <h1 className="text-6xl font-bold text-center">Partners</h1>
              <div className="grid justify-items-stretch">
                <div className="flex flex-wrap pl-24 my-32 justify-self-center 2lg:pl-36 xl:pl-44 2xl:pl-36">
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
            <div className="flex justify-end w-2/12">
              <img className="mt-100" src="images/partners-right.svg" />
            </div>
          </div>
        </section>
        <DesktopFooter />
      </div>
    </div>
  );
}
