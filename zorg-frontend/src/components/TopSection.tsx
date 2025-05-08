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
    <>
        <section
    className="w-full h-[900px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
    style={{
      backgroundImage: "url('/assets/background.jpg')",
    }}
  >
    <div className=" text-white w-full min-h-[734px] flex flex-col items-center px-6">
      {/* Navbar */}
      <nav className="w-[1140px] h-[90px] mx-auto mt-12 px-6 py-4 rounded-full border border-white/10 backdrop-blur flex justify-between items-center">
        {/* Logo */}
        <div className="w-[38px] h-[36px]">
          {/* Replace with actual logo */}
          <Image src="/assets/nav.png" alt="Logo" width={38} height={36} />
        </div>
        {/* Menu Items */}
        <ul className="flex gap-8 text-base font-medium font-dm">
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        {/* Button Icon */}
        <button className="w-[32px] h-[32px] bg-white rounded-full text-black flex items-center justify-center text-sm">
        ≡
        </button>
      </nav>

      {/* Hero Section */}
      <section className="mt-[64px] text-white text-center max-w-[740px]">
        <h1 className="text-[60px] leading-[120%] font-bold font-rethink">
          We Shape Your Ideas Into<br />
          <span className="text-white">Awesome Digital Experience</span>
        </h1>
        <p className="mt-6 text-[20px] leading-[120%] font-medium font-rethink">
          Lorem ipsum dolor sit amet consectetur. Eget at et nunc lorem.
        </p>
        <div>
        <button className="mt-12 mb-8 px-8 py-5 rounded-full text-white text-lg font-medium font-rethink"
          style={{
            background: 'linear-gradient(96.28deg, #73BFFA 2.11%, #3C97F5 113.83%)',
          }}>
          Book a call with us
        </button>

        </div>
        
      </section>

      {/* Logos Row */}
       <div className="w-[1140px] mx-auto mt-30 flex justify-between items-center">
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
    
   
  

    </>

    
  );
}
