import Link from "next/link";
import { Facebook, GitHub, Twitter } from "react-feather";

export const DesktopFooter: React.FC = () => {
  return (
    <section className="w-full">
      <div
        className="bg-footer flex-shrink-0 flex-grow-0 w-full h-full pt-60"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-10/12 mx-auto text-center ">
          <h2 className="font-semibold text-5xl leading-snug mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-2xl  font-light">
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
              className="w-7/12 shadow-xl bg-white rounded-xl py-2 px-2 mt-10  mx-auto flex flex-row items-center justify-between"
            >
              <input
                type="email"
                name="EMAIL"
                className="w-10/12 p-2 text-base mx-4 text-gray-900 font-light border-0"
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

        <div className="bg-primary">
          <div
            className="w-10/12 mx-auto grid grid-cols-2"
            style={{ paddingTop: 147 }}
          >
            <div>
              <Link href="/" passHref>
                <a>
                  {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                  <img
                    src="/images/popcornlogo2.svg"
                    alt="Logo"
                    className="h-10 flex-shrink-0 flex-grow-0"
                  ></img>
                </a>
              </Link>
              <div className="mt-8 flex flex-row space-x-4 items-center">
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
            <div className="bg-primary flex flex-row justify-evenly py-6">
              <div className="flex flex-col space-y-3 w-1/2">
                <p className="font-medium text-base uppercase">Site</p>
                <Link href="/" passHref>
                  <a className="hover:text-blue-600 font-landing font-light">
                    Home
                  </a>
                </Link>
                <Link href="https://medium.com/popcorndao" passHref>
                  <a
                    className="hover:text-blue-600 font-light"
                    target="_window"
                  >
                    Blog
                  </a>
                </Link>
                <Link
                  href="https://etherscan.io/token/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
                  passHref
                >
                  <a
                    className="hover:text-blue-600 font-light"
                    target="_window"
                  >
                    Popcorn (POP) Token
                  </a>
                </Link>
                <Link href="https://launch.popcorn.network/" passHref>
                  <a
                    href="https://launch.popcorn.network/"
                    className="hover:text-blue-600 cursor-pointer font-light"
                    target="_window"
                  >
                    Token Launch Auction
                  </a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3 w-1/2">
                <p className="font-medium text-base uppercase">Connect</p>

                <a
                  href="https://twitter.com/Popcorn_DAO"
                  className="hover:text-blue-600 cursor-pointer font-light"
                  target="_window"
                >
                  Twitter
                </a>

                <a
                  href="https://discord.gg/w9zeRTSZsq"
                  className="hover:text-blue-600 cursor-pointer font-light"
                  target="_window"
                >
                  Discord
                </a>

                <a
                  href="https://github.com/popcorndao"
                  className="hover:text-blue-600 cursor-pointer  font-light"
                  target="_window"
                >
                  Github
                </a>
              </div>
              <div className="flex flex-col space-y-6 w-1/2">
                <p className="font-medium text-base uppercase ">Contact Us</p>
                <Link href="mailto:info@popcorn.foundation" passHref>
                  <a className="hover:text-blue-600 font-light">
                    info@popcorn.foundation
                  </a>
                </Link>

                <p className="font-medium text-base uppercase">Documentation</p>
                <Link href="" passHref>
                  <a className="hover:text-blue-600  font-light">Gitbook</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-primary w-10/12 border-t border-gray-700 mt-12 mx-auto ">
            <p className="font-semibold font-base text-center pt-8 pb-12">
              ©2021, Popcorn Network. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
