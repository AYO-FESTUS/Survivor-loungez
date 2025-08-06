import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#B89B5E] text-white py-6 w-full h-fit flex flex-col items-center">
      {/* <footer className="w-full px-4 border-2 h-fit flex flex-col items-center gap-6 relative md:pb-10 md:justify-center"> */}
        <div className="w-full flex h-fit md:w-fit">
          {/* <img
            src="/logos/logo-no-bg.png"
            alt=""
            className="h-30 w-28 hidden md:w-40 md:mr-12 md:ml-4 md:mt-2  md:h-30 -ml-4 bg-black rounded-[1rem] shadow-xl"
          /> */}
          <address className="not-italic text-sm flex flex-col justify-start md:-ml-4">
            <p className="text-lg font-bold mb-1 tracking-wide md:text-2xl md:mb-2 md:font-semibold">
              The Survivors Lounge CIC
            </p>
            <p className="[word-spacing:0.1em] mb-1 tracking-wide md:text-[1.1rem] md:mb-2 flex items-center gap-1">
              <FaLocationPin className="text-[1rem]" />
              Greater London, United Kingdom.
            </p>
            <p className="[word-spacing:0.1em] mb-1 tracking-wide md:text-[1.1rem] md:mb-2 flex items-center gap-1">
              <IoMdMail className="text-[1rem]" />
              support@thesurvivorslounge.com
            </p>
            <p className="[word-spacing:0.1em] mb-1 tracking-wide md:text-[1.1rem] md:mb-2 flex items-center gap-1">
              <FaPhone className="text-[1rem]" />
              +44
            </p>
            <p className="[word-spacing:0.1em] tracking-wide md:text-[1.1rem] md:mb-2 flex items-center gap-1">
              <FaBuilding className="text-[1rem]" />
              <strong>RCN</strong>: 267256
            </p>
          </address>
        </div>

        <div className="flex gap-4 md:mt-4 md:gap-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#B89B5E]/70 transition "
          >
            <FaLinkedin className="md:text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram className="md:text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-300 transition"
          >
            <FaFacebook className="md:text-3xl" />
          </a>
        </div>

        {/* <div className="text-center [word-spacing:0.1em] tracking-wide flex w-[60%]"> */}

        {/* </div> */}
      {/* </footer> */}
      <br /><br />
      
      <div className="w-full h-fit md:flex md:justify-center md:items-center md:gap-6">
      <div className="flex justify-center gap-4 text-sm md:text-[1.1rem] md:self-start md:pl-16 md:flex md:gap-6">
        <a
          href="/privacy-policy"
          className=" hover:underline"
        >
          Privacy Policy
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="/safeguarding-policy"
          className="hover:underline"
        >
          Safeguarding Policy
        </a>
      </div>

      
      <p className="font-semibold text-center md:text-xl">
        &copy; {new Date().getFullYear()} The Survivors Lounge CIC
      </p>
      </div>
    </footer>
  );
};

export default Footer;
