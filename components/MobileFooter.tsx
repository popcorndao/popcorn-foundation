import Link from "next/link";
import { Facebook, GitHub, Twitter } from "react-feather";

export const MobileFooter: React.FC = () => {
  return (
    <div
      className="bg-mobile-footer flex-shrink-0 flex-grow-0 w-full pt-72"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section>
        <div className="w-10/12 mx-auto text-center ">
          <h2 className="font-bold text-3xl leading-snug mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-lg font-thin">
            Get the latest update straight in the inbox.
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
              className="shadow-xl bg-white rounded-xl py-2 px-2 mt-8 w-full mx-auto flex flex-row items-center justify-between mb-12"
            >
              <input
                type="email"
                name="EMAIL"
                className="w-10/12 p-2 text-base mx-4 text-gray-900 font-thin border-0"
                id="mce-EMAIL"
                placeholder="Email Address"
                required
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
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
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="font-medium text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 cursor-pointer"
                  readOnly
                  onClick={() => {}}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="w-full bg-primary">
        <div className="w-10/12 mx-auto pt-24">
          <Link href="/" passHref>
            <a>
              {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
              <img
                src="/images/logo-no-padding.svg"
                alt="Logo"
                className="h-10 flex-shrink-0 flex-grow-0"
              ></img>
            </a>
          </Link>
          <p className="font-light text-base py-4">
            Popcorn is a carbon-neutral crypto savings account where fees fund
            educational, environmental and open source initiatives.
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
                <a className="hover:text-blue-600 font-thin">Home</a>
              </Link>
              <Link href="/about" passHref>
                <a className="hover:text-blue-600 font-thin" target="_window">
                  About Us
                </a>
              </Link>
              <Link href="https://medium.com/popcorndao" passHref>
                <a className="hover:text-blue-600 font-thin" target="_window">
                  Blog
                </a>
              </Link>
            </div>
            <div className="flex flex-col space-y-3 w-1/2">
              <p className="font-medium text-base uppercase">Connect</p>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <a className="hover:text-blue-600 font-thin" target="_window">
                  Twitter
                </a>
              </Link>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <a className="hover:text-blue-600 font-thin" target="_window">
                  Discord
                </a>
              </Link>
              <Link href="https://github.com/popcorndao" passHref>
                <a className="hover:text-blue-600 font-thin" target="_window">
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
          <p className="font-thin text-center py-4">
            ©2021, Popcorn Network. All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};
