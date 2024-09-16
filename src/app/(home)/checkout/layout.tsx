import Footer from "@/app/components/footer";
import type { Metadata } from "next";
import "../../globals.css";
import "../../font.css";
import QCProvider from "../flights/provider/query-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FlyVin - Checkout",
};

const midtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ?? ""

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QCProvider>
          <main>
            <section className="sm:min-h-[45vh]  flex flex-col justify-center min-h-[25vh] md:min-h-[25vh] lg:min-h-[45vh] w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20 h-[50vh] sm:h-[45vh] lg:h-[55vh]" />
              <div className="relative">
                <div className="sm:w-[80%] w-[85%] mx-auto text-white ">
                  <h1 className="text-xl sm:text-3xl font-bold">
                    Checkout Your Flight
                  </h1>
                  <p className="text-slate-200 text-xs sm:text-xs font-semibold">
                    Enjoy new experience of flight
                  </p>
                </div>
              </div>
            </section>

            <div className="relative z-10 m-0 p-0">{children}</div>

            <Footer />
          </main>
        </QCProvider>

        <Script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={midtransClientKey}
        />
      </body>
    </html>
  );
}
