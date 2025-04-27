import Founder1 from "../assets/founder-1.png";
import Founder2 from "../assets/founder-2.png";
import { FaLinkedinIn } from "react-icons/fa";

import Button from "../Libs/Button";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";
const AboutUs = () => {
  const foundersArr = [
    {
      id: 1,
      name: "Ashwin",
      image: Founder1,
      description:
        "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University. Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    },
    {
      id: 2,
      name: "Nicole",
      image: Founder2,
      description:
        "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-[var(--black)] min-h-screen to-[var(--blue)] text-white py-16 ">
      <h2 className="text-4xl font-medium font-sans mb-10 ml-20">About Us</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex max-w-[1000px] flex-col items-center gap-10">
          {foundersArr?.map((item) => (
            <div key={item?.id} className="flex gap-10 items-center">
              <div
                key={item?.id}
                className="aspect-square relative overflow-hidden  rounded-full w-3/12 bg-[var(--white)] inline-block"
              >
                <img
                  src={item.image}
                  alt="Founder"
                  className="w-full h-full object-cover overflow-hidden pt-5 object-top"
                />

                <Button
                  icon={<FaLinkedinIn />}
                  className=" glass-effect p-2 text-3xl rounded-full absolute bottom-4 right-10 z-50 "
                />
              </div>

              <div className="w-9/12">
                <p className="font-sans  mb-5 font-bold">{item?.name}</p>
                <p className="font-sans font-[18px] text-justify">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="flex">
            <Link to={"#"} className="flex items-center gap-1">
              Learn more about our Board of Advisors
              <RiArrowRightUpLine className="  rounded-full text-[var(--white)] " />
            </Link>
          </p>
          <p className="flex">
            <Link to={"#"} className="flex items-center gap-1">
              Follow us on our Linkedin page
              <RiArrowRightUpLine className="  rounded-full text-[var(--white)] " />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
