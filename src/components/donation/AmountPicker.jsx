import { useState } from "react";

export default function DonationAmountPicker() {
  const usdAmounts = [5, 10, 20, 50];
  const ngnAmounts = [2000, 5000, 10000, 20000];

  const [currency, setCurrency] = useState("USD");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customInputVisible, setCustomInputVisible] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    setSelectedAmount(null);
    setCustomInputVisible(false);
    setCustomAmount("");
  };

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomInputVisible(false);
    setCustomAmount("");
  };

  const handleCustomClick = () => {
    setSelectedAmount(null);
    setCustomInputVisible(true);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(value);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const displaySymbol = currency === "USD" ? "$" : "₦";
  const presetAmounts = currency === "USD" ? usdAmounts : ngnAmounts;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAmount || !formData.fullName || !formData.email) {
      alert("Please complete your name, email, and select a donation amount.");
      return;
    }
    e.target.submit();
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 md:p-8 bg-white rounded-2xl shadow-xl font-sans">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B89B5E]">
        Make a Donation
      </h3>

      {/* FormSubmit Config */}
      <form
        action="https://formsubmit.co/your-email@example.com" // CHANGE THIS
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-7"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="Donation Amount" value={`${displaySymbol}${selectedAmount || 0}`} />
        <input type="hidden" name="Currency" value={currency} />
        <input type="hidden" name="_subject" value={`New Donation: ${displaySymbol}${selectedAmount || 0}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />

        {/* === SECTION 1: Donor Info === */}
        <div className="space-y-5">
          <div className="fs-field ">
            <label className="fs-label" htmlFor="full-name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="fs-input w-full border-gray-600 border-2 rounded px-3 py-2 resize-none h-[2rem] md:w-1/3 text-center"
              id="full-name"
              name="full-name"
              type="text"
              placeholder="e.g. Ada Lovelace"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="fs-field ">
            <label className="fs-label" htmlFor="email">
              Email Address  <br />
            </label>
            <input
              className="fs-input w-full border-gray-600 border-2 rounded px-3 py-2 resize-none h-[2rem] md:w-1/3 text-center"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="fs-field ">
            <label className="fs-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="fs-input w-full border-gray-600 border-2 rounded px-3 py-2 resize-none h-[2rem] md:w-1/3 text-center"
              id="phone"
              name="phone"
              type="tel"
              placeholder="+234 801 234 5678"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* === SECTION 2: Currency & Amount === */}
        <div className="space-y-5">
          <div className="flex justify-center gap-8 text-lg font-medium">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="currency"
                value="USD"
                checked={currency === "USD"}
                onChange={handleCurrencyChange}
                className="w-4 h-4 text-[#B89B5E] focus:ring-[#B89B5E]"
              />
              <span className="ml-2">USD</span>
            </label>
            <label className="flex items-center cursor-pointer ">
              <input
                type="radio"
                name="currency"
                value="NGN"
                checked={currency === "NGN"}
                onChange={handleCurrencyChange}
                className="w-4 h-4 text-[#B89B5E] focus:ring-[#B89B5E]"
              />
              <span className="ml-2">NGN</span>
            </label>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handlePresetClick(amount)}
                className={`px-3 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-md ${
                  selectedAmount == amount && !customInputVisible
                    ? "bg-[#B89B5E] text-white ring-2 ring-offset-2 ring-[#B89B5E]"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {displaySymbol}{amount.toLocaleString()}
              </button>
            ))}
            <button
              type="button"
              onClick={handleCustomClick}
              className={`px-3 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-md ${
                customInputVisible
                  ? "bg-[#B89B5E] text-white ring-2 ring-offset-2 ring-[#B89B5E]"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {displaySymbol}Custom
            </button>
          </div>

          {customInputVisible && (
            <div className="fs-field">
              <label className="fs-label" htmlFor="customAmount">
                Custom Amount ({currency}) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                  {displaySymbol}
                </span>
                <input
                  id="customAmount"
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="fs-input pl-10"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* === SECTION 3: Summary === */}
        <div className="text-center py-3">
          <p className="text-lg font-semibold">
            You are donating:{" "}
            <span className="text-2xl text-[#B89B5E] font-bold">
              {selectedAmount ? `${displaySymbol}${Number(selectedAmount).toLocaleString()}` : `${displaySymbol}0`}
            </span>
          </p>
        </div>

        <div className="text-center">
 {/* Optional Message */}
      <p className="self-start font-bold mt-4 mb-2 md:self-center md:text-xl text-black">
        Have something to say to us?
      </p>
      <textarea
        name="donationMessage"
        id="donationMessage"
        className="w-full border-gray-600 border-2 rounded px-3 py-2 resize-none h-[6rem] md:w-1/3 text-center"
        placeholder="Add a message (optional)"
      ></textarea>
      </div>
  
  

        
        {/* === SECTION 5: Bank Info (BOLD) === */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 text-center space-y-1">
          <p className="text-base font-bold text-amber-900 uppercase tracking-wider">
            International Bank Transfer
          </p>
          <p className="text-xl font-black text-amber-800">
            Account: <span className="underline decoration-2">3456786543356</span>
          </p>
          <p className="text-xs font-medium text-amber-700">
            First Bank of Nigeria • SWIFT: FBNINGLA
          </p>
        </div>

        {/* === SECTION 6: Payment Button === */}
        <div className="flex justify-center mt-8">
          {currency === "NGN" ? (
            <button
              type="submit"
              className="w-full max-w-xs bg-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition shadow-lg"
              disabled={!selectedAmount || !formData.fullName || !formData.email}
            >
              Donate with Paystack
            </button>
          ) : (
            <button
              type="submit"
              className="w-full max-w-xs bg-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition shadow-lg"
              disabled={!selectedAmount || !formData.fullName || !formData.email}
            >
              Donate with PayPal
            </button>
          )}
        </div>
      </form>

      {/* Tailwind Styles for fs-* classes */}
      <style jsx>{`
        .fs-field { @apply space-y-1; }
        .fs-label {
          @apply block text-sm font-semibold text-gray-800;
        }
        .fs-input {
          @apply w-full px-4 py-3 text-base border border-gray-300 rounded-lg
                 focus:ring-2 focus:ring-[#B89B5E] focus:border-[#B89B5E] 
                 outline-none transition-all placeholder:text-gray-400;
        }
        .fs-input::placeholder { @apply text-gray-400; }
      `}</style>
    </div>
  );
}