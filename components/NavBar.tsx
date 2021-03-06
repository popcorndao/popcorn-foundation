import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavbarLink from "./NavBarLinks";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="flex h-32 bg-white">
      <div className="flex flex-row items-center w-10/12 mx-auto justify-between">
        <div>
          <Link href="/" passHref>
            <a>
              <img src="/images/logo2.png" alt="Logo" className="h-10" />
            </a>
          </Link>
        </div>
        <ul className="flex flex-row space-x-8 2lg:space-x-16">
          <li>
            <NavbarLink
              label="About"
              url="/about"
              isActive={router.pathname === "/about"}
            />
          </li>
          <li>
            <NavbarLink
              label="Partners"
              url="/partners"
              isActive={router.pathname === "/partners"}
            />
          </li>
          <li>
            <NavbarLink
              label="Ideas"
              url="/ideas"
              isActive={router.pathname === "/ideas"}
            />
          </li>
          <li>
            <NavbarLink
              label="Grants"
              url="/grants"
              isActive={router.pathname === "/grants"}
            />
          </li>

          <li>
            <NavbarLink
              label="PopcornDAO"
              url="/popcorndao"
              isActive={router.pathname === "/popcorndao"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
