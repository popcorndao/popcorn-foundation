import { Transition } from "@headlessui/react";
import Burger from "components/Burger";
import { DesktopFooter } from "components/DesktopFooter";
import Menu from "components/Menu";
import { MobileExpandableMenu } from "components/MobileExpandableMenu";
import { MobileFooter } from "components/MobileFooter";
import Navbar from "components/NavBar";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ArrowRightCircle } from "react-feather";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../hooks";

interface Article {
  image: string;
  date: string;
  title: string;
  content: string;
  url: string;
}

const Articles: Article[] = [
  {
    image: "highlight _ image.png",
    date: "Nov 18, 2021",
    title:
      "Popcorn Brings Philanthropy to DeFi by Joining Crypto Climate Accord and Partnering with Vanderbilt Blockchain.",
    content: `Popcorn, a philanthropy-focused DeFi yield-generating platform, has partnered with both the Crypto Climate Accord and Vanderbilt University to enable POP users to earn yields on their crypto assets and make a real-world impact simultaneously. Popcorn recently joined the Crypto Climate Accord (CCA), a private sector-led proposal for the entire crypto community focused on decarbonizing the cryptocurrency and blockchain industry in record time. Based on the Paris Climate Agreement, the CCA’s overall objective is to decarbonize the global crypto industry by prioritizing climate stewardship and supporting the industry’s transition to net-zero greenhouse gas emissions by 2040.`,
    url: "https://www.sarsonfunds.com/popcorn-brings-philanthropy-to-defi-by-joining-crypto-climate-accord-and-partnering-with-vanderbilt-blockchain/",
  },
  {
    image: "post _ image-3.png",
    date: "Oct 27, 2021",
    title: "Giving USA: What does it mean for the global SVP community?",
    content: `I’m excited to share with you a briefing by Sofia Michelakis, Deputy Director of the Bill & Melinda Gates Foundation, along with her colleague Alena Owen, who serves as Associate Program Officer on the Philanthropic Partnerships team. Sofia provides additional context as a board member for SVP International as well as a long-standing SVP partner.
    For those of you wondering about international data, the collection methods internationally vary considerably, making comparative data country to country often nonexistent. Where data is more available, other differences in systemic support — like universal healthcare as an example — makes comparison to the function of the U.S. philanthropic sector non-parallel.`,
    url: "https://www.socialventurepartners.org/2021/10/27/giving-usa-what-does-it-mean-for-the-global-svp-community/",
  },
  {
    image: "post _ image.png",
    date: "Oct 26, 2021",
    title: "Greenwashing vs. Eco-authenticity",
    content: `“The last best hope for the world”
    The annual UN Climate Summit COP26 is here and just about all the media headlines I see read: “COP26 is the last best hope for the world”.
    But is it?
    There is no denying that time is running out for climate action. Despite the same big powers of the world signing the 2015 Paris Accord, their countries have continued burning fossil fuels and chopping down trees at rates incompatible with the Paris Accord’s goals. The very richest countries, those who are most responsible for polluting the atmosphere, are now experiencing extreme and often deadly consequences caused by extreme weather conditions. As Shikha Bhasin from the Council on Energy, Environment, and Water (CEEW) put it: “Over the last two decades, we’ve gone from facing the climate challenge to living in a state of climate emergency”.`,
    url: "https://medium.com/popcorndao/climate-change-greenwashing-and-authenticity-5bb4cb24f310",
  },
  {
    image: "post _ image-5.png",
    date: "Oct 26, 2021",
    title: "Popcorn to support Rhino Ark Foundation in a social media campaign",
    content: `Popcorn is planning a social media campaign on “Defi for Good” with the help of PopAmbassadors/social media influencers to benefit a community-based project in restoring nature to the Kenyan Eburu Forest.`,
    url: "https://forum.popcorn.network/t/popcorn-to-support-rhino-ark-foundation-in-a-social-media-campaign/70",
  },
  {
    image: "post _ image-2.png",
    date: "Aug 19, 2021",
    title:
      "Two megatrends to watch in the next decade: Sustainability and Web3.0",
    content: `Since leaving the day to day operations of my Ed-tech startup Careerfoundry, I have set up WildWildVentures, a Microincubator with currently two ventures, which now affords me an underrated commodity in life - thinking time. 
    While thinking about how the world will look like tomorrow, I have become very excited about sustainability and Web 3.0.
    `,
    url: "https://www.linkedin.com/pulse/two-megatrends-watch-next-decade-sustainability-web30-raffaela-rein/?trackingId=iZiNLocphL09pO9xLO6TWg%3D%3D",
  },
  {
    image: "post _ image-1.png",
    date: "Aug, 2021",
    title: "Cryptocurrency and philanthropy",
    content: `Despite significant volatility over its 13-year history, cryptocurrency has become a financial phenomenon—with the value of a single Bitcoin growing to an all-time high of more than $66,000 in October 2021. Cryptocurrency adoption continues to grow, despite its reputation for unpredictability. It is increasingly common to see cryptocurrencies as an option to pay for goods and services—and yes, even charitable giving. But even as they become part of everyday transactions, many individuals, businesses, regulators and other institutions are on a learning curve as they try to keep up with the breakneck pace at which the landscape is shifting.
    `,
    url: "https://www.fidelitycharitable.org/insights/cryptocurrency-and-philanthropy.html?immid=Soc_L1364",
  },
  {
    image: "post _ image-4.png",
    date: "Aug, 2021",
    title: "What is Cryptocurrency? (And Other Crypto Terms You Should Know)",
    content: `From “lambo” to “sats,” the language of cryptocurrency is endlessly creative and evolving. We’ve put together a glossary of the most popular, essential, and amusing jargon, terms, shorthands, and slang.`,
    url: "https://thegivingblock.com/resources/crypto-glossary/?utm_campaign=Newsletter&utm_medium=email&_hsmi=175285952&utm_content=175285952&utm_source=hs_email",
  },
];

