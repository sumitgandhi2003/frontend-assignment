import React from "react";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdHandshake } from "react-icons/md";

const WhyChooseUs = () => {
  const chooseUsArr = [
    {
      id: 1,
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
      icon: MdHandshake,
    },
    {
      id: 2,
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares — guiding you through every twist in your career path.",
      icon: FaUser,
    },
    {
      id: 3,
      title: "Beat the Line",
      description:
        "We search, shortlist, and apply for you, so your name shows up first — every single day.",
      icon: FaStar,
    },
  ];
  return (
    <section className="py-12 w-full flex justify-center items-center">
      <div className="w-10/12 bg-[var(--light-blue)] rounded-3xl p-5 ">
        <h2 className=" font-medium mb-20 text-[40px] text-[var(--dark-blue)] font-sans">
          Why Choose Us?
        </h2>

        <div className=" flex gap-15 justify-evenly  flex-wrap">
          {chooseUsArr?.map((item) => {
            const Icon = item?.icon;
            return (
              <div
                key={item?.id}
                className=" rounded-[20px] border-2 border-[var(--dark-blue)]  px-5 py-3 max-w-[350px]"
              >
                {
                  <Icon className=" text-[var(--dark-blue)] text-3xl w-14 h-14  my-6" />
                }

                <div className="space-y-4">
                  <h4 className="font-semibold font-sans text-[24px] text-[var(--dark-blue)]">
                    {item?.title}
                  </h4>
                  <p className="font-sans text-[18px] font-normal text-[var(--dark-blue)]">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
