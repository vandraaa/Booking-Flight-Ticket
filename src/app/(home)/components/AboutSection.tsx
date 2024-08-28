import Image from "next/image";

const data = [
  {
    title: "100K+",
    desc: "flights were successfully delivered",
  },
  {
    title: "92%",
    desc: "Customer satisfaction rate is 92%",
  },
  {
    title: "24/7",
    desc: "FlyVin is available 24/7",
  },
];

const Card = ({ title, desc }: any) => {
    return (
      <div
        className={`bg-white rounded-lg shadow-lg px-6 py-3 
          w-[70%] lg:w-[30%] md:w-[40%] sm:w-[50%] xs:w-full hover:translate-y-[-5px] cursor-pointer duration-300 ease-in-out`}
      >
        <h2 className="sm:text-xl text-xs font-bold text-slate-800">{title}</h2>
        <p className="text-slate-500 text-opacity-75 w-full font-semibold text-[7px] sm:text-xs">
          {desc}
        </p>
      </div>
    );
  };

const AboutSection = () => {
  return (
    <div className="min-h-[90vh] py-[10vh] w-full bg-slate-800 flex flex-col justify-center">
      <div className="sm:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-x-16">
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <p className="text-xs sm:text-base font-bold text-slate-300">About Us</p>
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mt-3 sm:mt-5">
              Your Journey Begins Here!
            </h1>
            <p className="text-slate-300 text-opacity-75 font-semibold text-xs sm:text-sm mt-1 sm:mt-2">
              Booking a flight ticket has never been easier. Our platform allows
              you to search and compare flights effortlessly. With just a few
              clicks, you can find the best deals tailored to your needs.
              Whether you're traveling for business or leisure, our
              user-friendly interface ensures a smooth booking experience.
              Secure payment options provide peace of mind during transactions.
              Enjoy the convenience of booking your flight anytime, anywhere.
            </p>
          </div>
          <Image
            src={"/assets/image/traveler.jpg"}
            width={430}
            height={430}
            alt="A traveler ready for their journey"
            className="rounded-3xl shadow-lg w-[280px] sm:w-[400px] lg:w-[430px]"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 lg:gap-y-0 mt-5 sm:mt-10">
          {data.map((item, index) => (
            <Card key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;