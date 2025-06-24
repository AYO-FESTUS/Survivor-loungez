import { useState } from "react";

export default function DonationAmountPicker() {
  const usdAmounts = [5, 10, 20, 50];
  const ngnAmounts = [2000, 5000, 10000, 20000];

  const [currency, setCurrency] = useState("USD"); 
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customInputVisible, setCustomInputVisible] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

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
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  const displaySymbol = currency === "USD" ? "$" : "₦";

  const handlePayWithPaystack = () => {
    // trigger Paystack logic here
    alert(`Paying ₦${selectedAmount} with Paystack`);
  };

  const handlePayWithPayPal = () => {
    // trigger PayPal logic here
    alert(`Paying $${selectedAmount} with PayPal`);
  };

  const presetAmounts = currency === "USD" ? usdAmounts : ngnAmounts;

  return (
    <div className="w-full h-fit mt-4 flex flex-col items-center px-4 font-sans">
      <h3 className="text-lg font-bold mb-3 md:text-2xl mt-4">
        Select an Amount to Donate
      </h3>

      {/* Currency Toggle */}
      <div className="mb-4 flex items-center">
        <label className="font-medium text-sm mr-3 md:text-xl">
          Choose Currency:
        </label>

        <p className="md:text-xl">
          {" "}
          USD{" "}
          <input
            type="radio"
            name="currency"
            value="USD"
            checked={currency === "USD"}
            onChange={handleCurrencyChange}
          />
        </p>

        <p className="ml-4 md:text-xl">
          NGN{" "}
          <input
            type="radio"
            name="currency"
            value="NGN"
            checked={currency === "NGN"}
            onChange={handleCurrencyChange}
          />
        </p>
      </div>

      {/* Amount Picker */}
      <div className="w-full px-4 flex flex-wrap gap-3 mb-4 md:w-1/4">
        {presetAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handlePresetClick(amount)}
            className={`px-4 py-2 rounded md:text-xl ${
              selectedAmount == amount && !customInputVisible
                ? "bg-blue-600 text-white"
                : "text-white bg-black"
            }`}
          >
            {displaySymbol}
            {amount}
          </button>
        ))}
        <button
          onClick={handleCustomClick}
          className={`px-4 py-2 rounded ${
            customInputVisible
              ? "bg-blue-600 text-white"
              : "text-white bg-black"
          }`}
        >
          {displaySymbol}Custom
        </button>
      </div>

      {/* Custom Input */}
      {customInputVisible && (
        <div className="mb-4 w-full">
          <label
            htmlFor="customAmount"
            className="block mb-1 text-sm font-medium md:text-xl"
          >
            Enter Custom Amount:
          </label>
          <input
            id="customAmount"
            type="number"
            min="1"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder={`Enter amount in ${currency}`}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      )}

      {/* Selected Amount Display */}
      <p className="text-base">
        <strong>You are donating</strong>{" "}
        <span className="text-blue-700">
          {selectedAmount
            ? `${displaySymbol}${selectedAmount}`
            : `${displaySymbol}0`}
        </span>{" "}
        <strong>to support our cause.</strong>
      </p>

      {/* Optional Message */}
      <p className="self-start font-bold mt-4 mb-2 md:self-center md:text-xl">
        Have something to say to us?
      </p>
      <textarea
        name="donationMessage"
        id="donationMessage"
        className="w-full border-gray-700 border-2 rounded px-3 py-2 resize-none h-[6rem] md:w-1/3"
        placeholder="Add a message (optional)"
      ></textarea>

      {/* Payment Trigger */}
      <div className="mt-6">
        {currency === "NGN" ? (
          <button
            onClick={handlePayWithPaystack}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            disabled={!selectedAmount}
          >
            Donate with Paystack
          </button>
        ) : (
          <button
            onClick={handlePayWithPayPal}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            disabled={!selectedAmount}
          >
            Donate with PayPal
          </button>
        )}
      </div>
    </div>
  );
}
