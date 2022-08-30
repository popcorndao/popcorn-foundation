import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarLink from "./NavBarLinks";

export const DesktopMenu = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full z-30 h-full">
      <div>
        <Link href="/" passHref>
          <a>
            <img src="/images/popLogo.svg" alt="Popcorn logo" className="w-10 h-10" />
          </a>
        </Link>
      </div>
      <ul className="flex space-x-8 2lg:space-x-16">
        <li>
          <NavbarLink
            label="Popcorn Foundation"
            url="/"
            isActive={router.pathname === "/"}
          />
        </li>
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
  )
}
