"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import VideoPreviewPlay from "@/components/modal/VideoPreviewPlay";
import workData from "../../components/data/works.json";
import { FaArrowUp } from "react-icons/fa6";

export default function WorkPageComponent() {
  const data = workData.data;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [visibleCountMobile, setVisibleCountMobile] = useState(5);
  const [scrolling, setScrolling] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const filteredData = activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);

  const visibleDataMobile = filteredData.slice(0, visibleCountMobile);

  const visibleData = filteredData.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const loadMoreMobile = () => {
    setVisibleCountMobile((prevCount) => prevCount + 5);
  };

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
      <NavbarAnother />
      <div className="pt-20">
        <p className="text-center text-2xl md:text-4xl font-medium">Works</p>
        <div className="flex justify-center gap-3 py-[1%]">
          {["All", "Corporate", "Music Video", "Movie"].map((category) => (
            <p key={category} className={`font-medium cursor-pointer ${activeCategory === category ? "text-primary-red" : "hover:text-primary-red"}`} onClick={() => setActiveCategory(category)}>
              {category}
            </p>
          ))}
        </div>
        <div>
          <div className="py-[1%]">
            {/* Mobile Section */}
            <div className="md:hidden">
              <div className="grid grid-cols-2">
                {visibleDataMobile.map((item, index) => (
                  <div key={item.id} className={`relative group overflow-hidden cursor-pointer ${(index + 1) % 5 === 0 ? "col-span-2" : ""}`} onClick={() => openModal(item)}>
                    <Image src={item.thumbnailUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" width={500} height={500} alt={item.title} />
                    <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50">
                      <h2 className="text-xs lg:text-xl font-bold z-10 text-center uppercase">{item.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCountMobile < filteredData.length && (
                <div className="flex justify-center py-4">
                  <button onClick={loadMoreMobile} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3">
                {visibleData.map((item) => (
                  <div key={item.id} className="h-[18vw] relative group overflow-hidden cursor-pointer" onClick={() => openModal(item)}>
                    <Image src={item.thumbnailUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" width={500} height={500} alt={item.title} />
                    <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300">
                      <h2 className="text-xs lg:text-xl font-bold z-10 text-center uppercase">{item.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < filteredData.length && (
                <div className="flex justify-center py-4">
                  <button onClick={loadMore} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContactBottom />
      {selectedItem && <VideoPreviewPlay isOpen={isModalOpen} onClose={() => setModalOpen(false)} item={selectedItem} />}
      {scrolling && (
        <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
