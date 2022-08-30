import React from "react";

export default function Index(): JSX.Element {
  return (
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
  );
}
