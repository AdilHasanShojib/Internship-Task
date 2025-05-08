import { ArrowUpRight } from "lucide-react";

export default function Insights() {
  return (
    // Insights Section
<section className="w-full h-[980px] bg-cover bg-center flex justify-center py-24"
style={{
  backgroundImage: "url('/assets/background4.png')",
}}>
  <div className="w-[1140px] flex flex-col gap-12">
    {/* Top Frame */}
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-[48px] font-bold leading-[150%] tracking-[-1.1%] font-[Rethink Sans]">
        Featured Insights
      </h2>
      <p className="text-[20px] font-normal leading-[120%] max-w-[372px] text-center">
        Lorem ipsum dolor sit amet <br/>
        consectetur Eget at at nunc lorem.
      </p>
    </div>

    {/* Middle Frame */}
    <div className="flex flex-col gap-6">
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          className="w-full flex items-center justify-between rounded-[8px] p-6 bg-white bg-opacity-[0.05] border border-white/10"
        >
          <div className="flex items-center gap-6">
            <div className="text-[24px] font-bold leading-[150%] bg-gradient-to-r from-[#3C97F5] via-[#73BFFA] to-[#93D1FD] text-transparent bg-clip-text">
              {num.toString().padStart(2, '0')}
            </div>
            <p className="text-[24px] font-semibold leading-[120%]">
              How to Protect Your Identity While Traveling
            </p>
          </div>
          <div className="text-white">
          <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      ))}
    </div>

    {/* Footer Frame */}
    <div className="w-full flex justify-center pt-12">
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
    </div>
  </div>
</section>
  );
}
