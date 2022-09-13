import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import NavbarLink from "../Navigation/NavBarLinks";
import {
  DiscordIcon,
  TelegramIcon,
  MediumIcon,
  RedditIcon,
  YoutubeIcon,
  TwitterIcon,
} from "../Vectors"

interface IToggleMenuProps {
  menuVisible: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

const ToggleMenu: FC<IToggleMenuProps> = ({ menuVisible, toggleMenu }) => (
  <div className="flex items-center space-x-4">
    <button
      className="text-gray-500 w-10 relative focus:outline-none bg-white"
      onClick={() => toggleMenu(!menuVisible)}
    >
      <div className="block w-10">
        <span
          aria-hidden="true"
          className={`block h-1 w-10 bg-black transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "rotate-45 translate-y-1" : "-translate-y-2.5"
            }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block h-1 w-10 bg-black transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block h-1 w-10 bg-black transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "-rotate-45 -translate-y-1" : "translate-y-2.5"
            }`}
        ></span>
      </div>
    </button>
  </div>
)



export const MobileMenu: React.FC = () => {
  const [menuVisible, toggleMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    toggleMenu(false);
  }, [router?.pathname]);

  return (
    <>
      <div className="flex flex-row justify-between items-center h-full">
        <div>
          <Link href="/" passHref>
            <a>
              <img src="/images/popLogo.svg" alt="Logo" className="w-10 h-10" />
            </a>
          </Link>
        </div>
        <ToggleMenu menuVisible={menuVisible} toggleMenu={toggleMenu} />
      </div>
      <Transition.Root show={menuVisible} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => toggleMenu(false)}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-x-0 top-20 bottom-0 max-w-full flex bg-white">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen">
                  <div className="h-full w-full flex flex-col justify-between pt-18 px-6 shadow-xl bg-white overflow-y-scroll">
                    <div className="flex flex-col w-full">
                      <div className="pt-6 pb-6">
                        <NavbarLink label="Popcorn Foundation" url="/" isActive={router.pathname === "/"} />
                      </div>
                      <div className="py-6">
                        <NavbarLink
                          label="About"
                          url="/about"
                          isActive={router.pathname === "about"}
                        />
                      </div>
                      <div className="py-6">
                        <NavbarLink
                          label="Partners"
                          url="/partners"
                          isActive={router.pathname === "/partners"}
                        />
                      </div>
                      <div className="py-6">
                        <NavbarLink
                          label="Ideas"
                          url="/ideas"
                          isActive={router.pathname === "/ideas"}
                        />
                      </div>
                      <div className="py-6">
                        <NavbarLink
                          label="Grants"
                          url="/grants"
                          isActive={router.pathname === "/grants"}
                        />
                      </div>
                      <div className="py-6">
                        <NavbarLink
                          label="PopcornDAO"
                          url="/popcorndao"
                          isActive={router.pathname === "/popcorndao"}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-12 mt-12">
                        <div className="col-span-6">
                          <p className="text-gray-900 font-medium leading-6 tracking-1">Site</p>
                          <div className="flex flex-col">
                            <Link href="/">
                              <a href="" className="text-primary leading-6 mt-4">
                                Home
                              </a>
                            </Link>
                            <Link href="/about">
                              <a href="" className="text-primary leading-6 mt-4">
                                About
                              </a>
                            </Link>
                            <Link href="/partners">
                              <a href="" className="text-primary leading-6 mt-4">
                                Partners
                              </a>
                            </Link>
                          </div>
                        </div>

                        <div className="col-span-6">
                          <p className="text-gray-900 font-medium leading-6 tracking-1 opacity-0">site</p>
                          <div className="flex flex-col">
                            <Link href="/ideas">
                              <a href="" className="text-primary leading-6 mt-4">
                                Ideas
                              </a>
                            </Link>
                            <Link href="/grants">
                              <a href="" className="text-primary leading-6 mt-4">
                                Grants
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between pb-12 mt-11">
                        <a href="https://twitter.com/Popcorn_DAO">
                          <TwitterIcon color={"#645F4B"} size={"30"} />
                        </a>
                        <a href="https://discord.gg/w9zeRTSZsq">
                          <DiscordIcon color={"#645F4B"} size={"30"} />
                        </a>
                        <a href="https://t.me/popcorndaochat">
                          <TelegramIcon color={"#645F4B"} size={"30"} />
                        </a>
                        <a href="https://medium.com/popcorndao">
                          <MediumIcon color={"#645F4B"} size={"30"} />
                        </a>
                        <a href="https://www.reddit.com/r/popcorndao/">
                          <RedditIcon color={"#645F4B"} size={"30"} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCe8n8mGG4JR7nhFT4v9APyA">
                          <YoutubeIcon color={"#645F4B"} size={"30"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
