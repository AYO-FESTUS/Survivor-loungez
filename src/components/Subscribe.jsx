import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your subscription logic here
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-10 rounded shadow bg-gray-900 text-center">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#B89B5E] mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Stay informed on our updates, events , and support resources.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center"
      >
        <input
          type="email"
          className="w-full sm:w-[70%] border border-gray-300 rounded px-4 py-3 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B89B5E]"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
         
            className="bg-[#B89B5E] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-[#A4844E] transition"
          >
             Subscribe
          
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-500 text-sm">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
};

export default Subscribe;
