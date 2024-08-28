import { Laptop, Lock, Zap } from "lucide-react";

const data = [
    {
        icon: <Zap className="w-10 h-10" />,
        title: "Fast and Easy Booking",
        desc: "Book your flight with just a few clicks",
    },
    {
        icon: <Laptop className="w-10 h-10" />,
        title: "Responsive & User-Friendly",
        desc: "Smooth experience on desktop and mobile devices.",
    },
    {
        icon: <Lock className="w-10 h-10" />,
        title: "Secure Transactions",
        desc: "Reliable security ensures safe online payments.",
    },
]

const Card = ({ icon, title, desc }: any) => {
    return (
      <div className="bg-gradient-to-r from-[#37355a] to-[#3e3c69] px-6 py-4 rounded-lg shadow-lg flex items-center gap-x-4 transform hover:scale-[1.02]  duration-300 ease-in">
        <div className="text-white flex items-center">
          {icon}
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-white text-base font-bold leading-4">{title}</h1>
          <p className="font-medium text-xs text-cyan-300 mt-1">{desc}</p>
        </div>
      </div>
    );
  };
  


const AdvantagesSection = () => {
  return (
    <div>
      <div className="py-16 bg-[#0a0920]">
        <div className="sm:w-[80%] w-[85%] mx-auto">
          <h1 className="lg:text-2xl sm:text-xl text-lg font-bold text-white text-center">
            Seamless Experience with FlyVin
          </h1>
          <p className="text-slate-400 lg:text-base sm:text-sm text-xs text-center font-semibold">FlyVin Your Seamless Travel Partner.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            {data.map((item, key) => (
                <Card key={key} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
