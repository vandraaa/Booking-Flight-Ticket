"use client"

import { Navbar } from "@/app/components/navbar"

export const HomeSection = () => {
    return (
        <section className="h-screen bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20" />
          <div className="relative">
            <Navbar />

            <div className="sm:w-[80%] w-[85%] mx-auto mt-20 my-16">
              <div className="text-white font-bold text-[26px] sm:text-5xl lg:text-5xl lg:space-y-2">
                <h1>Booking Made Easy</h1>
                <h1>For Endless Adventures</h1>
              </div>
              <div className="text-white font-medium text-sm mt-4 sm:mt-6 w-[80%] sm:w-2/3 lg:w-1/2">
                <p>
                  With our user-friendly platform, you can book your flights in
                  just a few clicks, leaving you more time to dream about your
                  next destination.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}