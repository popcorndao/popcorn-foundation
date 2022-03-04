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
            <h1
              className="text-center text-4xl font-bold"
              style={{ marginTop: 52, marginBottom: 48 }}
            >
              Our Values
            </h1>
            <img className="mx-auto" src="images/about-mobile/diversity.svg" />
            <h1
              className="text-gray-900 text-3xl text-center"
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Diversity & Inclusion
            </h1>
            <p
              className="font-light text-gray-500 w-11/12 mx-auto text-center"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                marginBottom: 120,
              }}
            >
              This is DeFi for the People. We believe in breaking down social
              and cultural barriers by creating a welcoming community to anyone
              who is interested in creating positive social impact through DeFi.
            </p>

            <img
              className="mx-auto"
              src="images/about-mobile/accessibility.svg"
            />
            <h1
              className="text-gray-900 text-3xl text-center"
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Accessibility
            </h1>
            <p
              className="font-light text-gray-500 w-11/12 mx-auto text-center"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                marginBottom: 120,
              }}
            >
              Our products, our community, our communications, and our goals are
              friendly, transparent, relatable, easy to understand, and easy to
              use.
            </p>

            <img className="mx-auto" src="images/about-mobile/leadership.svg" />
            <h1
              className="text-gray-900 text-3xl text-center"
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Community
            </h1>
            <p
              className="font-light text-gray-500 w-11/12 mx-auto text-center"
              style={{
                fontSize: "24px",
                lineHeight: "32px",

                marginBottom: 120,
              }}
            >
              We look to foster empathy, collaboration, interconnection, and a
              non-rivalrous approach in all spheres, and intend to influence
              global systems as such. We understand that we benefit when
              everyone benefits
            </p>

            <img className="mx-auto" src="images/about-mobile/agency.svg" />
            <h1
              className="text-gray-900 text-3xl text-center"
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Agency
            </h1>
            <p
              className="font-light text-gray-500 text-center w-11/12 mx-auto"
              style={{
                fontSize: "24px",
                lineHeight: "32px",

                marginBottom: 120,
              }}
            >
              We believe that DeFi is a new financial system that gives
              individuals and communities the tools to embed individual and
              community agency.
            </p>

            <img className="mx-auto" src="images/about-mobile/community.svg" />
            <h1
              className="text-gray-900 text-3xl text-center"
              style={{
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Leadership
            </h1>
            <p
              className="font-light text-gray-500 text-center w-11/12 mx-auto"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                marginBottom: 120,
              }}
            >
              We aim to be leaders in our communities, in the DeFi and Web3
              space, in the Social Impact sector, and in our lives.
            </p>

            <MobileFooter />
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section className="w-10/12 mx-auto" style={{ paddingTop: 120 }}>
          <h1
            className="text-gray-900 font-landing font-bold"
            style={{ fontSize: 72 }}
          >
            Our Values
          </h1>

          <div className="flex flex-row">
            <div className="w-1/2 my-auto">
              <img src="/images/about/diversity.svg" />
            </div>
            <div className="w-1/2 my-auto ml-40">
              <h1
                className="text-gray-900"
                style={{
                  fontWeight: 600,
                  fontSize: "64px",
                  marginBottom: "16px",
                }}
              >
                Diversity & Inclusion
              </h1>
              <p
                className="font-light text-gray-900"
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                This is DeFi for the People. We believe in breaking down social
                and cultural barriers by creating a welcoming community to
                anyone who is interested in creating positive social impact
                through DeFi.
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 my-auto">
              <h1
                className="text-gray-900"
                style={{
                  fontWeight: 600,
                  fontSize: "64px",
                  marginBottom: "16px",
                }}
              >
                Accessibility
              </h1>
              <p
                className="font-light text-gray-900 w-10/12"
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                Our products, our community, our communications, and our goals
                are friendly, transparent, relatable, easy to understand, and
                easy to use.
              </p>
            </div>
            <div className="w-1/2 my-auto">
              <img src="/images/about/accessibility.svg" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 my-auto">
              <img src="/images/about/community.svg" />
            </div>
            <div className="w-1/2 my-auto  ml-40">
              <h1
                className="text-gray-900"
                style={{
                  fontWeight: 600,
                  fontSize: "64px",
                  marginBottom: "16px",
                }}
              >
                Community
              </h1>
              <p
                className="font-light text-gray-900"
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                We look to foster empathy, collaboration, interconnection, and a
                non-rivalrous approach in all spheres, and intend to influence
                global systems as such. We understand that we benefit when
                everyone benefits
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 my-auto">
              <h1
                className="text-gray-900"
                style={{
                  fontWeight: 600,
                  fontSize: "64px",
                  marginBottom: "16px",
                }}
              >
                Agency
              </h1>
              <p
                className="font-light text-gray-900 w-10/12"
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                We believe that DeFi is a new financial system that gives
                individuals and communities the tools to embed individual and
                community agency.
              </p>
            </div>
            <div className="w-1/2 my-auto">
              <img src="/images/about/agency.svg" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 my-auto">
              <img src="/images/about/leadership.svg" />
            </div>
            <div className="w-1/2 my-auto  ml-40">
              <h1
                className="text-gray-900"
                style={{
                  fontWeight: 600,
                  fontSize: "64px",
                  marginBottom: "16px",
                }}
              >
                Leadership
              </h1>
              <p
                className="font-light text-gray-900"
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                We aim to be leaders in our communities, in the DeFi and Web3
                space, in the Social Impact sector, and in our lives.
              </p>
            </div>
          </div>
        </section>
        <DesktopFooter />
      </div>
    </div>
  );
}
