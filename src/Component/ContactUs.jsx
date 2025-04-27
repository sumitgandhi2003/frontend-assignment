import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import Button from "../Libs/Button";

const ContactUs = () => {
  return (
    <section className=" w-10/12 m-auto bg-[var(--blue)] rounded-3xl px-10 py-20 text-[var(--white)] flex items-center justify-between">
      <h3 className="uppercase font-semibold font-sans text-[32px] max-w-[200px]">
        Still have doubts?
      </h3>
      <h2 className="font-bold font-sans text-[40px]">Contact Us</h2>
      <Button
        icon={
          <FaArrowRight className=" p-3 rounded-full bg-[var(--white)] text-[var(--blue)] w-14 h-14" />
        }
      />
    </section>
  );
};

export default ContactUs;
