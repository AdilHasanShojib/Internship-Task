'use client';
import { ArrowUpRight } from "lucide-react";

export default function Insights() {
  return (
    
    <section
      className="w-full bg-cover bg-center flex justify-center py-24 px-4 sm:px-6 lg:px-0"
      style={{ backgroundImage: "url('/assets/background4.png')" }}
    >
      <div className="w-full max-w-[1140px] flex flex-col gap-12">
        
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-[150%] tracking-[-1.1%] font-[Rethink Sans]">
            Featured Insights
          </h2>
          <p className="text-base md:text-lg font-normal leading-[120%] max-w-[372px] text-center">
            Lorem ipsum dolor sit amet <br /> consectetur Eget at at nunc lorem.
          </p>
        </div>

        
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="w-full flex flex-col sm:flex-row sm:items-center justify-between rounded-[8px] p-4 md:p-6 bg-white bg-opacity-[0.05] border border-white/10 gap-4"
            >
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                <div className="text-xl md:text-2xl font-bold leading-[150%] bg-gradient-to-r from-[#3C97F5] via-[#73BFFA] to-[#93D1FD] text-transparent bg-clip-text">
                  {num.toString().padStart(2, '0')}
                </div>
                <p className="text-lg md:text-xl font-semibold leading-[120%]">
                  How to Protect Your Identity While Traveling
                </p>
              </div>
              <div className="text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full flex justify-center pt-8">
          <button
            className="rounded-[48px] px-6 md:px-8 py-4 md:py-5 text-white text-sm md:text-lg flex items-center gap-2"
            style={{
              background: "linear-gradient(96.28deg, #73BFFA 2.11%, #3C97F5 113.83%)",
            }}
          >
            View more
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}