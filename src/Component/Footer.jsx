import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaRegCopyright } from "react-icons/fa";
import logo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div className="px-10">
        <img src={logo} alt="" className=" aspect-square" />
        <hr className={` my-3 border-t-2 border-[var(--gray)] w-2/12 `} />
      </div>
      <div className="w-full flex flex-wrap gap-20 my-5 px-10 box-border text-[var(--blue)]">
        <div className="max-w-[250px] space-y-1">
          <p className="text-[16px] underline">Address</p>
          <p className="text-[18px]">
            1875 Mission St Ste 103 #450 San Francisco, CA 94103
          </p>
        </div>
        <div className="max-w-[250px]  space-y-1">
          <p className="text-[16px] underline">Email</p>
          <p className="text-[18px]">
            <Link to={"mailto:finance@mobiusengine.ai"}>
              finance@mobiusengine.ai
            </Link>
          </p>
        </div>
        <div className="max-w-[250px]  space-y-1">
          <p className="text-[16px] underline">Telephone</p>
          <p className="text-[18px]">
            <Link to={"tel:6508896026"}>650-889-6026</Link>
          </p>
        </div>
        <div className="max-w-[250px]  space-y-1 ml-auto mr-6">
          <p className="text-[16px] underline">Socials</p>
          <p className="text-[18px] flex gap-3">
            <span className="rounded-full border-[var(--blue)] p-2 border h-8 w-8 fleẋ justify-center items-center">
              <FaLinkedinIn className="w-full h-full" />
            </span>
            <span className="rounded-full border-[var(--blue)] p-2 border h-8 w-8 fleẋ justify-center items-center">
              <FaFacebookF className="w-full h-full" />
            </span>
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between px-8 py-4 bg-[var(--blue)] text-[var(--white)] text-[16px] font-sans font-normal">
        <p className=" flex gap-2 items-center justify-center">
          <FaRegCopyright /> 2025 Mobiusservices LLC
        </p>
        <ul className="flex gap-4">
          <li>
            <p>Terms & Conditions</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
