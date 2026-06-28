"use client";

export default function Navbar() {
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

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
              w-8
              md:w-10
              object-contain
              drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]
            "
          />

          {/* LOGO TEXT */}
<div className="leading-none">
  <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
    Lido
  </h1>

  <p className="text-[10px] md:text-sm font-medium uppercase tracking-[6px] md:tracking-[9px] text-green-400">
    Adventure Park
  </p>
</div>
        </a>

        {/* MENU */}
        <nav className="hidden items-center gap-8 md:flex">
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
            rounded-full
            bg-gradient-to-r
            from-green-500
            to-lime-400
            px-
            py-3
            text-sm
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

      </div>
    </header>
  );
}