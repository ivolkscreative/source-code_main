import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

export default function NavbarMobile({ isOpen, onClose }) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transform transition duration-[400ms]"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform duration-[400ms] transition ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full">
      <div className="fixed inset-0 z-50">
        <div className="bg-primary-white w-full h-full px-[4%] py-[7%] overflow-auto text-black" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-semibold">Menu</p>
            <RxCross2 onClick={onClose} className="text-4xl cursor-pointer" />
          </div>
          <nav className="flex flex-col gap-10 text-3xl text-center font-medium justify-center items-center h-[75%]">
            <ul className="space-y-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Image src="/logo/logo_black.png" alt="Ivolks Creative" width={100} height={100} className="w-auto h-auto" priority />
          </div>
        </div>
      </div>
    </Transition>
  );
}
