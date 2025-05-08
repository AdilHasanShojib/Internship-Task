'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function RecentWorks() {
  return (
    <section
      className="w-full bg-cover bg-center flex flex-col items-center gap-12 bg-black text-white py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/assets/background4.png')",
      }}
    >
      
      <div className="w-full max-w-2xl text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[150%] tracking-[-0.011em] font-[Rethink Sans]">
          Our Most Recent Works
        </h2>
        <p className="text-base md:text-lg lg:text-[20px] leading-[120%] font-[Rethink Sans]">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>
      </div>

      
      <div className="w-full max-w-[1140px] space-y-10">
        {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["/assets/l.png", "/assets/r.png"].map((src, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col gap-2 p-6 bg-[#1A1A1A] rounded-lg"
            >
              <div className="w-full h-[300px] md:h-[400px] lg:h-[491px] overflow-hidden rounded-[16px]">
                <Image
                  src={src}
                  alt="Recent Project"
                  width={554}
                  height={491}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-[32px] font-bold leading-[120%] font-[Rethink Sans]">
                    Alcohol Tracker
                  </h3>
                  <p className="text-sm md:text-base lg:text-[24px] font-normal leading-[120%] font-[Rethink Sans]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="rounded-full border border-white px-4 py-2 text-xs flex items-center gap-1">
                  Open <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/assets/w1.png", "/assets/w2.png", "/assets/w3.png"].map((src, idx) => (
            <div
              key={idx}
              className="w-full bg-[#1A1A1A] rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="w-full h-[240px] md:h-[280px] lg:h-[321px] overflow-hidden rounded-[10.54px]">
                <Image
                  src={src}
                  alt={`Work ${idx + 1}`}
                  width={365}
                  height={321}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg md:text-xl font-bold leading-[120%] font-[Rethink Sans]">
                    Alcohol Tracker
                  </h4>
                  <p className="text-xs md:text-sm font-normal leading-[120%] font-[Rethink Sans]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="rounded-full border border-white px-4 py-2 text-xs flex items-center gap-1">
                  Open <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        className="rounded-[48px] px-8 py-5 text-white text-lg flex items-center gap-2"
        style={{
          background:
            "linear-gradient(96.28deg, #73BFFA 2.11%, #3C97F5 113.83%)",
        }}
      >
        View more
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </section>
  );
}