const DesktopIdeasCard = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      className="relative z-10 transition duration-500 ease-in-out transform cursor-pointer drop-shadow-3xl hover:scale-102"
    >
      <div className="mb-16">
        <img className="mb-10" src={`images/ideas/${article.image}`} />

        <p className="mb-2 text-xl font-semibold text-gray-500">
          {article.date}
        </p>
        <p
          className="mb-8 font-semibold text-gray-900 line-clamp-2"
          style={{ fontSize: "30px" }}
        >
          {article.title}
        </p>
        <p
          className="font-light text-gray-600 line-clamp-5"
          style={{ fontSize: "20px" }}
        >
          {article.content}
        </p>

        <div className="flex flex-row mt-4 ">
          <p
            className="mr-4 font-light text-blue-600"
            style={{ fontSize: "20px" }}
          >
            Read the full article
          </p>

          <ArrowRightCircle className="my-auto text-blue-600" />
        </div>
      </div>
    </a>
  );
};

const MobileIdeasCard = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      className="relative z-10 transition duration-500 ease-in-out transform cursor-pointer drop-shadow-3xl hover:scale-102"
    >
      <div className="mx-auto mb-24" style={{ width: "83vw" }}>
        <img
          className="object-cover mx-auto mb-12"
          style={{ width: "83vw", height: "69vw", borderRadius: "40px" }}
          src={`images/ideas/${article.image}`}
        />
        <p className="mb-2 text-xl font-semibold text-gray-500">
          {article.date}
        </p>
        <p
          className="mb-4 font-semibold text-gray-900 line-clamp-2"
          style={{ fontSize: "30px" }}
        >
          {article.title}
        </p>
        <p
          className="font-light text-gray-600 line-clamp-5"
          style={{ fontSize: "20px" }}
        >
          {article.content}
        </p>

        <div className="flex flex-row mt-4 ">
          <p
            className="mr-4 font-light text-blue-600"
            style={{ fontSize: "20px" }}
          >
            Read the full article
          </p>

          <ArrowRightCircle className="my-auto text-blue-600" />
        </div>
      </div>
    </a>
  );
};

