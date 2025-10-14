import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function HomePageComponent() {
  const [opacity, setOpacity] = useState(1);
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <video className="w-full h-screen object-cover" autoPlay loop muted playsInline>
        <source src={"videos/video_ivolks_intro.mp4"} />
      </video>
      <motion.div initial="hidden" animate={{ opacity, y: 0 }} variants={variants} transition={{ duration: 0.5 }} className="absolute top-0 w-full h-full flex flex-col justify-center items-center md:gap-[10%] lg:gap-[23%]">
        <Image src={"/logo/logo_v_red.png"} className="w-[45%] md:w-[30%] lg:w-auto h-auto select-none" width={300} height={300} priority alt="Logo" />
        <div className="">
          <div className="flex flex-col md:flex-row gap-20 lg:gap-40 pt-3">
            <Link href={"/about"}>
              <button className="font-semibold uppercase py-1 px-8 md:px-6 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">About</button>
            </Link>
            <Link href={"/services"}>
              <button className="font-semibold uppercase py-1 px-6 md:px-5 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">Services</button>
            </Link>
            <Link href={"/contact"}>
              <button className="font-semibold uppercase py-1 px-6 md:px-5 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">Contact</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
