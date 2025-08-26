"use client";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import Image from "next/image";
import photographyData from "../../components/data/photography.json";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function Photography() {
  const data = photographyData.data;
  const [scrolling, setScrolling] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(20);

  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = new URLSearchParams(window.location.search).get("category");
    if (categoryFromQuery) {
      setActiveCategory(categoryFromQuery);
    }
  }, []);

  const filteredData = activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);
  const visibleData = filteredData.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
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
    router.push(`/photography?category=${category}`);
  };

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <NavbarAnother />
        <div className="pt-20 px-4">
          <p className="text-center text-2xl md:text-4xl font-medium text-gray-800">Photography</p>

          {/* Category buttons */}
          <div className="flex justify-center gap-3 py-[1%] flex-wrap">
            {["All", "Commercial", "Beautycare", "Corporate"].map((category) => (
              <button key={category} className={`font-medium cursor-pointer ${activeCategory === category ? "text-primary-red" : "hover:text-primary-red"}`} onClick={() => handleCategoryChange(category)}>
                {category}
              </button>
            ))}
          </div>

          {/* Photography Grid */}
          <div className="py-[1%]">
            <div className="gap-8 columns-1 md:columns-3">
              {visibleData.map((item) => (
                <div key={item.id} className="mb-4">
                  <div className="group relative">
                    {/* Image */}
                    <Image src={item.imageUrl} alt={item.name} className="object-contain w-full h-full transition-opacity" width={1000} height={1000} priority laz />
                    {/* Semi-transparent overlay on hover */}
                    <div className="absolute inset-0 bg-gray-800/40 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {/* Title in the bottom-left corner */}
                    <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-all">
                      <div>
                        <h2 className="text-xs lg:text-lg font-bold text-white uppercase">{item.name}</h2>
                        <h2 className="text-xs lg:text-lg text-white italic">{item.category}</h2>
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