const IndexPage = () => {
  const [menuVisible, toggleMenu] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="font-landing">
      {/* MOBILE VERSION */}
      <div className="w-full h-full md:hidden">
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
                        src="/images/logo.png"
                        alt="Logo"
                        className="flex-grow-0 flex-shrink-0 h-14"
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
            <section className="w-10/12 mx-auto mt-12 mb-24">
              <h2 className="mb-8 text-3xl font-bold text-center">Ideas</h2>
              <p className="text-lg font-light text-center text-gray-500 font-landing ">
                Read the latest stories and insights from us and those we
                support.
              </p>
            </section>
            <section className="mb-40">
              <div className="relative">
                <img
                  className="absolute z-0 top-80"
                  src="images/grantmobile/mobilegrantleft.svg"
                />
                <img
                  className="absolute right-0 z-0 bottom-1/3"
                  src="images/grantmobile/mobilegrantright.svg"
                />
                <div className="ml-4 mr-4">
                  {Articles.map((article) => (
                    <MobileIdeasCard article={article} />
                  ))}
                </div>
              </div>
            </section>

            <MobileFooter />
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="flex-col hidden w-full h-full md:flex">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section className="flex-grow-0 flex-shrink-0 w-full h-full mb-24">
          <div className="flex flex-row items-center justify-between w-10/12 pt-20 mx-auto">
            <div className="w-6/12">
              <h2 className="w-11/12 mb-8 text-6xl font-bold leading-snug xl:text-7xl">
                Ideas
              </h2>
              <p className="text-2xl font-light text-gray-500 font-landing">
                Read the latest stories and insights from us and those we
                support.
              </p>
            </div>
          </div>
        </section>

        <section className="flex-grow-0 flex-shrink-0 w-full h-full mb-60 xl:mb-84 2xl:mb-100">
          <div className="flex flex-row items-start justify-between w-10/12 mx-auto">
            <div className="relative mb-36" style={{ width: "47%" }}>
              <a
                href={Articles[0].url}
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  className="absolute z-10 w-full transition duration-500 ease-in-out transform cursor-pointer drop-shadow-3xl hover:scale-102"
                  src={`images/ideas/${Articles[0].image}`}
                />
                <img
                  className="absolute z-0 -right-60 top-36"
                  src={`images/ideas/ideas-bg-1.svg`}
                />
              </a>
            </div>

            <div className="z-10 w-6/12">
              <p className="mb-4 text-2xl font-semibold text-gray-500">
                {Articles[0].date}
              </p>
              <p
                className="mb-8 font-semibold text-gray-900 line-clamp-2"
                style={{ fontSize: "48px" }}
              >
                {Articles[0].title}
              </p>
              <p
                className="font-light text-gray-600 line-clamp-5"
                style={{ fontSize: "24px" }}
              >
                {Articles[0].content}
              </p>

              <div className="flex flex-row mt-4 ">
                <a
                  href={Articles[0].url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <p
                    className="mr-4 font-light text-blue-600"
                    style={{ fontSize: "24px" }}
                  >
                    Read the full article
                  </p>
                </a>
                <a
                  href={Articles[0].url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <ArrowRightCircle className="mt-1 text-blue-600 " />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex-grow-0 flex-shrink-0 w-full h-full mb-48">
          <p
            className="w-10/12 mx-auto mb-24 font-semibold text-gray-900 line-clamp-2"
            style={{ fontSize: "48px" }}
          >
            Latest Update
          </p>
          <div className="z-10 grid w-10/12 gap-16 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Articles.slice(1).map((article) => (
              <DesktopIdeasCard article={article} />
            ))}
          </div>
          <img
            src="images/smallTriangle.svg"
            alt="tree"
            className="absolute right-0 z-0 -bottom-84"
          />
          <img
            src="images/ideas/ideas-bg-low-left.svg"
            alt="tree"
            className="absolute z-0 -bottom-0 left-5"
          />
        </section>

        <DesktopFooter />
      </div>
    </div>
  );
};

export default IndexPage;
