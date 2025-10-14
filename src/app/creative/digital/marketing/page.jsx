"use client";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUp, FaCalendarCheck, FaListCheck } from "react-icons/fa6";

export default function CreativeDigitalMarketing() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div>
          <NavbarAnother />
          <div className="pt-[16%] md:pt-[5%] lg:pt-[3%]">
            <Image src={"/creativedigitalmarketing/banner.png"} className="w-full h-auto lg:h-screen object-cover" width={10000} height={10000} alt="Banner CDM" priority />
          </div>
          <div className="pt-[8%] px-[5%] md:pt-[5%] md:px-[3%]">
            <h1 className="text-2xl md:text-4xl font-bold border-b-2 pb-[1%] w-fit">Creative Digital Marketing</h1>
            <div className="mt-[2%] grid md:grid-cols-2 gap-5 md:gap-10">
              <p className="text-lg font-medium text-justify">
                We specialize in crafting innovative digital marketing strategies that connect with your audience and drive results. From compelling content and social media management to targeted ads and SEO optimization, we help your
                business stand out in a crowded digital world.
              </p>
              <p className="text-lg font-medium text-justify">
                Our team of experts combines creativity with data-driven insights to deliver solutions that are as effective as they are engaging. Whether you&apos;re a startup or an established brand, we tailor our services to meet your
                unique needs
              </p>
            </div>
          </div>
          <div className="py-[8%] px-[5%] md:py-[5%] md:px-[3%]">
            <div className="flex justify-center">
              <h1 className="text-2xl md:text-4xl font-bold pb-[1%] text-center w-fit">Services</h1>
            </div>
            <div className="pt-[3%] flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300 cursor-pointer">
                  <FaCalendarCheck className="text-3xl" />
                </div>
                <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Strategic Marketing Planning</div>
              </div>
              <div className="relative flex flex-col items-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300 cursor-pointer">
                  <FaListCheck className="text-3xl" />
                </div>
                <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Social Media Management</div>
              </div>
            </div>
          </div>
          <ContactBottom />
          {scrolling && (
            <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
              <FaArrowUp />
            </button>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
