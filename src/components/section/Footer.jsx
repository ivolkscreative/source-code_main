import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="px-5 text-center md:text-left lg:px-[3%] py-[2%] bg-black text-white mt-auto hidden md:block">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-xl font-bold">iVOLKS Creative HQ</p>
            <p>contact@ivolkscreative.com</p>
            <p>(+62)-851-6157-8045 (Ahmad Pippo)</p>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-xl font-bold">Explore</p>
            <a href="/" className="text-sm">
              Home
            </a>
            <a href="/about" className="text-sm">
              About
            </a>
            <a href="/services" className="text-sm">
              Services
            </a>
            <a href="/contact" className="text-sm">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xl font-bold">Follow</p>
            <a href="https://www.instagram.com/ivolks_creative/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaInstagram />
              <p className="text-sm">ivolks_creative</p>
            </a>
            <a href="https://www.instagram.com/ivolks.studio/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaInstagram />
              <p className="text-sm">ivolks.studio</p>
            </a>
            <a href="https://www.linkedin.com/company/ivolks-creative/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaLinkedin />
              <p className="text-sm">ivolks-creative</p>
            </a>
            <a href="https://www.tiktok.com/@ivolks_creative" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaTiktok />
              <p className="text-sm">ivolks_creative</p>
            </a>
          </div>
          {/* <div className="w-3/4">
            <p className="text-xl font-bold">Production House Ivolks Creative HQ</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam iste ipsa, eligendi commodi aspernatur?</p>
          </div> */}
        </div>
        <p className="pt-[3%] uppercase font-bold text-sm">Copyright © 2024 - PT SINERGI IMAJI EKSPRESI | All Rights Reserved</p>
      </div>
      <div className="px-5 py-[5%] text-center bg-black text-white mt-auto md:hidden">
        <div className="flex justify-center items-center flex-col gap-3 w-full">
          <p className="text-2xl font-bold">Follow</p>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/ivolks_creative/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaInstagram />
              <p className="text-xs">ivolks_creative</p>
            </a>
            <a href="https://www.instagram.com/ivolks.studio/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaInstagram />
              <p className="text-xs">ivolks.studio</p>
            </a>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/company/ivolks-creative/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaLinkedin />
              <p className="text-xs">ivolks-creative</p>
            </a>
            <a href="https://www.tiktok.com/@ivolks_creative" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaTiktok />
              <p className="text-xs">ivolks_creative</p>
            </a>
          </div>
        </div>
        <p className="pt-[5%] uppercase font-bold text-sm text-center">Copyright © 2024 - PT SINERGI IMAJI EKSPRESI | All Rights Reserved</p>
      </div>
    </>
  );
}
