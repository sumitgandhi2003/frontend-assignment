import React from "react";
import Button from "../Libs/Button";
import logo from "../assets/navLogo.svg";
import bookImage from "../assets/bookImage.png";
import { RiArrowRightLine } from "react-icons/ri";
import NavBar from "./NavBar";
const HeroSection = () => {
  return (
    <section className="min-h-screen h-full  w-full box-border flex flex-col bg-gradient-to-r from-[var(--light-blue)] via-[var(--blue)]  to-[var(--blue)] overflow-hidden text-[var(--white)]">
      <NavBar />

      <div className="w-full flex-1 flex justify-center items-center">
        <div className="flex justify-between max-w-10/12 gap-5">
          <div className="w-8/12  ">
            <h1 className="text-[80px] font-sans font-semibold leading-20 ">
              Land job interviews{" "}
              <span className="text-[var(--blue)]">10x</span> faster
            </h1>
            <p className="text-[18px] font-sans font-semibold my-10 max-w-8/12">
              Custom-built resumes that match your goals, keywords, and
              recruiter expectations.
            </p>

            <Button
              className={
                "rounded-4xl w-52 h-16 bg-[var(--white)] text-[20px] text-[var(--dark-blue)] my-10"
              }
              text="Get Started"
              iconPosition="right"
              icon={<RiArrowRightLine className="text-[20px]" />}
            />
          </div>

          <div className="relative w-3/12">
            <img src={bookImage} alt="" className="w-full h-full" />
            <Button
              text="📖"
              className="text-6xl glass-effect absolute -bottom-10 -right-10 rounded-full h-25 w-25 flex justify-center items-center"
            />
            <p className="absolute left-1/2 -translate-x-1/2 w-max mt-5">
              Download Free E-Book
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
