import React from "react";
import { Card } from "./ServicePlans";

const ResumeCoaching = () => {
  const resumeBuildingPlansArr = [
    {
      id: 1,
      planName: "Resume Rebuild",
      price: 1000,
      symbol: "$",
      billingCycle: "one time",
      benefits: [
        {
          id: 1,
          description: "3× 30-min coaching",
        },
        {
          id: 2,
          description: "Focused on storytelling, not just formatting",
        },
        {
          id: 3,
          description: "Analyst + full application team on Pacific hours",
        },
        {
          id: 4,
          description: "Tailored to your target industry, company, or role",
        },
        {
          id: 5,
          description: "Direct work with our co-founder (ex-Google, JP Morgan)",
        },
        {
          id: 6,
          description:
            "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        },
        {
          id: 7,
          description: "Resume Rebuild portfolio available upon request",
        },
      ],
    },
    {
      id: 2,
      planName: "Interview Prep",
      price: 500,
      symbol: "$",
      billingCycle: "one time",

      benefits: [
        {
          id: 1,
          description: "2× 45-min live coaching with our co-founder",
        },
        {
          id: 2,
          description: "Real-time, practical feedback",
        },
        {
          id: 3,
          description: "Build clarity, empathy & executive presence",
        },
        {
          id: 4,
          description:
            "For senior and leadership roles — technical & non-technical",
        },
      ],
    },
  ];
  return (
    <section className="w-10/12 m-auto py-12">
      <h2 className="text-4xl font-medium mb-20 text-[40px] text-[var(--blue)] font-sans">
        Job Application Service Plans
      </h2>
      <div className="w-full flex flex-row gap-6 justify-center">
        {resumeBuildingPlansArr?.map((item) => (
          <Card item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default ResumeCoaching;
