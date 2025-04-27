import React from "react";
import { MdVerified } from "react-icons/md";
import Button from "../Libs/Button";
import { RiArrowRightLine } from "react-icons/ri";

const ServicePlans = () => {
  const servicePlansArr = [
    {
      id: 1,
      planName: "Basic",
      price: 35,
      symbol: "$",
      billingCycle: "Week",
      orientation: "vertical",
      benefits: [
        {
          id: 1,
          description:
            "Curated jobs from 1M+ listings, refreshed every 48 hours",
        },
        {
          id: 2,
          description:
            "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        },
        {
          id: 3,
          description: "Need more? Add extra apps for just $1.5 each",
        },
        {
          id: 4,
          description: "Your own dedicated application analyst",
        },
        {
          id: 5,
          description: "Personalized with up to 10 filters & 5 job titles",
        },
      ],
      includesPreviousBenefits: null,
      planDetailPage: "",
      isPopular: false,
    },
    {
      id: 2,
      planName: "Starter",
      price: 50,
      symbol: "$",
      billingCycle: "Week",
      orientation: "vertical",
      benefits: [
        {
          id: 1,
          description: "Resume review & story-focused feedback",
        },
        {
          id: 2,
          description: "Dedicated search specialist",
        },
        {
          id: 3,
          description: "Up to 50 job apps/week",
        },
        {
          id: 4,
          description: "Extra apps at $1.5 each",
        },
        {
          id: 5,
          description: "Analyst support within 6 hours (SLA/PST hours)",
        },
      ],
      includesPreviousBenefits: true,
      planDetailPage: "",
      isPopular: true,
    },
    {
      id: 3,
      planName: "Plus",
      price: 100,
      symbol: "$",
      billingCycle: "Week",
      orientation: "vertical",
      benefits: [
        {
          id: 1,
          description: "Up to 75 apps/week",
        },
        {
          id: 2,
          description: "Apply to 15 job titles",
        },
        {
          id: 3,
          description: "Analyst + full application team on Pacific hours",
        },
      ],
      includesPreviousBenefits: true,
      planDetailPage: "",
      isPopular: true,
    },
    {
      id: 4,
      planName: "Advance",
      price: 150,
      symbol: "$",
      billingCycle: "Week",
      orientation: "horizontal",
      benefits: [
        {
          id: 1,
          description: "Custom Resumes & Cover Letters",
        },
        {
          id: 2,
          description: "20 fully customized applications/week",
        },
        {
          id: 3,
          description: "Help with complex job searches",
        },
        {
          id: 4,
          description:
            "Access to senior resume experts, Founder & Exec Coaches",
        },
      ],
      includesPreviousBenefits: true,
      planDetailPage: "",
      isPopular: false,
    },
  ];
  return (
    <section className="w-10/12 m-auto py-12">
      <h2 className="text-4xl font-medium mb-20 text-[40px] text-[var(--blue)] font-sans">
        Job Application Service Plans
      </h2>
      <div className="w-full grid grid-cols-3 gap-6">
        {servicePlansArr?.map((item, index) => (
          <Card key={item?.id} item={item} index={index} />
        ))}
      </div>
      <hr className=" mt-20 border-t-2 border-gray-300 " />
    </section>
  );
};

export default ServicePlans;

export const Card = ({ item, index }) => {
  const isHorizontal = item?.orientation === "horizontal" || false;

  return (
    <div
      className={`border-2 rounded-3xl p-4 w-full flex flex-col ${
        isHorizontal
          ? "col-span-3 bg-[var(--blue)] text-[var(--white)]"
          : " border-[var(--blue)] text-[var(--blue)] max-w-[400px]"
      }`}
    >
      <div
        className={`flex  ${
          isHorizontal ? "flex-row justify-between" : "flex-col"
        } `}
      >
        <div className="flex justify-between">
          <h3 className="font-sans font-semibold text-[32px] ">
            {item?.planName}
          </h3>
          {item?.isPopular ? (
            <span className="border-2 border-[var(--blue)] bg-[var(--light-blue)] py-2 px-4 rounded-full text-[var(--blue)]">
              Popular
            </span>
          ) : (
            ""
          )}
        </div>
        <span className="font-sans">
          <span className="text-[24px] font-bold">
            {item?.symbol}
            {item?.price}
          </span>
          /<span className="text-[18px]">{item?.billingCycle}</span>
        </span>
      </div>
      <hr
        className={` my-3 border-t-2 border-[var(--gray)] ${
          isHorizontal ? "w-4/12" : ""
        } `}
      />
      <div
        className={`flex flex-1  ${
          isHorizontal ? "flex-row justify-between" : "flex-col"
        }   relative`}
      >
        <div
          className={`flex  space-y-4 ${
            isHorizontal
              ? "flex-row max-w-6/12  flex-wrap space-x-4"
              : "flex-col"
          } `}
        >
          {item?.includesPreviousBenefits ? (
            index == 1 ? (
              <span className="flex gap-2  items-start">
                <MdVerified className="text-green-500 text-[20px] min-w-5" />{" "}
                <span>All the perks of the basic Plan</span>
              </span>
            ) : index == 2 ? (
              <span className="flex gap-2  items-start ">
                <MdVerified className="text-green-500 text-[20px] min-w-5" />{" "}
                <span>Everything in Starter</span>
              </span>
            ) : (
              <span className="flex gap-2  items-start ">
                <MdVerified className="text-green-500 text-[20px] min-w-5" />{" "}
                <span>Everything in Plus</span>
              </span>
            )
          ) : (
            ""
          )}
          {item?.benefits?.map((benefit) => (
            <span key={benefit?.id} className="flex gap-2  items-start ">
              <MdVerified className="text-green-500 text-[20px] min-w-5" />{" "}
              <span>{benefit?.description}</span>
            </span>
          ))}
        </div>
        <div
          className={`mt-5 flex-1 flex  h-full ${
            isHorizontal ? "justify-end items-start" : "items-end"
          }`}
        >
          <Button
            className={`rounded-4xl py-2 px-4 text-[20px]  ${
              isHorizontal
                ? "text-[var(--blue)] bg-[var(--white)]"
                : "bg-[var(--blue)] text-[var(--white)]"
            }`}
            text="Get Started"
            iconPosition="right"
            icon={<RiArrowRightLine className="text-[20px]" />}
          />
        </div>
      </div>
    </div>
  );
};
