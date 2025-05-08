
export default function Footer() {
  return (
    <footer className="w-full h-[320px] bg-cover bg-center bg-black text-white px-[150px] py-[48px]"
    style={{
      backgroundImage: "url('/assets/background5.png')",
    }}>
  <div className="w-full max-w-[1140px] mx-auto flex justify-between">
    {/* Left Frame */}
    <div className="flex flex-col gap-[32px] w-[521px]">
      <p className="text-[24px] font-normal leading-[120%] font-[Rethink Sans]">Have a project in mind?</p>
      <h2 className="text-[64px] font-bold leading-[120%] font-[Rethink Sans] bg-[radial-gradient(20.45%_109.09%_at_25.34%_68.18%,_#93D1FD_49.03%,_rgba(147,_209,_253,_0.5)_100%)] text-transparent bg-clip-text">
        Lets Talk
      </h2>
      <a
        href="mailto:hey@pixll.com"
        className="text-[64px] font-medium underline leading-[120%] font-[Rethink Sans]"
      >
       hey@pixll.com
      </a>
    </div>

    {/* Right Frame */}
    <div className="flex flex-col justify-between items-end w-[358px]">
  <div className="flex flex-col gap-4 items-end w-[76px]">
    <a href="#" className="text-[16px] font-medium underline leading-[150%] font-[Rethink Sans]">LinkedIn</a>
    <a href="#" className="text-[16px] font-medium underline leading-[150%] font-[Rethink Sans]">GitHub</a>
    <a href="#" className="text-[16px] font-medium underline leading-[150%] font-[Rethink Sans]">Facebook</a>
    <a href="#" className="text-[16px] font-medium underline leading-[150%] font-[Rethink Sans]">Instagram</a>
    <a href="#" className="text-[16px] font-medium underline leading-[150%] font-[Rethink Sans]">Twitter</a>
  </div>

  <div className="text-[14px] font-light text-white/70 text-right mt-6">
    
    <p className="font-[Rethink Sans]">Privacy Terms © 2017-2025 Pixll</p>
  </div>
</div>

  </div>
</footer>


  );
}
