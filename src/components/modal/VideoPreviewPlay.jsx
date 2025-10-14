import { useEffect, useRef } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export default function VideoPreviewPlay({ isOpen, onClose, item }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
      console.log(item);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[1000] flex justify-center items-center h-screen">
      <div ref={modalRef} className="relative w-[90%] md:w-[75%] lg:w-[60%] p-4">
        <div className="flex justify-between">
          <p className="text-white text-xl font-semibold uppercase">{item.title}</p>
          <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-400 z-10">
            <LiaTimesSolid size={25} />
          </button>
        </div>
        <div className="w-full h-[30vh] md:h-[40vh] lg:h-[80vh] mt-2">
          <iframe width="100%" height="100%" src={`${item.link}&autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Video Preview"></iframe>
        </div>
      </div>
    </div>
  );
}
