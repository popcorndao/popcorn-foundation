import { Transition } from "@headlessui/react";
import { DesktopFooter } from "components/DesktopFooter";
import { MobileExpandableMenu } from "components/MobileExpandableMenu";
import { MobileFooter } from "components/MobileFooter";
import Navbar from "components/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { Menu } from "react-feather";

const IndexPage = () => {
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
            <header className="w-full bg-primary">
              <Link href="https://launch.popcorn.network/" passHref>
                <a target="_window">
                  <div className="w-full h-14 bg-yellow-500 shadow-md flex justify-center cursor-pointer hover:bg-yellow-400">
                    <div className="flex flex-row items-center mx-auto">
                      <p className="text-white text-2xl font-bold">
                        Token Launch Auction
                      </p>
                      <Icon.ArrowRightCircle className="ml-2 w-7 h-7 text-white" />
                    </div>
                  </div>
                </a>
              </Link>
              <nav className="w-10/12 mx-auto pt-12 pb-3 border-b border-primaryLight flex flex-row items-center justify-between">
                <div>
                  <Link href="/" passHref>
                    <a>
                      {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                      <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-14 flex-grow-0 flex-shrink-0"
                      ></img>
                    </a>
                  </Link>
                </div>
                <Menu onClick={(e) => toggleMenu(true)} />
              </nav>
            </header>
            <section className="w-10/12 mx-auto mb-40">
              <h2 className="font-bold text-3xl mb-8 text-center mt-12">
                Get Grant
              </h2>
              <p className="text-lg font-landing text-gray-500 text-center">
                Potential beneficiaries of the Popcorn Foundation must be
                nominated by the Popcorn Foundation or by POP token holders
                through a multi-step beneficiary nomination process.
                <br />
                The Foundation’s granting activity is focused but not limited to
                the following areas: environmental, educational, inequality, and
                open-source initiatives. Once beneficiaries are accepted, they
                can then apply for a grant. Grants are delivered in three
                fixed-term durations: 1 month, 3 months, and 12 months.
                <br />
                <br />
                Contact us for more information on beneficiary criteria and the
                nomination process:{" "}
                <a
                  className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600"
                  href="mailto:grant@popcorn.foundation"
                >
                  grant@popcorn.foundation
                </a>
              </p>
            </section>
            <MobileFooter />
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section
          className="bg-popcorn1-pattern flex-shrink-0 flex-grow-0 w-full h-full xl:mb-24"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="w-10/12 mx-auto pt-20 flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-6xl xl:text-7xl leading-snug mb-8">
                Get Grant
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[800px]">
                Potential beneficiaries of the Popcorn Foundation must be
                nominated by the Popcorn Foundation or by POP token holders
                through a multi-step beneficiary nomination process.
                <br />
                <br />
                The Foundation’s granting activity is focused but not limited to
                the following areas: environmental, educational, inequality, and
                open-source initiatives. Once beneficiaries are accepted, they
                can then apply for a grant. Grants are delivered in three
                fixed-term durations: 1 month, 3 months, and 12 months.
                <br />
                <br />
                Contact us for more information on beneficiary criteria and the
                nomination process:{" "}
                <a
                  className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600"
                  href="mailto:grant@popcorn.foundation"
                >
                  grant@popcorn.foundation
                </a>
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-popcorn3-pattern flex-shrink-0 flex-grow-0 w-full h-full mt-24"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-5xl xl:text-6xl leading-snug mb-4">
                Environment
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px]">
                We are committed to supporting activities that strengthen the
                conservation and protection of natural resources, advance
                ecological sustainability, and foster harmony between
                communities and the environment. We empower communities to
                access grants and other resources, embrace local solutions, and
                spur innovation in an effort to address the causes and reduce
                the effects of climate change and environmental degradation.
              </p>
            </div>
            <div className="w-6/12 relative flex flex-row justify-end">
              <img
                src="/images/environment.png"
                alt="tree"
                className="z-10"
              ></img>
              <img
                src="/images/lightYellowPentagon.svg"
                alt="tree"
                className="z-0 absolute -ml-16 bottom-0 left-0 -mb-32"
              ></img>
            </div>
          </div>
        </section>
        <section className="bg-impact-pattern flex-shrink-0 flex-grow-0 w-full h-full impact-background mt-20">
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-7/12 2xl:w-8/12">
              <img
                src="/images/opensource.png"
                alt="tree"
                className="z-10"
              ></img>
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="font-bold text-5xl xl:text-6xl leading-snug mb-4 2xl:w-9/12">
                Free and Open Source Software
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 w-[620px]">
                We support the development of free and open source software that
                promotes fair and equitable access, creating opportunity in
                underserved and global communities alike.
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-popcorn3-pattern flex-shrink-0 flex-grow-0 w-full h-full mt-20"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-5xl xl:text-6xl leading-snug mb-4">
                Education
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px]">
                Our goal is to strengthen the capacity of communities to support
                basic education and literacy, reduce gender disparity in
                education, and increase adult literacy. We support education for
                all children and literacy for children and adults.
              </p>
            </div>
            <div className="w-6/12 relative flex flex-row justify-end">
              <img src="/images/education.png" alt="tree" className=""></img>
            </div>
          </div>
        </section>

        <section className="bg-impact-pattern flex-shrink-0 flex-grow-0 w-full h-full impact-background relative mt-20">
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-7/12 2xl:w-8/12 relative flex flex-row justify-start">
              <img src="/images/equalrights.png" alt="tree" className="z-10" />
              <img
                src="/images/secondPentagon.svg"
                alt="tree"
                className="z-0 absolute top-0 right-48 -mt-32"
              />
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="font-bold text-5xl xl:text-6xl leading-snug mb-4 2xl:w-9/12">
                Inequality
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 z-10 relative w-[620px]">
                Our goal is to help reduce inequality and enable a life lived in
                dignity and with equal rights for all. To reduce inequality, it
                is vital to overcome discrimination, shift mindsets toward a
                fairer distribution of resources, and ensure that everyone can
                participate in society, politics, and the economy.
              </p>
              <img
                src="images/smallTriangle.svg"
                alt="tree"
                className="absolute z-0 top-1/4 right-0"
              />
            </div>
          </div>
        </section>

        <DesktopFooter />
      </div>
    </div>
  );
};

export default IndexPage;
