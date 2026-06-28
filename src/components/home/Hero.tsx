"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/hero/lido-bridge.webp"
        alt="Lido Adventure Park"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center text-white"
        >
          <p className="mb-4 uppercase tracking-[8px] text-lime-300">
            
          </p>

          <h1
  className="
    text-4xl
    md:text-6xl
    font-Montserrat
    tracking-tight
    text-white
    drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
  "
>
  LIDO ADVENTURE PARK
</h1>

          <p
  className="
    mt-6
    text-lime-300
    text-xl
    md:text-2xl
    font-Montserrat
    tracking-[4px]
    drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
  "
>
  THE REAL ADVENTURE WITH NATURE
</p>
          <p
            className="mt-8 max-w-4xl text-lg text-white/90 leading-9">

          
          
            Petualangan di Adventure Park terbesar di Indonesia. Lido Adventure Park merupakan kawasan outbound terbesar di Indonesia yang dikembangkan oleh MNC Land. Kawasan outbound ini memiliki panorama alam yang sejuk yang dikelilingi oleh Gunung Gede Pangrango dan Gunung Salak. Agendakan kegiatan petualangan outbound, fun games, bersama keluarga maupun perusahaan Anda di Lido Adventure Park.
            
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#activities"
              className="
                rounded-full
                bg-lime-400
                px-8
                py-4
                font-bold
                text-black
                hover:scale-105
                transition
              "
            >
              Explore Activities
            </a>

            <a
              href="#contact"
              className="
                rounded-full
                border-2
                border-white
                px-8
                py-4
                font-bold
                text-white
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Reservation
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F4F8F4] to-transparent" />
    </section>
  );
}