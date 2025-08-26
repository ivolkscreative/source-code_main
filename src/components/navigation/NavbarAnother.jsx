"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";

export default function NavbarAnother() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full transition-all duration-300 z-20 bg-white">
      <nav className="px-[3%] py-5">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={"/logo/logo_black.png"} className="w-auto" draggable="false" width={100} height={100} alt="Ivolks Creative" priority />
          </Link>
          <div className="block md:hidden">
            <button onClick={() => setIsModalOpen(true)}>
              <IoMenu className="text-3xl font-bold uppercase cursor-pointer  text-gray-500 hover:text-primary-red" />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {[
              { title: "Home", href: "/" },
              { title: "About", href: "/about" },
              { title: "Services", href: "/services" },
              { title: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className={`text-lg font-bold uppercase cursor-pointer ${pathname === item.href ? "text-primary-red" : "text-gray-500"} hover:text-primary-red`}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <NavbarMobile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
