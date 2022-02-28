import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Facebook, GitHub, Twitter } from "react-feather";
import { XIcon } from "@heroicons/react/solid";

interface MobileExpandableMenuProps {
  toggleMenuVisible: (boolean) => void;
}

export const MobileExpandableMenu: React.FC<MobileExpandableMenuProps> = ({
  toggleMenuVisible,
}) => {
  const router = useRouter();

  return (
    <div className="fixed h-full overflow-y-scroll z-10 nav-width mobile-menu-bg">
      <div className="relative w-full min-h-screen h-full transition-opacity duration-1000 ease-in-out ">
        <div className="w-screen px-6 mx-auto nav-animation">
        <div className="grid justify-items-stretch">
            <XIcon
              onClick={() => toggleMenuVisible(false)}
              className="mt-8 mb-2 text-white justify-self-end"
              style={{ width: 24, height: 24 }}
            />
          </div>
          <div className="pt-5 flex flex-col divide-y divide-white divide-opacity-50">
            <Link href="/about" passHref>
              <a>
                <h1
                  className={`${
                    router.pathname === "/about"
                      ? "text-gray-700"
                      : "text-white"
                  } ml-3 text-4xl font-bold hover:text-gray-700 font-landing py-5 border-t border-white border-opacity-50`}
                >
                  About Us
                </h1>
              </a>
            </Link>
            <Link href="/grants" passHref>
              <a>
                <h1
                  className={`${
                    router.pathname === "/grants"
                      ? "text-gray-700"
                      : "text-white"
                  } ml-3 text-4xl font-bold hover:text-gray-700 font-landing py-5`}
                >
                  Get Grant
                </h1>
              </a>
            </Link>
            <Link href="/ideas" passHref>
              <a>
                <h1
                  className={`${
                    router.pathname === "/ideas"
                      ? "text-gray-700"
                      : "text-white"
                  } ml-3 text-4xl font-bold hover:text-gray-700 font-landing py-5`}
                >
                  Ideas
                </h1>
              </a>
            </Link>
            <Link href="/popcorndao" passHref>
              <a>
                <h1
                  className={`${
                    router.pathname === "/popcorndao"
                      ? "text-gray-700"
                      : "text-white"
                  } ml-3 text-4xl font-bold hover:text-gray-700 font-landing py-5`}
                >
                  Popcorn DAO
                </h1>
              </a>
            </Link>
            <Link href="/partners" passHref>
              <a>
                <h1
                  className={`${
                    router.pathname === "/partners"
                      ? "text-gray-700"
                      : "text-white"
                  } ml-3 text-4xl font-bold hover:text-gray-700 font-landing py-5`}
                >
                  Partners
                </h1>
              </a>
            </Link>
          </div>

          <div className="grid w-full grid-cols-4 mx-auto py-5 justify-items-center border-t border-b border-white border-opacity-50 mt-6 mb-5">
            <div>
              <Link href="https://github.com/popcorndao" passHref>
                <GitHub
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/PopcornDAO" passHref>
                <Facebook
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <Twitter
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <img
                  src="/images/discord-white-thick.svg"
                  alt="discord"
                  className="text-white cursor-pointer discord"
                  style={{ width: 33, height: 33 }}
                ></img>
              </Link>
            </div>
          </div>
          <div className="flex flex-row py-6 justify-evenly">
            <div className="flex flex-col w-1/2 space-y-3">
              <p className="text-base text-white uppercase font-bold">Site</p>
              <Link href="/" passHref>
                <a className="text-xl text-white font-medium">Home</a>
              </Link>
              <Link href="https://medium.com/popcorndao" passHref>
                <a className="text-xl text-white font-medium" target="_window">
                  Blog
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-1/2 ml-20 space-y-3">
              <p className="text-base text-white uppercase font-bold">
                Connect
              </p>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <a className="text-xl text-white font-medium" target="_window">
                  Twitter
                </a>
              </Link>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <a className="text-xl text-white font-medium" target="_window">
                  Discord
                </a>
              </Link>
              <Link href="https://github.com/popcorndao" passHref>
                <a className="text-xl text-white font-medium" target="_window">
                  Github
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col mt-10 space-y-3" style={{paddingBottom: 100}}>
            <p className="text-base font-bold text-white uppercase font-landing">
              Documentation
            </p>
            <Link href="/" passHref>
              <a className="text-xl text-white text-semibold">Gitbook</a>
            </Link> 
          </div> */}
        </div>
      </div>
    </div>
  );
};
