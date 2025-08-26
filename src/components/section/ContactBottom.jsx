import { IoLogoWhatsapp } from "react-icons/io5";

export default function ContactBottom() {
  return (
    <div className="fixed bottom-5 right-3">
      <div>
        <a href="https://wa.me/6285161578045" target="_blank">
          <div className="bg-primary-red rounded-full p-3 text-white z-50">
            <IoLogoWhatsapp className="text-4xl font-bold" />
          </div>
        </a>
      </div>
      {/* <div className="hidden md:block">
        <a href="https://wa.me/6285161578045" target="_blank" className="select-none bg-primary-red py-2 px-6 text-white rounded-full flex items-center gap-3 cursor-pointer">
          <IoLogoWhatsapp className="text-xl font-bold" />
          <p className="font-bold">How can I help you?</p>
        </a>
      </div> */}
    </div>
  );
}
