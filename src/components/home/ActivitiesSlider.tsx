"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Shooting Target",
    image: "/activities/shooting.jpg",
    desc: "Latih konsentrasi dan ketepatan menembak sasaran.",
  },
  {
    title: "Kayaking",
    image: "/activities/kayak.jpg",
    desc: "Menjelajahi danau dengan pengalaman seru.",
  },
  {
    title: "Raft Building",
    image: "/activities/raft.jpg",
    desc: "Bangun rakit bersama tim dan menyeberang danau.",
  },
  {
    title: "Bamboo Raft",
    image: "/activities/bamboo.jpg",
    desc: "Santai menyusuri danau bersama keluarga.",
  },
  {
    title: "Fun Offroad",
    image: "/activities/offroad.jpg",
    desc: "Adventure ATV di area hutan dan pegunungan.",
  },
];

export default function ActivitiesSlider() {
  return (
    <section
      id="activities"
      className="relative py-20 md:py-32 bg-gradient-to-br from-white via-green-50 to-lime-100"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/forest-bg.jpg"
          alt="forest"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      {/* GREEN OVERLAY */}
      <div className="absolute inset-0 bg-green-900/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm uppercase tracking-[3px] md:tracking-[6px] text-lime-400">
          Wahana
        </p>

        <h2 className="mb-14 text-3xl
sm:text-4xl
lg:text-6xl font-black text-white">
          Adventure Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              {/* IMAGE */}
              <div className="relative h-[350px]
md:h-[450px]
lg:h-[500px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-black uppercase text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {item.desc}
                </p>

                <button className="mt-5 rounded-full bg-lime-400 px-4
py-2
md:px-5 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.8)]">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}