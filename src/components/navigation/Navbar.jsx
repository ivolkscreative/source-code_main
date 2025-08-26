"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo/logo_white.png");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
      setLogoSrc("/logo/logo_black.png");
    } else {
      setNavbar(false);
      setLogoSrc("/logo/logo_white.png");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => {
      window.removeEventListener("scroll", scrollNavbar);
    };
  }, []);

  return (
    <header className={`${navbar ? "bg-primary-white shadow-md" : "bg-transparent"} fixed top-0 w-full transition-all duration-300 z-50`}>
      <nav className="px-[3%] py-5">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logoSrc} draggable="false" className="w-auto" width={100} height={100} priority alt="Ivolks Creative" />
          </Link>
          <div className="block md:hidden">
            <button onClick={() => setIsModalOpen(true)}>
              <IoMenu className={`text-3xl font-bold uppercase cursor-pointer ${navbar ? "text-gray-500" : "text-primary-white"} hover:text-primary-red`} />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {[
              { title: "Home", href: "/" },
              { title: "Works", href: "/works" },
              { title: "About", href: "/about" },
              { title: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className={`text-lg font-bold uppercase cursor-pointer ${navbar ? "text-gray-500" : "text-primary-white"} hover:text-primary-red`}>
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
