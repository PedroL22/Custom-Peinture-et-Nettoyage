import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo-white2.png";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);

  return !isMobile ? (
    <div className="fixed z-20 w-full font-sans">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="w-36 h-36 object-cover mx-4"
            />
          </Link>
          <div className="flex px-10 py-12">
            <Link
              href="/"
              className="uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap"
            >
              accueil
            </Link>
            <Link
              href="/"
              className="uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap"
            >
              à propos
            </Link>
            <Link
              href="/"
              className="uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap"
            >
              projets
            </Link>
            <Link
              href="/"
              className="uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed z-20 w-full font-sans">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="w-16 h-16  object-cover mx-1"
            />
          </Link>
          <div className="flex -ml-[100vw]">
            {isOpen ? (
              <div className="flex flex-col h-screen w-screen text-center bg-gray-800">
                <div className="justify-between">
                  <div></div>
                  <IoMdClose
                    size={32}
                    className="text-white cursor-pointer float-right m-3"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <Link
                  href="/"
                  className="uppercase no-underline text-white text-2xl font-semibold mx-2 my-4"
                >
                  accueil
                </Link>
                <Link
                  href="/"
                  className="uppercase no-underline text-white text-2xl font-semibold mx-2 my-4"
                >
                  à propos
                </Link>
                <Link
                  href="/"
                  className="uppercase no-underline text-white text-2xl font-semibold mx-2 my-4"
                >
                  projets
                </Link>
                <Link
                  href="/"
                  className="uppercase no-underline text-white text-2xl font-semibold mx-2 my-4"
                >
                  contact
                </Link>
              </div>
            ) : (
              <GiHamburgerMenu
                size={32}
                className="text-white cursor-pointer m-2"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
