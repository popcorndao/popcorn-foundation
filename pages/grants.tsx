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

const IndexPage = () => {
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
            <section
              className="w-10/12 mx-auto "
              style={{ marginBottom: "200px" }}
            >
              <h2 className="mt-12 mb-8 text-3xl font-bold text-center">
                Get Grant
              </h2>
              <p className="text-lg font-light text-center text-gray-500 font-landing ">
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
            <section className="mb-40" style={{ height: "400px" }}>
              <div className="relative">
                <img
                  className="absolute top-0 z-0"
                  src="images/grantmobile/mobilegrantleft.svg"
                />

                <div className="absolute z-20" style={{ top: "-64px" }}>
                  <img
                    className="mx-auto"
                    src="images/grantmobile/env.png"
                    style={{ marginBottom: "64px" }}
                  />
                  <h1
                    className="text-3xl font-semibold text-center font-gray-900"
                    style={{ marginBottom: "16px" }}
                  >
                    Environment
                  </h1>
                  <div className="mx-auto sm:w-10/12">
                    <p
                      className="text-base font-light text-center text-gray-500 font-landing"
                      style={{ marginRight: "24px", marginLeft: "24px" }}
                    >
                      We are committed to supporting activities that strengthen
                      the conservation and protection of natural resources,
                      advance ecological sustainability, and foster harmony
                      between communities and the environment. We empower
                      communities to access grants and other resources, embrace
                      local solutions, and spur innovation in an effort to
                      address the causes and reduce the effects of climate
                      change and environmental degradation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-40">
              <img
                className="mx-auto"
                src="images/grantmobile/foss.png"
                style={{ marginBottom: "64px" }}
              />
              <h1
                className="text-3xl font-semibold text-center font-gray-900"
                style={{ marginBottom: "16px" }}
              >
                Free and Open Source Software
              </h1>
              <div className="mx-auto sm:w-10/12">
                <p
                  className="text-base font-light text-center text-gray-500 font-landing"
                  style={{ marginRight: "24px", marginLeft: "24px" }}
                >
                  We support the development of free and open source software
                  that promotes fair and equitable access, creating opportunity
                  in underserved and global communities alike.
                </p>
              </div>
            </section>

            <section className="" style={{ marginBottom: "264px" }}>
              <img
                className="mx-auto"
                src="images/grantmobile/ed.png"
                style={{ marginBottom: "64px" }}
              />
              <h1
                className="text-3xl font-semibold text-center font-gray-900"
                style={{ marginBottom: "16px" }}
              >
                Education
              </h1>
              <div className="mx-auto sm:w-10/12">
                <p
                  className="text-base font-light text-center text-gray-500 font-landing"
                  style={{ marginRight: "24px", marginLeft: "24px" }}
                >
                  Our goal is to strengthen the capacity of communities to
                  support basic education and literacy, reduce gender disparity
                  in education, and increase adult literacy. We support
                  education for all children and literacy for children and
                  adults.
                </p>
              </div>
            </section>

            <section className="mb-40" style={{ height: "560px" }}>
              <div className="relative">
                <img
                  className="absolute top-0 right-0 z-0"
                  src="images/grantmobile/mobilegrantright.svg"
                />

                <div className="absolute z-20" style={{ top: "-100px" }}>
                  <img
                    className="mx-auto mb-20"
                    src="images/grantmobile/inequality.png"
                  />
                  <h1
                    className="text-3xl font-semibold text-center font-gray-900 sm:mb-24"
                    style={{ marginBottom: "16px" }}
                  >
                    Inequality
                  </h1>
                  <div className="mx-auto sm:w-10/12">
                    <p
                      className="text-base font-light text-center text-gray-500 font-landing"
                      style={{ marginRight: "24px", marginLeft: "24px" }}
                    >
                      Our goal is to help reduce inequality and enable a life
                      lived in dignity and with equal rights for all. To reduce,
                      inequality it is vital to overcome discrimination, shift
                      mindsets toward a fairer distribution of resources, and
                      ensure that everyone can participate in society, politics,
                      and the economy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <MobileFooter />
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="flex-col hidden w-full h-full lg:flex">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section
          className="flex-grow-0 flex-shrink-0 w-full h-full bg-popcorn1-pattern xl:mb-24"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="flex flex-row items-center justify-between w-10/12 pt-20 mx-auto">
            <div className="w-6/12">
              <h2 className="w-11/12 mb-8 text-6xl font-bold leading-snug xl:text-7xl">
                Get Grant
              </h2>
              <p className="text-2xl font-light text-gray-500 font-landing">
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
          className="flex-grow-0 flex-shrink-0 w-full h-full mt-24 bg-popcorn3-pattern"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="flex flex-row items-center justify-between w-10/12 mx-auto">
            <div className="w-5/12">
              <h2 className="w-11/12 mb-4 text-5xl font-bold leading-snug xl:text-6xl">
                Environment
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px] font-light">
                We are committed to supporting activities that strengthen the
                conservation and protection of natural resources, advance
                ecological sustainability, and foster harmony between
                communities and the environment. We empower communities to
                access grants and other resources, embrace local solutions, and
                spur innovation in an effort to address the causes and reduce
                the effects of climate change and environmental degradation.
              </p>
            </div>
            <div className="relative flex flex-row justify-end w-6/12">
              <img
                src="/images/enivronment2.png"
                alt="tree"
                className="z-10"
              ></img>
            </div>
          </div>
        </section>
        <section className="flex-grow-0 flex-shrink-0 w-full h-full mt-20 bg-impact-pattern impact-background">
          <div className="flex flex-row items-center justify-between w-10/12 mx-auto">
            <div className="w-7/12 2xl:w-8/12">
              <img
                src="/images/opensource.png"
                alt="tree"
                className="z-10"
              ></img>
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="mb-4 text-5xl font-bold leading-snug xl:text-6xl 2xl:w-9/12">
                Free and Open Source Software
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 w-[620px]  font-light">
                We support the development of free and open source software that
                promotes fair and equitable access, creating opportunity in
                underserved and global communities alike.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex-grow-0 flex-shrink-0 w-full h-full mt-20 bg-popcorn3-pattern"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left top",
          }}
        >
          <div className="flex flex-row items-center justify-between w-10/12 mx-auto">
            <div className="w-5/12">
              <h2 className="w-11/12 mb-4 text-5xl font-bold leading-snug xl:text-6xl">
                Education
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px]  font-light">
                Our goal is to strengthen the capacity of communities to support
                basic education and literacy, reduce gender disparity in
                education, and increase adult literacy. We support education for
                all children and literacy for children and adults.
              </p>
            </div>
            <div className="relative flex flex-row justify-end w-6/12">
              <img src="/images/education.png" alt="tree" className=""></img>
            </div>
          </div>
        </section>

        <section className="relative flex-grow-0 flex-shrink-0 w-full h-full mt-20 bg-impact-pattern impact-background mb-100">
          <div className="flex flex-row items-center justify-between w-10/12 mx-auto">
            <div className="relative flex flex-row justify-start w-7/12 2xl:w-8/12">
              <img src="/images/inequality2.png" alt="tree" className="z-10" />
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="mb-4 text-5xl font-bold leading-snug xl:text-6xl 2xl:w-9/12">
                Inequality
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 z-10 relative w-[620px]  font-light">
                Our goal is to help reduce inequality and enable a life lived in
                dignity and with equal rights for all. To reduce inequality, it
                is vital to overcome discrimination, shift mindsets toward a
                fairer distribution of resources, and ensure that everyone can
                participate in society, politics, and the economy.
              </p>
              <img
                src="images/smallTriangle.svg"
                alt="tree"
                className="absolute right-0 z-0 top-1/4"
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
