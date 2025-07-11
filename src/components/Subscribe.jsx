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
    <div className="w-full max-w-md mx-auto p-4 rounded shadow bg-black">
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-100">
        Stay tuned for Updates by signing up for our Newsletter
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-3  items-center justify-center mb-4"
      >
        <input
          type="email"
          className="w-[70%] border border-gray-300 rounded px-3 py-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-[26%] bg-[#B89B5E] text-white md:px-3 py-2 rounded hover:bg-[#B89B5E]/70 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subscribe
        </button>
      </form>
      {submitted && (
        <p className="mt-3 text-green-600 text-center">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
};

export default Subscribe;
