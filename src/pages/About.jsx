import { mission } from "../lib/mission";
import { 
  FaHeart, 
  FaLightbulb, 
  FaHandshake, 
  FaShieldAlt, 
  FaSun 
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <FaHeart className="w-9 h-9 text-[#B89B5E]" />,
      title: "Compassion",
      description: "We listen with empathy, creating a safe, non-judgmental space where every story is respected and valued."
    },
    {
      icon: <FaLightbulb className="w-9 h-9 text-[#B89B5E]" />,
      title: "Clarity",
      description: "We guide individuals to understand their needs and make informed, confident decisions on the best path forward."
    },
    {
      icon: <FaHandshake className="w-9 h-9 text-[#B89B5E]" />,
      title: "Connection",
      description: "We act as a bridge, linking individuals to trusted people, mentors, and support organisations that can help them thrive."
    },
    {
      icon: <FaShieldAlt className="w-9 h-9 text-[#B89B5E]" />,
      title: "Resilience",
      description: "We encourage growth, strength, and the ability to overcome adversity, helping individuals rebuild their lives with confidence."
    },
    {
      icon: <FaSun className="w-9 h-9 text-[#B89B5E]" />,
      title: "Hope",
      description: "We foster optimism and belief in a brighter future, empowering individuals to envision and work toward a life beyond hardship."
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { 
      x: 100, 
      opacity: 0 
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      {/* Hero */}
      <div className="relative w-full h-52 md:h-96 bg-cover bg-center bg-[url('/images/therapy.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h2 className="font-bold text-4xl md:text-5xl text-white text-center drop-shadow-lg">
            About Us
          </h2>
        </div>
      </div>

      {/* Intro */}
      <div className="w-full px-4 py-12">
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto text-center leading-relaxed tracking-wide">
          At <strong>The Survivor’s Lounge</strong>, we believe no one should have to navigate adversity alone. Survivors of domestic abuse and young adults without mentorship often feel overwhelmed. We exist to change that.
        </p>
      </div>

      {/* Purpose */}
      <div className="w-full px-4 py-8 bg-white">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-6 text-[#B89B5E]">
          Our Purpose
        </h3>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed tracking-wide">
          We provide a safe, compassionate space where people are listened to, supported, and guided. We help individuals understand their needs, explore possible paths forward, and connect them with the right organisations and mentors who can truly support them.
        </p>
      </div>

      {/* How We Help */}
      <div className="w-full py-12 px-4">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-10 text-[#B89B5E]">
          How We Help
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 lg:px-0">
          {mission.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl text-[#B89B5E] mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="w-full px-4 py-12 bg-gradient-to-r from-[#B89B5E]/5 to-transparent">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-6 text-[#B89B5E]">
          Our Mission
        </h3>
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto text-center leading-relaxed tracking-wide">
          To provide survivors of domestic abuse and young adults seeking guidance with strength, clarity, and hope helping them break cycles of hardship through personalised support, practical empowerment, and connections to trusted individuals and support organisations.
        </p>
      </div>

      {/* Vision */}
      <div className="w-full px-4 py-12">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-6 text-[#B89B5E]">
          Our Vision
        </h3>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed tracking-wide italic">
          A world where no survivor or young adult faces adversity alone where every individual has access to guidance, trusted connections, and the support they need to rebuild their life with confidence, resilience, and hope.
        </p>
      </div>

      {/* VALUES SECTION – Animated Slide-In + Centered Icons */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-bold text-3xl md:text-4xl text-center mb-16 text-[#B89B5E]">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(184, 155, 94, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="group bg-white p-8 rounded-2xl border border-[#B89B5E]/20 hover:border-[#B89B5E]/40 transition-all duration-300 cursor-default"
              >
                {/* Icon – Centered at Top */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#B89B5E]/10 rounded-full group-hover:bg-[#B89B5E]/20 transition-colors">
                    {value.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-xl text-gray-800 text-center mb-4">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;