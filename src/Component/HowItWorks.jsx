const HowItWorks = () => {
  const steps = [
    "Submit Intake Form",
    "We do the search and curation for list of jobs",
    "You approve, we do the tedious part (applying)",
    "You get the interviews",
  ];
  return (
    <section className="py-12 w-10/12 m-auto">
      <h2 className="text-4xl font-medium mb-20 text-[40px] text-[var(--blue)] font-sans">
        How we work?
      </h2>
      <div className="flex justify-between flex-wrap gap-10 ml-5">
        {steps.map((step, index) => (
          <div key={index} className="max-w-72">
            <span
              className=" font-sans p-4 flex justify-center items-center text-5xl
              rounded-full border-[var(--dark-blue)] border-2 w-20 h-20"
            >
              {index + 1}
            </span>
            <hr className=" w-11/12 my-3 border-t-2 border-[var(--blue)]" />

            <p className="text-[24px] text-[var(--blue)] font-sans font-semibold">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
