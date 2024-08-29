import Image from "next/image";

const CardTestimonial = () => {
  return (
    <div className="bg-white rounded-lg shadow-md py-4 px-6">
      <div className="flex items-center gap-x-3">
        <Image
          src={"/assets/image/cust1.jpg"}
          width={64}
          height={64}
          alt="Customer"
          className="w-16 h-16 rounded-full mb-2"
        />
        <div>
            <h3 className="font-bold text-lg leading-4">Hannah Smith</h3>
            <p className="text-xs font-semibold text-gray-500">Customer</p>
        </div>
      </div>
      <p className="italic font-medium text-gray-600 mt-2 text-sm">"FlyVin made my travel so easy!"</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div>
      <div className="py-16 bg-[#0a0920]">
        <div className="sm:w-[80%] w-[85%] mx-auto">
          <h1 className="lg:text-2xl sm:text-xl text-lg font-bold text-white text-center">
            What Our Customers Say
          </h1>
          <p className="text-slate-400 lg:text-base sm:text-sm text-xs text-center font-semibold">
            Real Experience, Real Satisfaction.
          </p>
          <div className="flex justify-center flex-wrap gap-x-6 mt-8">
            <CardTestimonial />
            <CardTestimonial />
            <CardTestimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
