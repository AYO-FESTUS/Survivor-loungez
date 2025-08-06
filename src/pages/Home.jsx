import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCarousel from "../components/home/Testimonials";
import { FaHandsHelping, FaLightbulb, FaUsers } from "react-icons/fa";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const target = 50;
    const duration = 2000; // total time (ms)
    const steps = target;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <><div className="font-poppins bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <img
          src="\blog imag\Premium Photo _ Business people in portrait selfie (1).jpeg"
          className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-3xl w-full">
            <h1 className="text-4xl sm:text-3xl font-bold mb-4 md:text-5xl">
              Rebuilding lives beyond crisis
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wider">
              Empowering migrant survivors of domestic abuse and unmentored young adults to thrive with confidence, skills, and hope.
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-3">
              <a
                href="#"
                className="bg-[#B89B5E] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-[#A4844E] transition inline-block"
              >
                Get Support
              </a>
              <a
                href="#"
                className="bg-white text-[#B89B5E] font-semibold border border-[#B89B5E] text-sm sm:text-base px-6 py-3 rounded-md hover:bg-gray-100 transition inline-block"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="/hero imag/Long-Term Relationships_ Rebuilding Love After Emo.jpeg"
              alt="Group support"
              className="w-full h-80 object-cover rounded-2xl shadow-lg" />
          </motion.div>

          <motion.div
            ref={counterRef}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-[#B89B5E] mb-6">
              The Survivor’s Lounge
            </h2>
            <p className="text-lg text-white max-w-5xl mx-auto px-4 py-8 [word-spacing:0.2em] tracking-wider">
              The Survivor’s Lounge empowers individuals to rebuild their lives beyond crisis and systemic limitations. We support migrant survivors of domestic abuse and young adults without mentors through trauma-informed guidance, practical skills development, and personalised mentorship.
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start gap-3">
              <p className="text-6xl md:text-7xl font-extrabold text-[#B89B5E] drop-shadow-md">
                {count}+
              </p>
              <p className="text-base md:text-lg text-white tracking-wide whitespace-nowrap">
                Survivors & youths helped
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <hr />

      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#B89B5E] mb-12">
            Why Choose The Survivor’s Lounge?
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div
              className="bg-cover bg-center bg-no-repeat text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"

            >
              <FaHandsHelping className="text-4xl text-[#B89B5E] mb-4" />
              <h3 className="text-2xl font-semibold text-[#B89B5E] mb-2">
                Trauma-Informed and Culturally Sensitive
              </h3>
              <p className="text-white lg tracking-wider [word-spacing:0.2em]">
                We understand the unique barriers faced by migrants and unmentored youth and tailor our approach to meet their specific needs.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className="bg-cover bg-center bg-no-repeat text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"

            >
              <FaLightbulb className="text-4xl text-[#B89B5E] mb-4" />
              <h3 className="text-2xl font-semibold text-[#B89B5E] mb-2">
                Holistic Empowerment Model
              </h3>
              <p className="text-white lg tracking-wider [word-spacing:0.2em]">
                We combine advisory, skills development, and mentorship for long-term transformation.
              </p>
            </div>

            {/* Box 3 */}
            <div
              className="bg-cover bg-center bg-no-repeat text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
              style={{ backgroundImage: "url('/images/inclusive.jpg')" }}
            >
              <FaUsers className="text-4xl text-[#B89B5E] mb-4" />
              <h3 className="text-2xl font-semibold text-[#B89B5E] mb-2">
                Inclusive and Non-Judgemental
              </h3>
              <p className="text-white 1g tracking-wider [word-spacing:0.2em]">
                We welcome everyone with compassion, dignity, and respect.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            Testimonials
          </h2>

          <div className="space-y-12 text-left">

            <TestimonialCarousel />

          </div>
        </div>
      </section>



      <section className="bg-white py-16">
        <img
          src="\hero imag\Premium Photo _ Community concept with hands of people.jpg"
          alt="People"
          className="w-full h-[650px] object-cover rounded-2xl shadow-lg" />


        <br /> <br />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Partner With Us - Animate from Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="text-4xl font-bold text-[#B89B5E] mb-6 text-center">Partner With Us</h2>
              <p className="text-lg text-gray-100 flex-grow px-4 py-8 tracking-wider text-center">
                We collaborate with community organisations, local authorities, and funders to expand our impact. If you’re passionate about supporting migrant survivors and unmentored youth, let’s work together to create change.
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-white text-[#B89B5E] font-semibold border border-[#B89B5E] text-sm sm:text-base px-6 py-3 rounded-md hover:bg-gray-100 transition"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>

            {/* Get Support - Animate from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="text-4xl font-bold text-[#B89B5E] mb-6 text-center">Get Support</h2>
              <p className="text-lg text-gray-100 flex-grow px-4 py-8 tracking-wider text-center">
                If you are a survivor of abuse or a young adult seeking mentorship, we are here for you. <br /> Reach out to begin your journey of healing and growth.
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="bg-[#B89B5E] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
                >
                  Get Support
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>





    </div>
    
    <section className="bg-gray-900">
        <div>
          <Subscribe />
        </div>
      </section>

      
      </>
  );
};

export default Home;
