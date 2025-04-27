import React from "react";
import Button from "../Libs/Button";
import logo from "../assets/navLogo.svg";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-20  pt-10 text-[var(--white)]">
      <div className="flex items-center gap-2 bg-transparent">
        <div className="text-xl font-bold shadow-[50px_10px_200px_150px_#d8b4fe]"></div>
        <img src={logo} alt="Logo" className="bg-transparent" />
      </div>

      <ul className=" flex gap-8 items-center font-medium">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About Us</li>
        <li className="hover:underline cursor-pointer">Plans</li>
        <li className="hover:underline cursor-pointer">Testimonials</li>
        <li className="hover:underline cursor-pointer">Privacy Policy</li>
        <li className="hover:underline cursor-pointer">More ▾</li>
      </ul>
      <Button
        text="Get Started"
        className="py-2 px-5 text-[var(--dark-blue)] bg-[var(--white)] rounded-full text-[20px] hover:bg-[var(--dark-blue)] hover:text-[var(--white)] shadow-[50px_-10px_200px_180px_black] transition duration-300"
      />
    </nav>
  );
};
export default NavBar;
