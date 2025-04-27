import React from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../Libs/Button";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";
const Testimonials = () => {
  const clientsArr = [
    {
      id: 1,
      name: "Holly",
      description:
        "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      id: 2,
      name: "Suresh",
      description:
        "Suresh is a senior executive who got over 10 job interviews and an offer she accepted",
    },
    {
      id: 3,
      name: "Gagan",
      description:
        "Gagan is a senior executive who got over 10 job interviews and an offer she accepted",
    },
  ];
  return (
    <section className="py-12 w-10/12 m-auto">
      <h2 className="text-4xl font-medium mb-20 text-[40px] text-[var(--blue)] font-sans">
        What our clients have to say
      </h2>
      <div className="flex justify-evenly flex-wrap gap-10 ml-5">
        {clientsArr?.map((item) => (
          <div
            key={item?.id}
            className="rounded-3xl relative overflow-hidden max-h-[400px] h-[399px] max-w-[350px] bg-[var(--blue)] text-[var(--white)] flex flex-col gap-4 border-[var(--blue)] border"
          >
            <div className="w-full h-1/2 rounded-b-3xl flex justify-center items-center bg-[var(--white)]">
              <Button
                icon={<FaPlay />}
                className=" p-5 text-3xl rounded-full bg-[var(--blue)] flex justify-center items-center "
              />
            </div>
            <div className="w-full h-1/2 px-4 py-2 space-y-3">
              <p className="font-sans   font-bold">{item?.name}</p>
              <p className="font-sans font-[18px] text-justify">
                {item?.description}
              </p>
            </div>

            <Button
              className="absolute bottom-3 right-3 bg-[var(--white)] rounded-full"
              icon={
                <RiArrowRightUpLine className=" p-3  text-[var(--blue)] w-14 h-14" />
              }
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5 mt-10">
        <Button
          className=" bg-[var(--white)] rounded-full text-[20px]  text-[var(--blue)] border border-[var(--blue)] py-2 px-4 cursor-pointer"
          icon={<RiArrowRightUpLine className="text-[20px]" />}
          text="More customer testimonials"
          iconPosition="right"
        />

        <Button
          className={
            "rounded-full py-2 px-4 bg-[var(--blue)] text-[20px] text-[var(--white)] cursor-pointer"
          }
          text="Get Started"
          iconPosition="right"
          icon={<RiArrowRightLine className="text-[20px]" />}
        />
      </div>
    </section>
  );
};

export default Testimonials;
