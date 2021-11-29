import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { Facebook, GitHub, Menu, Twitter } from 'react-feather';
import * as Icon from 'react-feather';
import { MobileExpandableMenu } from 'components/MobileExpandableMenu';


const IndexPage = () => {
  const router = useRouter();
  const endDate = 1638172800000; //Nov 29, 08.00.00 UTC
  const [countdown, setCountdown] = useState<number[]>([]);
  const [countdownActive, disableCountdown] = useState<boolean>(true);
  const [menuVisible, toggleMenu] = useState<boolean>(false);
  const [ctaModalVisible, toggleCtaModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (countdownActive) {
      calcAndSetCountdown();
      setInterval(function () {
        calcAndSetCountdown();
      }, 1000);
    }
  }, []);


  function calcAndSetCountdown(): void {
    const now = new Date().getTime();

    const distance = endDate - now;
    if (distance < 0) {
      disableCountdown(false);
      setCountdown([0, 0, 0, 0]);
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown([days, hours, minutes, seconds]);
  }

  return (
    <div className="font-landing">
      {/* Modal to display signup form*/}
      <Transition.Root show={ctaModalVisible} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={(e) => toggleCtaModal(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                style={{ backdropFilter: 'blur(5px)' }}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="w-full md:w-1/2 xl:w-1/3 inline-block transform transition-all align-middle">
                <form
                  action="https://network.us1.list-manage.com/subscribe/post?u=5ce5e82d673fd2cfaf12849a5&amp;id=e85a091ed3"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div
                    id="mc_embed_signup_scroll"
                    className="shadow-xl bg-white rounded-xl py-2 px-2 mt-8 w-full flex flex-col md:flex-row items-center justify-between"
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      className="w-10/12 p-2 text-base mx-4 text-gray-900"
                      id="mce-EMAIL"
                      placeholder="Email Address"
                      required
                    />
                    <div
                      style={{ position: 'absolute', left: '-5000px' }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_5ce5e82d673fd2cfaf12849a5_e85a091ed3"
                        tabIndex={-1}
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        value="Join Waitlist"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 mt-4 md:mt-0 cursor-pointer"
                        readOnly
                        onClick={(e) => {
                          toggleCtaModal(false);
                          (window as unknown as any).lintrk('track', { conversionId: '5594906'});
                          }
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* DESKTOP + TABLET VERSION */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
        
          <nav className="w-10/12 mx-auto pt-12 pb-4 border-b border-primaryLight flex flex-row items-center justify-between">
            <div>
              <Link href="/" passHref>
                <a>
                  {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                  <img
                    src="/images/textLogo.png"
                    alt="Logo"
                    className="h-12"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="space-x-8">
              <Link href="https://launch.popcorn.network/" passHref>
                <a className="font-normal text-base hover:text-blue-600">
                  Token Launch Auction
                </a>
              </Link>
              <Link href="/docs/Popcorn_whitepaper_v1.pdf" passHref>
                <a
                  className="font-normal text-base hover:text-blue-600"
                  target="_window"
                >
                  Whitepaper
                </a>
              </Link>
              <Link href="/team" passHref>
                <a className="font-normal text-base hover:text-blue-600">
                  Team & Contributors
                </a>
              </Link>
              <a
                className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl p-4 cursor-pointer"
                onClick={(e) => toggleCtaModal(true)}
              >
                Early Access
              </a>
            </div>
          </nav>
        </header>
        
        <section
          className="bg-popcorn1-pattern flex-shrink-0 flex-grow-0 w-full h-full xl:mb-24"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'left top',
          }}
        >
          <div className="w-10/12 mx-auto pt-20 flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-6xl xl:text-7xl leading-snug mb-8">
                Get Grant
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[800px]">
                Potential beneficiaries of the Popcorn Foundation must be nominated by the Popcorn Foundation or by  POP token holders through a multi-step beneficiary nomination process.
                <br /><br />
                The Foundation’s granting activity is focused but not limited to the following areas:  environmental, educational, inequality, and open-source initiatives. Once beneficiaries are accepted, they can then apply for a grant.  Grants are delivered in three fixed-term durations: 1 month, 3 months, and 12 months.
                <br /><br />
                Contact us for more information on beneficiary criteria and the nomination process: <a className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600" href="mailto:grant@popcorn.foundation">grant@popcorn.foundation</a>
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-popcorn3-pattern flex-shrink-0 flex-grow-0 w-full h-full mt-24"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'left top',
          }}
        >
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-5xl xl:text-6xl leading-snug mb-4">
                Environment
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px]">
                We are committed to supporting activities that strengthen the conservation and protection of natural resources, advance ecological sustainability, and foster harmony between communities and the environment. We empower communities to access grants and other resources, embrace local solutions, and spur innovation in an effort to address the causes and reduce the effects of climate change and environmental degradation.
              </p>
            </div>
            <div className="w-6/12 relative flex flex-row justify-end">
              <img src="/images/environment.png" alt="tree" className="z-10"></img>
              <img src="/images/lightYellowPentagon.svg" alt="tree" className="z-0 absolute -ml-16 bottom-0 left-0 -mb-32"></img>
            </div>
          </div>
        </section>
        <section className="bg-impact-pattern flex-shrink-0 flex-grow-0 w-full h-full impact-background mt-20">
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-7/12 2xl:w-8/12">
              <img src="/images/opensource.png" alt="tree" className="z-10"></img>
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="font-bold text-5xl xl:text-6xl leading-snug mb-4 2xl:w-9/12">
                Free and Open Source Software
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 w-[620px]">
                We support the development of free and open source software that promotes fair and equitable access, creating opportunity in underserved and global communities alike.
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-popcorn3-pattern flex-shrink-0 flex-grow-0 w-full h-full mt-20"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'left top',
          }}
        >
          <div className="w-10/12 mx-auto flex flex-row justify-between items-center">
            <div className="w-5/12">
              <h2 className="w-11/12 font-bold text-5xl xl:text-6xl leading-snug mb-4">
                Education
              </h2>
              <p className="text-2xl font-landing text-gray-500 w-[620px]">
                Our goal is to strengthen the capacity of communities to support basic education and literacy, reduce gender disparity in education, and increase adult literacy. We support education for all children and literacy for children and adults.
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
              <img src="/images/equalrights.png" alt="tree" className="z-10"/>
              <img src="/images/secondPentagon.svg" alt="tree" className="z-0 absolute top-0 right-48 -mt-32" />
            </div>
            <div className="w-5/12 2xl:w-4/12">
              <h2 className="font-bold text-5xl xl:text-6xl leading-snug mb-4 2xl:w-9/12">
                Inequality
              </h2>
              <p className="text-2xl font-landing text-gray-500 2xl:w-10/12 z-10 relative w-[620px]">
                Our goal is to help reduce inequality and enable a life lived in dignity and with equal rights for all. To reduce inequality, it is vital to overcome discrimination, shift mindsets toward a fairer distribution of resources, and ensure that everyone can participate in society, politics, and the economy.
              </p>
              <img src="images/smallTriangle.svg" alt="tree" className="absolute z-0 top-1/4 right-0" />
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-52">
          <div className="w-8/12 mx-auto text-center">
            <h2 className="font-bold text-4xl leading-snug mb-4">Notify Me</h2>
            <p className="text-2xl font-medium">
              Can’t wait to see you when we are launching. Get earlier
              notification to be part of our journey
            </p>
            <form
              action="https://network.us1.list-manage.com/subscribe/post?u=5ce5e82d673fd2cfaf12849a5&amp;id=e85a091ed3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div
                id="mc_embed_signup_scroll"
                className="shadow-xl bg-white rounded-xl py-2 px-2 mt-8 w-8/12 mx-auto flex flex-row items-center justify-between"
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="w-10/12 p-2 text-base mx-4 text-gray-900"
                  id="mce-EMAIL"
                  placeholder="Email Address"
                  required
                />
                <div
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_5ce5e82d673fd2cfaf12849a5_e85a091ed3"
                    tabIndex={-1}
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Join Waitlist"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 cursor-pointer"
                    readOnly
                    onClick={() => (window as unknown as any).lintrk('track', { conversionId: '5594906'})}
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="w-full bg-secondary">
          <div className="w-10/12 mx-auto flex flex-row justify-between border-b border-gray-500 pb-12">
            <div className="w-6/12">
              <Link href="/" passHref>
                <a>
                  <img src="/images/logo.png" alt="Logo" className="h-10"></img>
                </a>
              </Link>
              <p className="font-medium text-base w-7/12 py-4">
                Popcorn is a carbon-neutral crypto savings account where fees
                fund educational, environmental and open source initiatives
              </p>
              <div className="flex flex-row space-x-4 items-center">
                <Link href="https://github.com/popcorndao" passHref>
                  <GitHub className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/PopcornDAO" passHref>
                  <Facebook className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://twitter.com/Popcorn_DAO" passHref>
                  <Twitter className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                  <img
                    src="/images/discord.svg"
                    alt="discord"
                    className="w-8 h-8 cursor-pointer discord"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-medium text-base uppercase">Site</p>
              <Link href="/" passHref>
                <a className="hover:text-blue-600">Home</a>
              </Link>

              <Link href="https://medium.com/popcorndao" passHref>
                <a className="hover:text-blue-600" target="_window">
                  Blog
                </a>
              </Link>
              <Link
                href="https://etherscan.io/token/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
                passHref
              >
                <a className="hover:text-blue-600" target="_window">
                  Popcorn (POP) Token
                </a>
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-medium text-base uppercase">Connect</p>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <a className="hover:text-blue-600" target="_window">
                  Twitter
                </a>
              </Link>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <a className="hover:text-blue-600" target="_window">
                  Discord
                </a>
              </Link>
              <Link href="https://github.com/popcorndao" passHref>
                <a className="hover:text-blue-600" target="_window">
                  Github
                </a>
              </Link>
            </div>
          </div>
          <p className="font-base text-center py-4">
            ©2021, Popcorn Network. All Rights Reserved
          </p>
        </section>
      </div>
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
                Potential beneficiaries of the Popcorn Foundation must be nominated by the Popcorn Foundation or by  POP token holders through a multi-step beneficiary nomination process.
                <br />
                The Foundation’s granting activity is focused but not limited to the following areas:  environmental, educational, inequality, and open-source initiatives. Once beneficiaries are accepted, they can then apply for a grant.  Grants are delivered in three fixed-term durations: 1 month, 3 months, and 12 months.
                <br /><br />
                Contact us for more information on beneficiary criteria and the nomination process: <a className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600" href="mailto:grant@popcorn.foundation">grant@popcorn.foundation</a>
              </p>
            </section>
            <section className="w-full h-full mx-auto px-6 mb-32">

              <div className="w-full relative flex flex-row justify-center">
                <img src="/images/environment.png" alt="tree" className="z-10 w-3/4"></img>
                <img src="/images/lightYellowPentagon.svg" alt="tree" className="z-0 absolute -ml-2/3 bottom-0 left-0 -mb-2/3"></img>
              </div>
              <h2 className="font-bold text-3xl leading-snug mb-4 mt-12 text-center">
                Maximize your Crypto Portfolio
              </h2>
              <p className="text-lg font-landing text-gray-500 text-center">
                Popcorn offers a suite of DeFi products and hedge fund
                strategies for you to generate competitive returns on your
                crypto assets.
              </p>
            </section>
            <section className="w-10/12 h-full mx-auto mb-32 flex flex-col items-center">
              <img src="/images/impact.svg" alt="impact" className="w-3/4"></img>
              <h2 className="font-bold text-3xl leading-snug mb-4 mt-8 text-center w-10/12 mx-auto">
                Create Real World Impact
              </h2>
              <p className="text-lg font-landing text-gray-500 text-center">
                Our profits fund social impact organizations. Choose which
                initiatives you support:
              </p>
              <div className="w-1/2 mx-auto">
                <ul className="list-inside list-disc mt-8 space-y-2">
                  <li className="text-lg font-medium">Environment</li>
                  <li className="text-lg font-medium">Open Source</li>
                  <li className="text-lg font-medium">Education</li>
                </ul>
              </div>
            </section>
            <section className="w-10/12 h-full mx-auto mb-32 flex flex-col items-center">
              <img src="/images/tree.svg" alt="tree" className="w-3/4"></img>
              <h2 className="font-bold text-3xl leading-snug mb-4 mt-8 text-center w-10/12 mx-auto">
                While Remaining Carbon Neutral
              </h2>
              <p className="text-lg font-landing text-gray-500 text-center">
                Popcorn calculates and neutralizes blockchain carbon emissions
                by partnering with carbon sequestration and negative emission
                projects.
              </p>
            </section>
            <section className="w-full bg-secondary py-24">
              <div className="w-10/12 mx-auto text-center">
                <h2 className="font-bold text-2xl leading-snug mb-4">
                  Notify Me
                </h2>
                <p className="text-lg">
                  Can’t wait to see you when we are launching. Get earlier
                  notification to be part of our journey
                </p>
                <form
                  action="https://network.us1.list-manage.com/subscribe/post?u=5ce5e82d673fd2cfaf12849a5&amp;id=e85a091ed3"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div
                    id="mc_embed_signup_scroll"
                    className="shadow-xl bg-white rounded-xl py-2 px-2 mt-8 w-full mx-auto flex flex-row items-center justify-between"
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      className="w-10/12 p-2 text-base mx-4 text-gray-900"
                      id="mce-EMAIL"
                      placeholder="Email Address"
                      required
                    />
                    <div
                      style={{ position: 'absolute', left: '-5000px' }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_5ce5e82d673fd2cfaf12849a5_e85a091ed3"
                        tabIndex={-1}
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        value="Join Waitlist"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 cursor-pointer"
                        readOnly
                        onClick={() => (window as unknown as any).lintrk('track', { conversionId: '5594906'})}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="w-full bg-secondary">
              <div className="w-10/12 mx-auto">
                <Link href="/" passHref>
                  <a>
                    {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      className="h-10 flex-shrink-0 flex-grow-0"
                    ></img>
                  </a>
                </Link>
                <p className="font-medium text-base py-4">
                  Popcorn is a new eco-friendly paradigm for DeFi, where users
                  can earn high yield on their crypto assets while creating real
                  world impact.
                </p>
                <div className="flex flex-row space-x-4 items-center">
                  <Link href="https://github.com/popcorndao" passHref>
                    <GitHub className="hover:text-blue-600 cursor-pointer" />
                  </Link>
                  <Link href="https://www.facebook.com/PopcornDAO" passHref>
                    <Facebook className="hover:text-blue-600 cursor-pointer" />
                  </Link>
                  <Link href="https://twitter.com/Popcorn_DAO" passHref>
                    <Twitter className="hover:text-blue-600 cursor-pointer" />
                  </Link>
                  <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                    <img
                      src="/images/discord.svg"
                      alt="discord"
                      className="w-8 h-8 cursor-pointer discord"
                    ></img>
                  </Link>
                </div>
                <div className="flex flex-row justify-evenly py-6">
                  <div className="flex flex-col space-y-3 w-1/2">
                    <p className="font-medium text-base uppercase">Site</p>
                    <Link href="/" passHref>
                      <a className="hover:text-blue-600">Home</a>
                    </Link>
                    <Link href="https://medium.com/popcorndao" passHref>
                      <a className="hover:text-blue-600" target="_window">
                        Blog
                      </a>
                    </Link>
                    <Link
                      href="https://etherscan.io/token/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
                      passHref
                    >
                      <a className="hover:text-blue-600" target="_window">
                        Popcorn (POP) Token
                      </a>
                    </Link>
                    <Link href="https://launch.popcorn.network/" passHref>
                      <a className="hover:text-blue-600" target="_window">
                        Token Launch Auction
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-3 w-1/2">
                    <p className="font-medium text-base uppercase">Connect</p>
                    <Link href="https://twitter.com/Popcorn_DAO" passHref>
                      <a className="hover:text-blue-600" target="_window">
                        Twitter
                      </a>
                    </Link>
                    <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                      <a className="hover:text-blue-600" target="_window">
                        Discord
                      </a>
                    </Link>
                    <Link href="https://github.com/popcorndao" passHref>
                      <a className="hover:text-blue-600" target="_window">
                        Github
                      </a>
                    </Link>
                  </div>
                </div>
                {/*<div className="flex flex-col space-y-3">
            <p className="font-medium text-base uppercase">Documentation</p>
            <Link href="/" passHref>
              <a className="hover:text-blue-600">Gitbook</a>
            </Link>
          </div>*/}
              </div>
              <div className="w-10/12 border-t border-gray-700 mt-12 mx-auto ">
                <p className="font-base text-center py-4">
                  ©2021, Popcorn Network. All Rights Reserved
                </p>
              </div>
            </section>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default IndexPage;
