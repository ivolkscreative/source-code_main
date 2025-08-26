import { FaArrowUp } from "react-icons/fa6";
import NavbarAnother from "../navigation/NavbarAnother";
import Client from "../section/Client";
import Image from "next/image";
import ContactBottom from "../section/ContactBottom";

export default function AboutPageComponent() {
  return (
    <div>
      <NavbarAnother />
      <div className="relative">
        <Image
          src={"https://images.unsplash.com/photo-1602696538772-97543c359260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="w-full h-screen object-cover"
          width={1000}
          height={1000}
          alt="Background Contact"
          priority
        />
        <div className="absolute inset-0 text-white flex w-full items-center px-[7%]">
          <div className="flex flex-col lg:gap-4 text-center md:text-left">
            <h1 className="font-bold text-base lg:text-4xl uppercase">
              We Provide All The <span className="text-2xl lg:text-5xl text-primary-red">Creative</span> Needs
            </h1>
            <p className="text-base lg:text-4xl font-bold uppercase">From Developing The Idea, Production and Post Studio</p>
          </div>
        </div>
      </div>
      <div className="py-[5%] px-[7%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">WHAT WE DO</h2>
            <p className="mb-4">
              We provide all the creative needs from developing the idea, production, and post-studio. Such as making the film, advertising, campaign, video, graphic design, editing video offline/online, sound design, photography service,
              and many more. We are committed to delivering original work with professionalism and creativity.
            </p>
            <p>Derived from the Indonesian word (Kita means us), we strive to work together to explore and create your ideas. We believe that crafting a story with engagement will strengthen the audience&apos;s values.</p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full flex items-center">
                <div className="w-1 h-full bg-yellow-400"></div>
              </div>
              <ul className="space-y-4 text-lg font-semibold">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Media Promotion
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Company Profile
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Music Video
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Infographic / Animation Videos
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Film / Webseries
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  TVC & Digital Video
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Documentary & Travelling Video
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  Aerial Video & Drone Operator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[4%] px-[7%]">
        <p className="text-3xl font-semibold">Key People</p>
        <div className="pt-[2%] grid grid-cols-2 lg:flex gap-3">
          <div className="relative group cursor-pointer">
            <Image
              src={"https://images.unsplash.com/photo-1699282022178-293b6658b45d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              className="grayscale transition-all duration-300 h-44"
              width={200}
              height={500}
              priority
              alt="Key People 1"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-xl font-bold">People 1</span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src={"https://images.unsplash.com/photo-1699282022178-293b6658b45d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              className="grayscale transition-all duration-300 h-44"
              width={200}
              height={500}
              priority
              alt="Key People 2"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-xl font-bold">People 2</span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src={"https://images.unsplash.com/photo-1699282022178-293b6658b45d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              className="grayscale transition-all duration-300 h-44"
              width={200}
              height={500}
              priority
              alt="Key People"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-xl font-bold">People 3</span>
            </div>
          </div>
        </div>
        <div className="pt-[4%] flex gap-2"></div>
        <p className="text-3xl font-semibold">Key Talent</p>
        <div className="pt-[2%] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {talents.slice(0, isMobile ? visibleCount : talents.length).map((talent, index) => (
            <div key={index} className="relative group cursor-pointer">
              <Image src={talent.src} className="grayscale transition-all duration-300 h-44" width={500} height={500} priority alt={talent.text} />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-xl font-bold">{talent.text}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {isMobile && visibleCount < talents.length && (
          <div className="flex justify-center mt-4">
            <button onClick={handleLoadMore} className="bg-primary-red text-white py-2 px-4 rounded">
              Load More
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center py-[3%] gap-5">
        <p className="text-xl md:text-3xl font-extrabold text-center">Groups</p>
        {/* List Client */}
        <div className="flex gap-5 md:gap-12 justify-center">
          <Image src={"/group/fifgroup2.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="Group 1" priority />
          <Image src={"/group/fifgroup2.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="Group 1" priority />
          <Image src={"/group/fifgroup2.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="Group 1" priority />
        </div>
      </div>
      <Client />
      <ContactBottom />
      {scrolling && (
        <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
