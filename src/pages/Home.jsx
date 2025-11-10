import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCarousel from "../components/home/Testimonials";
import { 
  FaHandsHelping, 
  FaLightbulb, 
  FaUsers, 
  FaHeart, 
  FaLightbulb as FaLightbulbIcon, 
  FaHandshake, 
  FaShieldAlt, 
  FaSun 
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBullhorn, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  const partners = [
    'Domestic abuse and trauma recovery services',
    'Youth mentorship and skills development organisations',
    'Mental health and wellbeing professionals',
    'Legal, housing, and financial support providers',
    'Community mentors and advocates'
  ];

  const howItWorks = [
    'Partnership can take many forms from accepting referrals and providing services, to collaborating on mentorship, training, or awareness campaigns.',
    'Together, we create a network of trusted pathways that empower individuals to rebuild their lives.'
  ];

  const values = [
    { icon: FaHeart, title: "Compassion ", color: "text-red-500" },
    { icon: FaLightbulbIcon, title: "Clarity", color: "text-yellow-500" },
    { icon: FaHandshake, title: "Connection", color: "text-blue-500" },
    { icon: FaShieldAlt, title: "Resilience", color: "text-green-600" },
    { icon: FaSun, title: "Hope", color: "text-orange-500" },
  ];

  // Counter Animation
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const target = 50;
    const duration = 2000;
    const steps = target;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
        <div className="w-full bg-gray-100">
    <div className="font-poppins bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="/blog/hero.jpeg"
          alt="Empowering survivors"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Rebuilding Lives Beyond Crisis
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-8 tracking-wider">
              Empowering migrant survivors of domestic abuse and unmentored young adults to thrive with confidence, skills, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support"
                className="bg-[#B89B5E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#A4844E] transition shadow-lg"
              >
                Get Support
              </a>
              <a
                href="#partner"
                className="bg-white text-[#B89B5E] font-semibold border-2 border-[#B89B5E] px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/hero imag/Long-Term Relationships_ Rebuilding Love After Emo.jpeg"
              alt="Group support session"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            ref={counterRef}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#B89B5E] mb-6">
              The Survivor’s Lounge
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed tracking-wide mb-6">
              At <strong>The Survivor’s Lounge</strong>, we believe no one should face life’s challenges alone. 
              We empower survivors of domestic abuse and young adults without mentorship to move beyond crisis and systemic barriers.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed tracking-wide mb-6">
              Through trauma-informed guidance, practical skills development, and personalized mentorship, we help individuals regain confidence, build resilience, and embrace a hopeful path forward.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-8">
              <p className="text-6xl md:text-7xl font-extrabold text-[#B89B5E] drop-shadow-md">
                {count}+
              </p>
              <p className="text-2xl text-gray-700 font-medium">
                <strong>Survivors and youths helped</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#B89B5E] mb-4"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaHandsHelping, title: "A Partner with Organisations", desc: "We strengthen the wider support ecosystem by collaborating with service providers, ensuring survivors and young adults receive adequate help at the right time." },
              { icon: FaLightbulb, title: "Trauma-Informed Guidance", desc: "Our approach is rooted in empathy, awareness, and sensitivity — ensuring no one is retraumatised while seeking help. We tailor connections to unique needs." },
              { icon: FaUsers, title: "Inclusive & Non-Judgmental", desc: "Every journey begins with being heard. We provide a safe, non-judgmental space where individuals feel valued, understood, and supported." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <item.icon className="w-12 h-12 text-[#B89B5E] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#B89B5E] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#B89B5E] mb-12"
          >
            Testimonials
          </motion.h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Cards */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#B89B5E] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get Support</h3>
              <p className="text-lg leading-relaxed text-center mb-6">
                Rebuilding Lives Beyond Crisis. Supporting survivors and young adults to thrive with confidence, skills, and renewed hope.
              </p>
            </div>
            <a href="/contact" className="block text-center bg-white text-[#B89B5E] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition mt-auto">
              Start Your Journey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B89B5E] to-[#A4844E] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">Partner With Us</h3>
              <p className="text-lg leading-relaxed text-center mb-6">
                Join us in creating lasting change. Collaborate to empower survivors and youth through trusted pathways.
              </p>
            </div>
            <a href="/partner" className="block text-center bg-white text-[#B89B5E] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition mt-auto">
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us – FIXED ICONS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#B89B5E] mb-12"
          >
            Why Partner With Us
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: faUsers, text: "Reach the right people", desc: "We connect individuals in need directly to your services." },
              { icon: faBullhorn, text: "Amplify impact", desc: "Reduce time-wastage and confusion with clear pathways." },
              { icon: faHandshake, text: "Build trust", desc: "We prepare individuals to engage fully with your services." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="w-10 h-10 text-[#B89B5E] mb-3" 
                />
                <h4 className="font-bold text-lg text-[#B89B5E] mb-2">{item.text}</h4>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            Who We Partner With
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base font-medium text-gray-700"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            How It Works
          </motion.h2>
          <div className="space-y-6">
            {howItWorks.map((step, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#B89B5E]/5 to-transparent p-6 rounded-xl shadow-md text-lg text-gray-700"
              >
                {step}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* SINGLE-LINE VALUES MARQUEE */}
      <section className="py-20 bg-gradient-to-b from-white to-[#B89B5E]/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#B89B5E] mb-16">Our Values</h3>
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-slide-left whitespace-nowrap">
                {values.concat(values).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center mx-48 opacity-0"
                      style={{
                        animation: `slideLeft 12s linear infinite`,
                        animationDelay: `${index * 2.4}s`
                      }}
                    >
                      <div className="p-4 bg-white rounded-full shadow-xl mr-5">
                        <Icon className={`w-10 h-10 ${value.color}`} />
                      </div>
                      <span className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
                        {value.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-white py-16">
        <Subscribe />
      </section>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(120vw); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(-120vw); opacity: 0; }
        }
        .animate-slide-left:hover > div { animation-play-state: paused; }
      `}</style>
    </div>
    </div>
  );
};

export default Home;