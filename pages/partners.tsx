import React from "react";

export default function Index(): JSX.Element {
  return (
    <section className="-mb-36">
      <div className="flex flex-row ">
        <div className="w-2/12">
          <img src="images/partners-left.svg" />
        </div>
        <div className="w-8/12 pt-36">
          <h1 className="text-center text-6xl font-bold">Partners</h1>
          <div className="grid justify-items-stretch">
            <div className="justify-self-center pl-24 2lg:pl-36 xl:pl-44 2xl:pl-36 my-32 flex flex-wrap">
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
        <div className="w-2/12 flex justify-end">
          <img className="mt-100" src="images/partners-right.svg" />
        </div>
      </div>
    </section>
  );
}
