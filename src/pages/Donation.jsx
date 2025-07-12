import DonationAmountPicker from "../components/donation/AmountPicker";

const Donation = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-black">
      <div className="relative w-full h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/share.jpeg')] md:h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-4xl mt-4 text-gray-100 text-center md:text-5xl">
            Support the Journey of Healing
          </h2>
          <p className="mt-2 md:mt-4 text-white text-lg [word-spacing:0.2em] tracking-wider">
            Your donation makes a difference
          </p>
        </div>
      </div>

      <DonationAmountPicker />
    </section>
  );
};

export default Donation;
