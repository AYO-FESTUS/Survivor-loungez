import { mission } from "../lib/mission";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-black">
      <div className="relative w-full h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/therapy.jpg')] md:h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-4xl mt-4 text-gray-100 text-center md:text-5xl">
            About Us
          </h2>
        </div>
      </div>

      <div className="w-full h-fit px-4">
        {/* <h3 className="font-bold text-2xl text-center mt-4">Our Vision</h3> */}

        <p className="text-lg text-gray-100 max-w-2xl mx-auto px-4 py-8 [word-spacing:0.2em] tracking-wider">
          The Survivors Lounge empowers individuals to rebuild their lives
          beyond crisis and systemic limitations. We support migrant survivors
          of domestic abuse and young adults without mentors through
          trauma-informed guidance, practical skills development and
          personalized mentorship. We believe that every survivor deserves the
          opportunity to heal, grow and build a life of independence and a
          thriving future.
        </p>
      </div>

      <div className="w-full h-fit px-4">
        <h3 className="font-bold text-2xl text-center mt-4 text-[#B89B5E]">Our Mission</h3>

        <p className="text-lg text-gray-100 max-w-2xl mx-auto px-4 py-8 [word-spacing:0.2em] tracking-wider">
          To bring strength, healing and hope to survivors of abuse and young
          adults lacking mentorship enabling them to break crisis cycles and
          dependency through tailored support and practical empowerment.
        </p>
      </div>

      <div className="w-full h-fit">
        <h3 className="font-bold text-2xl text-center mb-4 text-[#B89B5E]">What We Do</h3>

        <div className="w-full h-fit px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-20">
          {mission.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center py-6 px-4 rounded-lg bg-[#B89B5E]/60 mb-4 border-dashed border-1 border-[#B89B5E] hover:shadow-lg transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[14rem] object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-lg text-gray-100 [word-spacing:0.1em] tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-gray-100 text-center px-4 py-8 max-w-2xl mx-auto [word-spacing:0.2em] tracking-wider">
        Though we are not a faith based organization, we honour every person's
        journey and belief system. At our core, we believe in people - and in
        the quiet power of rebuilding lives with dignity and purpose.
      </p>
    </section>
  );
};

export default About;
