export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center bg-black text-white px-4 sm:px-6 lg:px-[150px] py-12"
      style={{
        backgroundImage: "url('/assets/background5.png')",
      }}
    >
      <div className="w-full max-w-[1140px] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Frame */}
        <div className="flex flex-col gap-6 w-full lg:w-[521px]">
          <p className="text-lg md:text-xl font-normal leading-[120%] font-[Rethink Sans]">
            Have a project in mind?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[120%] font-[Rethink Sans] bg-[radial-gradient(20.45%_109.09%_at_25.34%_68.18%,_#93D1FD_49.03%,_rgba(147,_209,_253,_0.5)_100%)] text-transparent bg-clip-text">
            Lets Talk
          </h2>
          <a
            href="mailto:hey@pixll.com"
            className="text-2xl md:text-4xl font-medium underline leading-[120%] font-[Rethink Sans]"
          >
            hey@pixll.com
          </a>
        </div>

        {/* Right Frame */}
        <div className="flex flex-col justify-between items-start lg:items-end w-full lg:w-[358px]">
          <div className="flex flex-col gap-2 items-start lg:items-end">
            {['LinkedIn', 'GitHub', 'Facebook', 'Instagram', 'Twitter'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm md:text-base font-medium underline leading-[150%] font-[Rethink Sans]"
              >
                {platform}
              </a>
            ))}
          </div>

          <div className="text-xs md:text-sm font-light text-white/70 text-left lg:text-right mt-6">
            <p className="font-[Rethink Sans]">Privacy Terms © 2017-2025 Pixll</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
