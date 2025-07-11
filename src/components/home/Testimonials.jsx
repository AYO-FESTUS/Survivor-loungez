import { useState } from "react";
import { testimonials } from "../../lib/testimonials";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-black rounded-lg shadow p-6 flex flex-col items-center">
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full flex flex-col items-center"
        >
          <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
            "{testimonials[index].text}"
          </p>
          <div className="flex flex-col items-center">
            <span className="font-bold text-[#B89B5E]">
              {testimonials[index].name}
            </span>
            <span className="text-sm text-gray-500">
              {testimonials[index].role}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 mt-6">
        <button
          onClick={prev}
          className="px-3 py-1 rounded bg-[#B89B5E] text-white hover:bg-[#B89B5E]/80"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="px-3 py-1 rounded bg-[#B89B5E] text-white hover:bg-[#B89B5E]/80"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-[#B89B5E]" : "bg-gray-300 dark:bg-gray-700"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
