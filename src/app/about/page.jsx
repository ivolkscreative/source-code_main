"use client";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function AboutPage() {
  const [scrolling, setScrolling] = useState(false);
  const [visibleCountTab, setVisibleCountTab] = useState(4);
  const [visibleCountMobile, setVisibleCountMobile] = useState(4);

  const CardDescription = ({ person }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="text-center mt-2">
        <p className={`font-semibold ${isExpanded ? "" : "line-clamp-1"} cursor-pointer`} onClick={() => setIsExpanded(!isExpanded)}>
          {person.name}
        </p>
        <p>{person.position}</p>
      </div>
    );
  };

  const founders = [
    {
      name: "Dr. Satrio Pamungkas, S.Sn.,M.Sn.",
      position: "Founder",
      imageUrl: "/profile/leader/Satrio Pamungkas.jpg",
      instagramUrl: "https://www.instagram.com/satriopepo/",
    },
    {
      name: "Erik Ferdian",
      position: "Founder",
      imageUrl: "/profile/leader/Erik Ferdian.JPG",
      instagramUrl: "https://www.instagram.com/erfr/",
    },
    {
      name: "Riefian Fajarsyah",
      position: "CO-Founder",
      imageUrl: "/profile/leader/Riefian Fajarsyah.jpg",
      instagramUrl: "https://www.instagram.com/ifanseventeen/",
    },
  ];

  const teams = [
    {
      name: "Ahmad Pippo",
      position: "Project Manager",
      imageUrl: "/profile/team/Ahmad Pippo.JPG",
      instagramUrl: "https://www.instagram.com/sam.pipps/",
    },
    {
      name: "Asep Lukmanul",
      position: "Visual Supervisor",
      imageUrl: "/profile/team/Asep Lukmanul.JPG",
      instagramUrl: "https://www.instagram.com/eaudesave",
    },
    {
      name: "Jokodin Sukowi",
      position: "Project Manager",
      imageUrl: "/profile/team/Jokodin.jpg",
      instagramUrl: "https://www.instagram.com/jokodin/",
    },
  ];

  const internships_vol_1 = [
    {
      name: "Alia Eka Putri",
      imageUrl: "/profile/internship/Vol1/ALIA EKA PUTRI.jpg",
      instagramUrl: "https://www.instagram.com/2992pm/",
    },
    {
      name: "Jonathan Mepal Jeffry Napitulu",
      imageUrl: "/profile/internship/Vol1/Jonathan Mepal Jefry Napitupulu.jpg",
      instagramUrl: "https://www.instagram.com/jonathan_napitupulu_/",
    },
    {
      name: "Muhammad Rifqi Prayoga Rusli",
      imageUrl: "/profile/internship/Vol1/Muh Rifqi Prayoga Rusli .jpg",
      instagramUrl: "https://www.instagram.com/rifqiyoga_/)",
    },
    {
      name: "Marsya Haliza Syafei",
      imageUrl: "/profile/internship/Vol1/MARSYA HALIZA SYAFEI.jpg",
      instagramUrl: "https://www.instagram.com/marsyahlzsf/",
    },
    {
      name: "Sitatun Attoyibah",
      imageUrl: "/profile/internship/Vol1/SITATUN ATTOYIBAH.jpg",
      instagramUrl: "https://www.instagram.com/ssttorii/",
    },
    {
      name: "Tharsius Celviano Ully",
      imageUrl: "/profile/internship/Vol1/Tharsius Celviano Ully.jpg",
      instagramUrl: "https://www.instagram.com/tharsiuscelviano29/",
    },
    {
      name: "Zidan Verdian Windoe",
      imageUrl: "/profile/internship/Vol1/Zidan Verdian Windoe.jpg",
      instagramUrl: "https://www.instagram.com/zidanwindoe/",
    },
  ];

  const internships_vol_2 = [
    {
      name: "Ahmad Fathin",
      imageUrl: "/profile/internship/Vol2/Ahmad Fathin.jpg",
      instagramUrl: "https://www.instagram.com/ahmdft._/",
    },
    {
      name: "Alia Eka Putri",
      imageUrl: "/profile/internship/Vol2/Alia Eka Putri.jpg",
      instagramUrl: "https://www.instagram.com/2992pm/",
    },
    {
      name: "Firheyzi Resca Dirgantoro",
      imageUrl: "/profile/internship/Vol2/Firheyzi Resca Dirgantoro.jpg",
      instagramUrl: "https://www.instagram.com/firheyzi/",
    },
    {
      name: "Jonathan Mepal Jeffry Napitulu",
      imageUrl: "/profile/internship/Vol2/Jonathan Mepal Jeffry Napitupulu.jpg",
      instagramUrl: "https://www.instagram.com/jonathan_napitupulu_/",
    },
    {
      name: "Kezia Mageline",
      imageUrl: "/profile/internship/Vol2/Kezia Mageline.jpg",
      instagramUrl: "https://www.instagram.com/kmageline/)",
    },
    {
      name: "Muhammad Rifqi Prayoga Rusli",
      imageUrl: "/profile/internship/Vol2/Rifqi Prayoga.jpg",
      instagramUrl: "https://www.instagram.com/rifqiyoga_/)",
    },
    {
      name: "Marsya Haliza Syafei",
      imageUrl: "/profile/internship/Vol2/Marsya Haliza Syafei.jpg",
      instagramUrl: "https://www.instagram.com/marsyahlzsf/",
    },
    {
      name: "Mohamad Fajri Alviansyah",
      imageUrl: "/profile/internship/Vol2/Mohamad Fajri Alviansyah_.jpg",
      instagramUrl: "https://www.instagram.com/Fajrialvn_/",
    },
    {
      name: "Rizki Azkia",
      imageUrl: "/profile/internship/Vol2/Rizki Azkia.jpg",
      instagramUrl: "https://www.instagram.com/rzkizkia/",
    },
    {
      name: "Sitatun Attoyibah",
      imageUrl: "/profile/internship/Vol2/Sitatun Attoyibah.jpg",
      instagramUrl: "https://www.instagram.com/ssttorii/",
    },
    {
      name: "Tharsius Celviano Ully",
      imageUrl: "/profile/internship/Vol2/Tharsius Celviano Ully.jpg",
      instagramUrl: "https://www.instagram.com/tharsiuscelviano29/",
    },
    {
      name: "Theodora Zaneta Putri",
      imageUrl: "/profile/internship/Vol2/Theodora Zaneta Putri.jpg",
      instagramUrl: "https://www.instagram.com/tzanetaptr/",
    },
    {
      name: "Zefanya Eleora ferdian",
      imageUrl: "/profile/internship/Vol2/Zefanya Eleora ferdian.jpg",
      instagramUrl: "https://www.instagram.com/zefanyaeleora_/",
    },
    {
      name: "Zidan Verdian Windoe",
      imageUrl: "/profile/internship/Vol2/Zidan Verdian Windoe.jpg",
      instagramUrl: "https://www.instagram.com/zidanwindoe/",
    },
  ];

  const loadMoreTabV1 = () => {
    setVisibleCountTab((prevCount) => prevCount + 4);
  };

  const loadMoreMobileV1 = () => {
    setVisibleCountMobile((prevCount) => prevCount + 4);
  };

  const loadMoreTabV2 = () => {
    setVisibleCountTab((prevCount) => prevCount + 4);
  };

  const loadMoreMobileV2 = () => {
    setVisibleCountMobile((prevCount) => prevCount + 4);
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
      <main className="flex flex-col min-h-screen">
        <div>
          <NavbarAnother />
          <div className="px-[5%] pt-[25%] md:pt-[20%] lg:pt-[11%]">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="md:w-1/2">
                <Image src="/about/about_us.png" width={1000} height={1000} className="w-full rounded-lg h-full" alt="About us" quality={100} priority />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-left uppercase text-primary-red font-bold text-xs lg:text-sm">About Us</h1>
                <p className="font-bold py-[2%] text-xl lg:text-2xl">We turn concepts into reality, ready to tackle all your creative needs from idea inception to production</p>
                <p className="text-left md:text-sm lg:text-base">
                  iVOLKS Creative is a creative house based in Jakarta, Indonesia. Our team of passionate creatives specializes in crafting visually stories through <span className="font-bold">Video Production</span> (film, TVC, DVC, Music
                  video, company profile, motion graphic and animation, documentary), <span className="font-bold">Photography</span>, <span className="font-bold">Creative Media Plan</span>, <span className="font-bold">Post House</span> and
                  more. Let us be you partner in unleashing the full potential of your vision and captivating your audience with uniqe and compelling narrative.
                </p>
              </div>
            </div>
          </div>

          {/* Our Leaders iVolks Section */}
          <div className="py-[10%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Leader</h2>
            {/* Dekstop Section */}
            <div className="hidden lg:block">
              <div className="pt-[2%] flex gap-3">
                <div className="overflow-x-auto w-full py-4">
                  <div className="flex space-x-10">
                    {founders.map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                        </a>
                        <div className="text-center mt-2">
                          <p className="font-semibold">{person.name}</p>
                          <p>{person.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Tablet Section */}
            <div className="hidden md:block lg:hidden">
              <div className="pt-[2%] flex gap-3">
                <div className="overflow-x-auto w-full py-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-full space-x-10">
                      {founders.slice(0, 2).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {founders.slice(2, 3).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Section */}
            <div className="md:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {founders.map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full aspect-square object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                        </a>
                        <CardDescription person={person} />
                        {/* <div className="text-center mt-2">
                          <p className="font-semibold line-clamp-1">{person.name}</p>
                          <p>{person.position}</p>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Team</h2>
            {/* Dekstop Section */}
            <div className="hidden lg:block">
              <div className="pt-[2%] flex gap-3">
                <div className="overflow-x-auto w-full py-4">
                  <div className="flex space-x-10">
                    {teams.map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                        </a>
                        <div className="text-center mt-2">
                          <p className="font-semibold">{person.name}</p>
                          <p>{person.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Tablet Section */}
            <div className="hidden md:block lg:hidden">
              <div className="pt-[2%] flex gap-3">
                <div className="overflow-x-auto w-full py-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-full space-x-10">
                      {teams.slice(0, 2).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {teams.slice(2, 3).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Section */}
            <div className="md:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {teams.map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full aspect-square object-cover rounded-lg hover:grayscale" width={300} height={300} quality={100} priority />
                        </a>
                        <CardDescription person={person} />
                        {/* <div className="text-center mt-2">
                          <p className="font-semibold">{person.name}</p>
                          <p>{person.position}</p>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-[4%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Internship Vol.1</h2>
            {/* Dekstop Section*/}
            <div className="hidden tablet-landscape:hidden lg:block">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="hidden md:flex md:flex-col md:gap-4">
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(0, 4).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(4, 8).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(8, 12).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(12, 16).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tablet Landscape Section */}
            <div className="hidden md:hidden tablet-landscape:block lg:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="hidden md:flex md:flex-col md:gap-4">
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(0, 3).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(3, 6).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_1.slice(6, 7).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Section */}
            <div className="hidden md:block tablet-landscape:hidden lg:hidden">
              <div className="pt-[2%]">
                <div className="flex flex-col gap-4">
                  {internships_vol_1.slice(0, visibleCountTab).map((person, index) => {
                    if (index % 2 === 0) {
                      return (
                        <div key={index} className="flex w-full space-x-10">
                          <div className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                            <a href={person.instagramUrl} target="_blank">
                              <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                            </a>
                            <div className="text-center mt-2">
                              <p className="font-semibold">{person.name}</p>
                              <p>{person.position}</p>
                            </div>
                          </div>
                          {/* Jika ada elemen kedua di grup yang sama */}
                          {internships_vol_1[index + 1] && (
                            <div className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                              <a href={internships_vol_1[index + 1].instagramUrl} target="_blank">
                                <Image src={internships_vol_1[index + 1].imageUrl} alt={internships_vol_1[index + 1].name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                              </a>
                              <div className="text-center mt-2">
                                <p className="font-semibold">{internships_vol_1[index + 1].name}</p>
                                <p>{internships_vol_1[index + 1].position}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {visibleCountTab < internships_vol_1.length && (
              <div className="hidden md:block lg:hidden">
                <div className="flex justify-center py-10">
                  <button onClick={loadMoreTabV1} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
              </div>
            )}

            {/* Phone Section */}
            <div className=" md:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {internships_vol_1.slice(0, visibleCountMobile).map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full aspect-square object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                        </a>
                        <CardDescription person={person} />
                        {/* <div className="text-center mt-2">
                          <p className="font-semibold line-clamp-1">{person.name}</p>
                          <p>{person.position}</p>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {visibleCountMobile < internships_vol_1.length && (
              <div className="md:hidden">
                <div className="flex justify-center py-10">
                  <button onClick={loadMoreMobileV2} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="py-[4%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Internship Vol.2</h2>
            {/* Dekstop Section*/}
            <div className="hidden tablet-landscape:hidden lg:block">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="hidden md:flex md:flex-col md:gap-4">
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(0, 4).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(4, 8).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(8, 12).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(12, 16).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tablet Landscape Section */}
            <div className="hidden md:hidden tablet-landscape:block lg:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="hidden md:flex md:flex-col md:gap-4">
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(0, 3).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(3, 6).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full space-x-10">
                      {internships_vol_2.slice(6, 7).map((person, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                          <a href={person.instagramUrl} target="_blank">
                            <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                          </a>
                          <div className="text-center mt-2">
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Section */}
            <div className="hidden md:block tablet-landscape:hidden lg:hidden">
              <div className="pt-[2%]">
                <div className="flex flex-col gap-4">
                  {internships_vol_2.slice(0, visibleCountTab).map((person, index) => {
                    if (index % 2 === 0) {
                      return (
                        <div key={index} className="flex w-full space-x-10">
                          <div className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                            <a href={person.instagramUrl} target="_blank">
                              <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                            </a>
                            <div className="text-center mt-2">
                              <p className="font-semibold">{person.name}</p>
                              <p>{person.position}</p>
                            </div>
                          </div>
                          {/* Jika ada elemen kedua di grup yang sama */}
                          {internships_vol_2[index + 1] && (
                            <div className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                              <a href={internships_vol_2[index + 1].instagramUrl} target="_blank">
                                <Image src={internships_vol_2[index + 1].imageUrl} alt={internships_vol_2[index + 1].name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                              </a>
                              <div className="text-center mt-2">
                                <p className="font-semibold">{internships_vol_2[index + 1].name}</p>
                                <p>{internships_vol_2[index + 1].position}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {visibleCountTab < internships_vol_2.length && (
              <div className="hidden md:block lg:hidden">
                <div className="flex justify-center py-10">
                  <button onClick={loadMoreTabV2} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
              </div>
            )}

            {/* Phone Section */}
            <div className=" md:hidden">
              <div className="pt-[2%]">
                <div className="overflow-x-auto w-full py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {internships_vol_2.slice(0, visibleCountMobile).map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                        <a href={person.instagramUrl} target="_blank">
                          <Image src={person.imageUrl} alt={person.name} className="w-full aspect-square object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                        </a>
                        <CardDescription person={person} />
                        {/* <div className="text-center mt-2">
                          <p className="font-semibold line-clamp-1">{person.name}</p>
                          <p>{person.position}</p>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {visibleCountMobile < internships_vol_2.length && (
              <div className="md:hidden">
                <div className="flex justify-center py-10">
                  <button onClick={loadMoreMobileV2} className="px-4 py-2 text-white bg-primary-red rounded-md">
                    Load More
                  </button>
                </div>
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
