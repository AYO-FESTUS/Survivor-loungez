import React, { useEffect, useState } from "react";
  import { motion } from "framer-motion";

import {
  FaHandsHelping,
  FaPlusCircle,
  FaBook,
  FaUserTie,
} from "react-icons/fa";
import Subscribe from "../components/Subscribe";

const Home = () => {
   const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 50;
    let current = 0;
    const increment = 1;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 50); // adjust speed by changing interval time

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <img
          src="/hero imag/Premium Photo _ Group of people holding hand toget.jpeg"
          alt="People"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Content on top of background */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-3xl w-full">
            <h1 className="text-4xl sm:text-3xl font-bold mb-4 md:text-5xl">
              Rebuilding lives beyond crisis
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6 tracking-wider">
              Empowering migrant survivors of domestic abuse and unmentored young adults to thrive with confidence, skills, and hope.
            </h2>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-[#B89B5E] text-white px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
              >
                Get Support
              </a>
              <a
                href="#"
                className="bg-white text-[#B89B5E] border border-[#B89B5E] px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="bg-[#B89B5E] text-white px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
 {/* About Section with Count-Up */}
    
<section className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
    {/* Image Left with Animation */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0"
    >
      <img
        src="/hero imag/Premium Photo _ Group of people holding hand toget.jpeg"
        alt="Group support"
        className="w-full h-80 object-cover rounded-2xl shadow-lg"
      />
    </motion.div>

    {/* Text Right with Animation */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h2 className="text-4xl font-bold text-[#B89B5E] mb-6">
        The Survivor’s Lounge
      </h2>

      <p className="text-white text-lg mb-6">
        The Survivor’s Lounge empowers individuals to rebuild their lives beyond crisis and systemic limitations. We support migrant survivors of domestic abuse and young adults without mentors through trauma-informed guidance, practical skills development, and personalised mentorship.
      </p>

      <p className="text-white text-lg mb-8">
        We believe that every survivor deserves the opportunity to heal, grow, and build a life of independence and a thriving future.
      </p>

      <div className="flex flex-col items-center md:items-start justify-center">
      <p className="text-5xl font-extrabold text-[#B89B5E] mb-2">
        {count}+
      </p>
      <p className="text-white text-base">Survivors & youths helped</p>
    </div>
    </motion.div>
  </div>
</section>


<section className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#B89B5E] mb-12">
      Why Choose The Survivor’s Lounge?
    </h2>

    <div className="space-y-12 text-left">
      <div>
        <h3 className="text-2xl font-semibold text-[#B89B5E] mb-3 text-center sm:text-left">
          Trauma-Informed and Culturally Sensitive
        </h3>
        <p className="text-white text-sm text-center sm:text-left">
          We understand the unique barriers faced by migrants and unmentored youth and tailor our approach to meet their specific needs.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#B89B5E] mb-3 text-center sm:text-left">
          Holistic Empowerment Model
        </h3>
        <p className="text-white text-sm text-center sm:text-left">
          We combine advisory, skills development, and mentorship for long-term transformation.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#B89B5E] mb-3 text-center sm:text-left">
          Inclusive and Non-Judgemental
        </h3>
        <p className="text-white text-sm text-center sm:text-left">
          We welcome everyone with compassion, dignity, and respect.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-black py-16">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#B89B5E] mb-12">
      Testimonials
    </h2>

    <div className="space-y-12 text-left">
      {/* Testimonial 1 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
        <p className="text-white text-base italic mb-4">
          “When I left my abusive marriage, I had nowhere to go and didn’t know how to start over in the UK. The Survivor’s Lounge helped me regain my confidence and guided me in understanding my rights. Now I am building a new life for myself and my children.”
        </p>
        <p className="text-[#B89B5E] font-semibold">– Anonymous, 36</p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
        <p className="text-white text-base italic mb-4">
          “I met the founder in 2021 when she visited a place I was hiding. My encounter with her and her guidance has reshaped my life, such that I am now back in school, living my desired dream and helping others find their path while I complete my studies as a Nurse.”
        </p>
        <p className="text-[#B89B5E] font-semibold">– Male Survivor, 38</p>
      </div>
    </div>
  </div>
</section>




<section className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#B89B5E] mb-12">
      Partner With Us & Get Support
    </h2>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 text-left">
      {/* Partner With Us */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#B89B5E] mb-3">
            Partner With Us
          </h3>
          <p className="text-white text-sm mb-6">
            We collaborate with community organisations, local authorities, and funders to expand our impact. If you’re passionate about supporting migrant survivors and unmentored youth, let’s work together to create change.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-block bg-[#B89B5E] text-black font-semibold text-center px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
        >
          Contact Us
        </a>
      </div>

      {/* Get Support */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#B89B5E] mb-3">
            Get Support
          </h3>
          <p className="text-white text-sm mb-6">
            If you are a survivor of abuse or a young adult seeking mentorship, we are here for you. Reach out to begin your journey of healing and growth.
          </p>
        </div>
        <a
          href="#get-support"
          className="inline-block bg-[#B89B5E] text-black font-semibold text-center px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
        >
          Get Support
        </a>
      </div>
    </div>
  </div>
</section>

<section className="bg-black py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-[#B89B5E] mb-8">Contact</h2>

    <p className="text-white text-lg mb-6">
      <span className="font-semibold block mb-2">The Survivor’s Lounge CIC</span>
      📍 Greater London, United Kingdom
    </p>

    <p className="text-white text-lg mb-6">
      ✉️ <a href="mailto:support@thesurvivorslounge.com" className="underline hover:text-[#B89B5E] transition">support@thesurvivorslounge.com</a>
    </p>

    <p className="text-white text-lg mb-8">
      📞 <a href="tel:+44XXXXXXXXXX" className="underline hover:text-[#B89B5E] transition">+44…….</a>
    </p>

    <div className="flex justify-center space-x-6">
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-white hover:text-[#B89B5E] transition text-2xl"
      >
        LinkedIn
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-white hover:text-[#B89B5E] transition text-2xl"
      >
        Instagram
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="text-white hover:text-[#B89B5E] transition text-2xl"
      >
        Facebook
      </a>
    </div>
  </div>
</section>


      <Subscribe />
    </div>
  );
};

export default Home;
