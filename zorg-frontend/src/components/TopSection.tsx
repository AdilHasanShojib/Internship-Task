'use client';
import Image from 'next/image';

export default function TopSection() {
  const logos = [
    "fixmyphone.png",
    "Verdant.png",
    "duet.png",
    "apex.png",
    "lindholms.png",
  ];

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center font-[Rethink Sans] flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/assets/background3.png')" }}
    >
      <div className="w-full max-w-[1140px] flex flex-col items-center px-4">
        {/* Navbar */}
        <nav className="w-full mt-8 px-6 py-4 rounded-full border border-white/10 backdrop-blur flex justify-between items-center">
          <div className="w-[38px] h-[36px]">
            <Image src="/assets/nav.png" alt="Logo" width={38} height={36} />
          </div>
          <ul className="hidden md:flex gap-6 text-base font-medium font-dm">
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <button className=" w-[32px] h-[32px] bg-white rounded-full text-black flex items-center justify-center text-sm">
            ≡
          </button>
        </nav>

        {/* Hero Section */}
        <div className="mt-16 text-center max-w-[740px]">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-tight font-bold">
            We Shape Your Ideas Into<br />
            <span className="text-white">Awesome Digital Experience</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl font-medium font-rethink">
            Lorem ipsum dolor sit amet consectetur. Eget at et nunc lorem.
          </p>
          <button className="mt-10 px-6 py-4 md:px-8 md:py-5 rounded-full text-white text-lg font-medium font-rethink"
            style={{ background: 'linear-gradient(96.28deg, #73BFFA 2.11%, #3C97F5 113.83%)' }}>
            Book a call with us
          </button>
        </div>

        {/* Logos Row */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-12">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={`/assets/${logo}`}
              alt={`Partner ${i + 1}`}
              width={146}
              height={31}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

