"use client";

import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Mail, PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full py-8 bg-[#000000]">
        <div className="w-[80%] sm:w-[80%] lg:w-[70%] mx-auto flex flex-wrap lg:flex-nowrap sm:justify-center lg:justify-between justify-between space-x-2 sm:space-x-16 lg:space-x-0 lg gap-y-6">
          <div className="w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-white">FlyVin</h1>
            <p className="text-xs font-semibold text-slate-300">
              Your Journey Begins Here!
            </p>
          </div>
          <div className="space-y-3 text-white sm:w-auto w-[40%]">
            <h1 className="font-bold text-lg">Explore</h1>
            <div className="text-xs sm:text-sm font-semibold space-y-2">
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Services
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Testimonial
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                About
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Pricing
              </p>
            </div>
          </div>
          <div className="space-y-3 text-white sm:w-auto w-[40%]">
            <h1 className="font-bold text-lg">Company</h1>
            <div className="text-xs sm:text-sm font-semibold space-y-2">
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                About
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Careers
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Blog
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          <div className="space-y-3 text-white sm:w-auto w-[40%]">
            <h1 className="font-bold text-lg">Help</h1>
            <div className="text-xs sm:text-sm font-semibold space-y-2">
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Terms & Conditions
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Privacy Policy
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                Cookie
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                FAQ
              </p>
            </div>
          </div>
          <div className="space-y-3 text-white sm:w-auto w-[40%]">
            <h1 className="font-bold text-lg">Connect</h1>
            <div className="text-[10px] sm:text-sm font-semibold space-y-2">
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                <Mail className="inline size-3 sm:size-6 mr-[3px] sm:mr-2" />
                <span>flyvin@gmail.com</span>
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                <PhoneIcon className="inline size-3 sm:size-6 mr-[3px] sm:mr-2" />
                <span>+62123456789</span>
              </p>
              <p className="hover:text-sky-400 duration-150 ease-in-out cursor-pointer">
                <InstagramLogoIcon className="inline size-3 sm:size-6 mr-[3px] sm:mr-2" />
                <span>@flyvin</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-slate-200 text-[9px] font-medium text-center mt-10">
          All rights reserved. Copyright © 2024 Kevin Andra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
