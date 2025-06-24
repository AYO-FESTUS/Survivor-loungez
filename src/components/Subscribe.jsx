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
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2 text-center">
        Stay tuned for Updates by signing up for our Newsletter
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-3  items-center justify-center"
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
          className="w-[26%] bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
