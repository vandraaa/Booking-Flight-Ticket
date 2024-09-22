"use client";

import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { logout } from "../(home)/lib/action";
import Swal from "sweetalert2";

export const Navbar = ({ session, user }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadLoading, setLoadLoading] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, Logout!",
        showCancelButton: true,
      });

      if (response.isConfirmed) {
        setLoadLoading(true);
        const result = await logout();
        if (result.success) {
          Swal.fire({
            title: "Success",
            text: result.successMessage || "Logout success",
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          });
          setLoadLoading(false);
          setIsOpen(false);
        }
      }
    } catch (err) {
      console.log(err);

      Swal.fire({
        title: "Error",
        text: "Logout failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="w-[80%] h-20 text-white flex mx-auto items-center justify-between z-50 bg-transparent relative">
      <div className="flex items-center">
        <Link href={"/"} className="text-2xl font-bold">
          FlyVin
        </Link>
      </div>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 min-h-screen z-50 bg-gray-800 lg:bg-transparent w-[60%] lg:w-auto fixed lg:relative top-0 right-0 p-8 space-y-5 lg:space-y-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="lg:hidden flex justify-between">
          <h1 className="text-lg font-bold">Menu</h1>
          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <X />
          </div>
        </div>
        <p className="text-sm font-semibold cursor-pointer pt-4 lg:pt-0 hover:text-slate-200 duration-300 ease-in-out">
          Flash Sale
        </p>
        <Link href={"/flights"} className="text-sm font-semibold cursor-pointer hover:text-slate-200 duration-300 ease-in-out">
          Flights
        </Link>
        <p className="text-sm font-semibold cursor-pointer hover:text-slate-200 duration-300 ease-in-out">
          About
        </p>
        <div>
          {session && user.role === "CUSTOMER" ? (
            <div className="flex justify-between gap-x-2">
              <Link
                href={"/my-tickets"}
                className={`${
                  isOpen
                    ? "bg-white text-black hover:bg-slate-200"
                    : "bg-slate-800 hover:bg-black text-white"
                } font-semibold text-[13px] text-center px-6 py-[6px] rounded-3xl duration-300 ease-in`}
              >
                My Tickets
              </Link>
              {loadLoading ? (
                <span className="loading loading-spinner loading-sm lg:ml-3"></span>
              ) : (
                <button
                  onClick={handleLogout}
                  type="submit"
                  className="lg:ml-3"
                >
                  <LogOut />
                </button>
              )}
            </div>
          ) : (
            <Link
              href={"/sign-in"}
              className={`${
                isOpen
                  ? "bg-white text-black hover:bg-slate-200"
                  : "bg-slate-800 hover:bg-black text-white"
              } font-semibold text-[13px] text-center px-6 py-[6px] rounded-3xl duration-300 ease-in`}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
