import Image from "next/image";

export default function ServiceSection() {
  return (
<section
      className="w-full bg-cover bg-center flex justify-center items-center py-20 px-4 md:px-6 bg-transparent"
      style={{ backgroundImage: "url('/assets/background5.png')" }}
    >
      <div className="w-full max-w-[1140px]">
        {/* Description Text */}
        <p className="text-[28px] md:text-[40px] leading-[150%] font-medium font-rethink text-white/30 mb-12">
          We are a full-service studio creating transformative{' '}
          <span className="text-white">digital experiences and solutions.</span>{' '}
          specializing in{' '}
          <span className="text-white">websites and web applications.</span>
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="w-full h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
            <Image
              src="/assets/left.png"
              alt="All-in-One (AIO) Service"
              width={286}
              height={314}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="w-full h-[314px] top-[49px]  rounded-[16px] border-[1.4px] border-white overflow-hidden">
            <Image
              src="/assets/midLeft.png"
              alt="Project-Based Development"
              width={286}
              height={314}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="w-full h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
            <Image
              src="/assets/midRight.png"
              alt="Scalable Dev Partnership"
              width={286}
              height={314}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 4 */}
          <div className="w-full h-[314px] rounded-[16px] border-[1.4px] border-white overflow-hidden">
            <Image
              src="/assets/right.png"
              alt="End-to-End Consulting"
              width={286}
              height={314}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
