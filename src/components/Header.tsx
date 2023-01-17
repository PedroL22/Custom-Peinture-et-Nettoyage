import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo-white2.png";

export default function Header() {
  return (
    <div className="fixed z-10 w-full">
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
              className="uppercase no-underline text-white text-2xl font-semibold mx-2"
            >
              accueil
            </Link>
            <p className="uppercase no-underline text-white text-2xl font-semibold mx-2">
              à propos
            </p>
            <p className="uppercase no-underline text-white text-2xl font-semibold mx-2">
              projets
            </p>
            <p className="uppercase no-underline text-white text-2xl font-semibold mx-2">
              contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
