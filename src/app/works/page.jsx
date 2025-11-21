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
  // Sort data by ID in descending order (newest first)
  const sortedData = [...workData.data].sort((a, b) => b.id - a.id);
  
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

  // Filter logic using sorted data
  const filteredData = activeCategory === "All" 
    ? sortedData 
    : activeCategory === "TVC/DVC" 
    ? sortedData.filter((item) => item.category === "TVC" || item.category === "DVC") 
    : sortedData.filter((item) => item.category === activeCategory);
    
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count when changing category
    setVisibleCountMobile(5);
    router.push(`/works?category=${category}`);
  };

  // Reusable WorkItem component
  const WorkItem = ({ item, isMobile = false }) => (
    <div
      className={`${isMobile ? 'h-[30vw]' : 'h-[18vw]'} relative block group overflow-hidden cursor-pointer rounded-lg bg-gray-900`}
      onClick={() => openModal(item)}
    >
      <div className="relative w-full h-full">
        {/* Video iframe on hover */}
        <div className="absolute inset-0 w-full h-full group-hover:block hidden">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={`${item.link}&autoplay=1&mute=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${item.title} Preview`}
          />
        </div>

        {/* Thumbnail image */}
        <Image
          src={item.thumbnailUrl}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:opacity-0"
          width={500}
          height={500}
          alt={item.title}
        />

        {/* Title overlay */}
        <div className="relative p-5">
          <div className="mt-[40%]">
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <h2 className={`${isMobile ? 'text-[10px]' : 'text-xs'} lg:text-lg font-bold z-10 text-left uppercase text-white`}>
                {item.title}
              </h2>
              <h2 className={`${isMobile ? 'text-[10px]' : 'text-xs'} lg:text-lg z-10 text-left text-white italic`}>
                {item.category}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <NavbarAnother />
        <div className="pt-20">
          <p className="text-center text-2xl md:text-4xl font-medium">Works</p>
          
          {/* Category filters */}
          <div className="flex justify-center gap-3 py-[1%] flex-wrap">
            {["All", "TVC/DVC", "Film", "Corporate", "Motion Graphics", "Music Video", "AI Project"].map((category) => (
              <button
                key={category}
                className={`font-medium cursor-pointer transition-colors ${
                  activeCategory === category ? "text-primary-red" : "hover:text-primary-red"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="py-[1%]">
            {/* Mobile Section */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-4 px-2">
                {visibleDataMobile.map((item) => (
                  <WorkItem key={item.id} item={item} isMobile={true} />
                ))}
              </div>
              {visibleCountMobile < filteredData.length && (
                <div className="flex justify-center py-4">
                  <button
                    onClick={loadMoreMobile}
                    className="px-4 py-2 text-white bg-primary-red rounded-md hover:bg-red-700 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Section */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-4 px-2">
                {visibleData.map((item) => (
                  <WorkItem key={item.id} item={item} />
                ))}
              </div>
              {visibleCount < filteredData.length && (
                <div className="flex justify-center py-4">
                  <button
                    onClick={loadMore}
                    className="px-4 py-2 text-white bg-primary-red rounded-md hover:bg-red-700 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <ContactBottom />
        {selectedItem && (
          <VideoPreviewPlay
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            item={selectedItem}
          />
        )}
        
        {scrolling && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
      <Footer />
    </main>
  );
}