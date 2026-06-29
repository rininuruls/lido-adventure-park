"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    
   <header
  className="
       fixed
    top-0
    left-0
    z-50
    w-full
    border-b
    border-white/10
    bg-gradient-to-r
    from-[#0F2E1E]/90
    via-[#173F2A]/85
    to-[#0F2E1E]/90
    backdrop-blur-lg

  "
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-5">
        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-4 transition duration-300 hover:opacity-80"
        >
          {/* LOGO IMAGE */}
          <img
            src="https://lidoadventurepark.com/Images/Logo/logo_lap.png"
            alt="Lido Adventure Park"
            className="
  w-10
  sm:w-12
  md:w-14
  lg:w-16
  object-contain
  drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]
"
            
          />

{/* LOGO TEXT */}
<div className="leading-none">
  <h1 className="text-base sm:text-lg md:text-3xl font-black uppercase tracking-tight text-white">
    Lido
  </h1>

  <p className="text-[7px] sm:text-[8px] md:text-sm font-medium uppercase tracking-[2px] sm:tracking-[4px] md:tracking-[9px] text-green-400">
    Adventure Park
  </p>
</div>
        </a>

        {/* MENU */}
        <nav className="hidden items-center gap-5
lg:gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Home
          </a>
          <a href="#about"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            About
          </a>
          <a
            href="#activities"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Activities
          </a>

          <a
            href="#outbound"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Outbound
          </a>
          <a
            href="#zona"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Zona
          </a>

          <a
            href="#gallery"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-green-400"
          >
            Contact
          </a>
        </nav>
        <button
  className="
    md:hidden
    text-white
    text-3xl
    font-bold
  "
>
  ☰
</button>

       {/* BUTTON */}
<a
  href="https://wa.me/6285723842743?text=Halo%20saya%20ingin%20reservasi%20di%20Lido%20Adventure%20Park"
  target="_blank"
  rel="noopener noreferrer"
  className="
    hidden
    sm:inline-flex
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-green-500
    to-lime-400
    px-4
    py-2
    md:px-6
    md:py-3
    text-xs
    md:text-sm
    font-semibold
    text-white
    shadow-[0_0_20px_rgba(34,197,94,0.5)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]
  "
>
  Book Now
</a>
{/* MOBILE MENU */}
{isOpen && (
  <div
    className="
      md:hidden
      bg-[#173F2A]
      border-t
      border-white/10
      shadow-lg
      animate-in
      slide-in-from-top
      duration-300
    "
  >
    <nav className="flex flex-col py-4">

      <a
        href="#home"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        About
      </a>

      <a
        href="#activities"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Activities
      </a>

      <a
        href="#outbound"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Outbound
      </a>

      <a
        href="#zona"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Zona
      </a>

      <a
        href="#gallery"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Gallery
      </a>

      <a
        href="#contact"
        onClick={() => setIsOpen(false)}
        className="px-6 py-3 text-white hover:bg-green-700 transition"
      >
        Contact
      </a>

      <a
        href="https://wa.me/6285723842743?text=Halo%20saya%20ingin%20reservasi%20di%20Lido%20Adventure%20Park"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mx-6
          mt-4
          rounded-full
          bg-gradient-to-r
          from-green-500
          to-lime-400
          py-3
          text-center
          font-semibold
          text-white
        "
      >
        Book Now
      </a>

    </nav>
  </div>
)}
      </div>
    </header>
  );
}