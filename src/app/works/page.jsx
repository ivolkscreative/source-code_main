"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import VideoPreviewPlay from "@/components/modal/VideoPreviewPlay";
import workData from "../../components/data/works.json";
import { FaArrowUp } from "react-icons/fa6";
import Footer from "@/components/section/Footer";
import { useRouter } from "next/navigation";

export default function WorksPage() {
  const data = workData.data;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [visibleCountMobile, setVisibleCountMobile] = useState(5);
  const [scrolling, setScrolling] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = new URLSearchParams(window.location.search).get("category");
    if (categoryFromQuery) {
      setActiveCategory(categoryFromQuery);
    }
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const filteredData = activeCategory === "All" ? data : activeCategory === "TVC/DVC" ? data.filter((item) => item.category === "TVC" || item.category === "DVC") : data.filter((item) => item.category === activeCategory);
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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Update URL with category query parameter
    router.push(`/works?category=${category}`);
  };

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div>
          <NavbarAnother />
          <div className="pt-20">
            <p className="text-center text-2xl md:text-4xl font-medium">Works</p>
            <div className="flex justify-center gap-3 py-[1%] flex-wrap">
              {/* Tambahin TVC */}
              {["All", "TVC/DVC", "Film", "Corporate", "Motion Graphics", "Music Video"].map((category) => (
                <button key={category} className={`font-medium cursor-pointer ${activeCategory === category ? "text-primary-red" : "hover:text-primary-red"}`} onClick={() => handleCategoryChange(category)}>
                  {category}
                </button>
              ))}
            </div>
            <div>
              <div className="py-[1%]">
                {/* Mobile Section */}
                <div className="md:hidden">
                  <div className="grid grid-cols-2 gap-4 px-2">
                    {visibleDataMobile.map((item) => (
                      <div key={item.id} className="h-[30vw] relative block group overflow-hidden cursor-pointer rounded-lg bg-gray-900" onClick={() => openModal(item)}>
                        <div className="relative w-full h-full">
                          {/* Show video iframe on hover */}
                          <div className="absolute inset-0 w-full h-full group-hover:block hidden">
                            <iframe
                              className="absolute inset-0 w-full h-full object-cover"
                              src={`${item.link}&autoplay=1&mute=1`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture muted"
                              allowFullScreen
                              title="Video Preview"></iframe>
                          </div>

                          {/* Image preview when not hovered */}
                          <div className={`${!item ? "hidden" : "block"}`}>
                            <Image src={item.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:opacity-0" width={500} height={500} alt={item.title} />
                          </div>

                          {/* Title */}
                          <div className="relative p-5">
                            <div className="mt-[40%]">
                              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <h2 className="text-[10px] lg:text-lg font-bold z-10 text-left uppercase text-white">{item.title}</h2>
                                <h2 className="text-[10px] lg:text-lg font-bold z-10 text-left uppercase text-white">{item.category}</h2>
                              </div>
                            </div>
                          </div>
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

                {/* Desktop Section */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-3 gap-4 px-2">
                    {visibleData.map((item) => (
                      <div
                        key={item.id}
                        className="h-[18vw] relative block group overflow-hidden cursor-pointer rounded-lg bg-gray-900"
                        onClick={() => openModal(item)} // Open modal on click
                      >
                        <div className="relative w-full h-full">
                          {/* Show video iframe on hover */}
                          <div className="absolute inset-0 w-full h-full group-hover:block hidden">
                            <iframe
                              className="absolute inset-0 w-full h-full object-cover"
                              src={`${item.link}&autoplay=1&mute=1`} // Autoplay and mute
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture muted"
                              allowFullScreen
                              title="Video Preview"></iframe>
                          </div>

                          {/* Image preview when not hovered */}
                          <div className={`${!item ? "hidden" : "block"}`}>
                            <Image src={item.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:opacity-0" width={500} height={500} alt={item.title} />
                          </div>

                          {/* Title */}
                          <div className="relative p-5">
                            <div className="mt-[40%]">
                              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <h2 className="text-xs lg:text-lg font-bold z-10 text-left uppercase text-white">{item.title}</h2>
                                <h2 className="text-xs lg:text-lg z-10 text-left text-white italic">{item.category}</h2>
                              </div>
                            </div>
                          </div>
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
        </div>
        <Footer />
      </main>
    </>
  );
}
