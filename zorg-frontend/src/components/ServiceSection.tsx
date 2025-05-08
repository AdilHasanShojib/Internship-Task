import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-transparent">
      <div className="w-[1140px]">
        {/* Description Text */}
        <p className="text-[40px] leading-[150%] font-medium font-rethink text-white/30 mb-12">
          We are a full-service studio creating transformative{" "}
          <span className="text-white">digital experiences and solutions.</span>{" "}
          specializing in{" "}
          <span className="text-white">websites and web applications.</span>
        </p>

        {/* 4 Cards */}
        <section className="w-full flex justify-center py-20 bg-transparent">
  <div className="w-[1140px] h-[427px] relative">
    {/* Card 1 */}
    <div className="absolute top-[49px] left-0 w-[286px] h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
      <Image
        src="/assets/left.png"
        alt="All-in-One (AIO) Service"
        width={286}
        height={314}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Card 2 */}
    <div className="absolute top-[113px] left-[285px] w-[286px] h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
      <Image
        src="/assets/midLeft.png"
        alt="Project-Based Development"
        width={286}
        height={314}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Card 3 */}
    <div className="absolute top-[66px] left-[570px] w-[286px] h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
      <Image
        src="/assets/midRight.png"
        alt="Scalable Dev Partnership"
        width={286}
        height={314}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Card 4 */}
    <div className="absolute  left-[855px] w-[286px] h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
      <Image
        src="/assets/right.png"
        alt="End-to-End Consulting"
        width={286}
        height={314}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

        
        </div>
    </section>
  );
}
