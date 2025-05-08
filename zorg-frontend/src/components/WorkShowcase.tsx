'use client';

import Image from 'next/image';

export default function WorkShowcase() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="relative w-full max-w-[1140px] h-[330px] px-4 md:px-6 lg:px-0">
        {/* Left Image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[360px] h-[280px] rounded-[24px] border-[5px] border-white overflow-hidden hidden md:block">
          <Image
            src="/assets/work1.png"
            alt="Left Work"
            width={360}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[360px] h-[300px] rounded-[24px] border-[5px] border-white overflow-hidden">
          <Image
            src="/assets/work2.png"
            alt="Middle Work"
            width={360}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[360px] h-[280px] rounded-[24px] border-[5px] border-white overflow-hidden hidden md:block">
          <Image
            src="/assets/work3.png"
            alt="Right Work"
            width={360}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
