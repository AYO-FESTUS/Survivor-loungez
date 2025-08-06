import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { mentorDuties } from "../lib/mentorDuties";
import { skillEnhancements } from "../lib/skillEnhancement";
import Subscribe from "../components/Subscribe";

const Mentorship = () => {
  return (
    <><section className="w-full min-h-screen flex flex-col items-center bg-black">
      <div className="relative w-full h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/mentors.jpg')] md:h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 md:text-5xl">
            A Stronger You, With Support
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wider">
            You don't have to walk alone
          </h2>
        </div>

      </div>

      <div className="w-full px-8 py-10 flex items-center justify-center gap-10">
        <img
          src="/images/ment.jpeg"
          alt="mentorship session"
          className="hidden md:block w-[43%] h-[18rem]"
          loading="lazy" />
        <div className="md:w-[43%] py-10 relative">
          <FaQuoteLeft className="text-4xl text-[#B89B5E] absolute left-0 top-12 transform -translate-y-1/2" />
          <p className="text-lg text-gray-100 max-w-2xl mx-auto px-4 py-8 relative z-10 [word-spacing:0.2em] tracking-wider">
            At The Survivors Lounge CIC, we believe healing happens not just
            through services, but through connection. Our mentorship programme
            pairs survivors and individuals facing personal adversity with
            trusted mentors who walk with them — not ahead of them. Whether
            you're finding your footing after trauma, stepping into
            independence, or just needing someone who understands, a mentor can
            make all the difference.
          </p>
          <FaQuoteRight className="text-4xl text-[#B89B5E] absolute right-6 bottom-4 transform -translate-y-1/2" />
        </div>
      </div>

      <h3 className="font-bold text-2xl text-[#B89B5E]">What Mentors Do</h3>

      <div className="w-full h-fit px-4 mt-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentorDuties.map((duty) => (
          <div
            key={duty.id}
            className="w-full h-fit px-4 py-6 rounded-2xl bg-[#B89B5E]/60  mb-4 border-dashed border-1 border-[#B89B5E]  hover:shadow-lg transition duration-300 md:h-[19rem]"
          >
            <img
              className="w-full h-40 rounded-lg"
              src={duty.img}
              alt="" />
            <h4 className="font-semibold mt-4 text-lg [word-spacing:0.1em] tracking-wide">
              {duty.title}
            </h4>
          </div>
        ))}
      </div>

      <button className="bg-[#B89B5E] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition mb-4 mt-5">
        Get a Mentor
      </button>

      <p className="my-4 text-center px-2 text-gray-100 ">
        Interested in becoming a mentor to help others find their way?{" "}
      </p>
      <a className="no-underline text-[#B89B5E] font-italic hover:underline cursor-pointer mb-2">
        Become a Volunteer
      </a>
      <h3 className="font-bold mt-4 text-2xl text-center text-[#B89B5E] ">
        Our Skill Enhancement Program
      </h3>
      <div className="w-full h-fit px-8 mt-2">
        <p className="text-gray-100">
          Our future plans include launching practical skills development
          sessions to help survivors gain confidence, employment readiness and
          financial independence.
        </p>
        <p className="text-gray-300 mt-2">What to expect:</p>

        <div className="w-full h-fit md:grid grid-cols-3 mt-6 gap-4 ">
          {skillEnhancements.map((enhancement) => {
            const Icon = enhancement.icon;
            return (
              <div
                key={enhancement.title}
                className="w-full h-fit md:h-[7rem] px-4 py-3 rounded-2xl bg-[#B89B5E]/70 border-[#B89B5E]  mb-4 border-3 hover:shadow-lg transition duration-300 flex items-center justify-start gap-4 md:py-6"
              >
                <div className="border-2 border-[#B89B5E] rounded-lg p-3">
                  <Icon className={`text-3xl ${enhancement.color}`} />
                </div>
                <h4 className="font-semibold text-lg">{enhancement.title}</h4>
              </div>
            );
          })}
        </div>
      </div>

    </section><section className="bg-gray-900">
        <div>
          <Subscribe />
        </div>
      </section></>

      
      
  );
};

export default Mentorship;
