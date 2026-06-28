"use client";

import { useState } from "react";

const activities = [
  {
    title: "Fun Offroad 200cc",
    price: "Mulai dari IDR 300K,- nett/pax",
    image: "/images/offroad.jpeg",
    description:
      "Jelajahi trek offroad dan alam pegunungan Lido menggunakan kendaraan ATV.",
  },
  {
    title: "Fun Offroad 320cc",
    price: "Mulai dari IDR 400K,- nett/pax",
    image: "/images/offroad-320cc.jpeg",
    description:
      "Jelajahi trek offroad dan alam pegunungan Lido menggunakan kendaraan ATV.",
  },
  {
    title: "Rafting Adventure",
    price: "Mulai dari IDR 450K,- nett/pax (min 10 pax)",
    image: "/images/rafting-adventure.jpeg",
    description:
      "Rasakan sensasi arung jeram bersama tim dan keluarga di sungai alami.",
  },
  {
    title: "Rafting Family",
    price: "Mulai dari IDR 400K,- nett/pax (min 10 pax)",
    image: "/images/rafting-family.jpeg",
    description:
      "Nikmati sensasi arung jeram bersama keluarga di sungai alami.",
  },
  {
    title: "Rafting Race",
    price: "Mulai dari IDR 200K,- nett/pax (min 30 pax)",
    image: "/images/rafting-race.jpeg",
    description:
      "Aktivitas kompetitif yang menguji kekompakan, strategi, dan kerjasama tim untuk mencapai garis finish secepat mungkin.",
  },
];

export default function Activities() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section
      id="activities"
      className="py-28 bg-gradient-to-br from-white via-green-50 to-lime-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[8px] text-lime-500 text-sm font-semibold">
            Adventure Experience
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-green-950">
            Adventure Activities
          </h2>

          <p className="mt-5 text-lg text-green-700 max-w-3xl mx-auto">
            Nikmati berbagai aktivitas petualangan seru yang dirancang untuk
            keluarga, komunitas, sekolah, maupun perusahaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {activities.map((item, i) => (
            <div
              key={i}
              className="
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => setZoomImage(item.image)}
                  className="
                    h-[280px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                    cursor-zoom-in
                  "
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-black text-green-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-green-700 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5">
                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-lime-100
                      px-4
                      py-2
                      text-lime-700
                      font-bold
                    "
                  >
                    {item.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/6285723842743?text=Halo%20saya%20ingin%20reservasi%20${item.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-lime-500
                    to-green-500
                    px-6
                    py-4
                    text-white
                    font-bold
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Reservasi Sekarang
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ZOOM IMAGE */}
      {zoomImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/90
            flex
            items-center
            justify-center
            p-6
          "
          onClick={() => setZoomImage(null)}
        >
          <button
            className="
              absolute
              top-6
              right-8
              text-white
              text-5xl
              font-bold
            "
          >
            ×
          </button>

          <img
            src={zoomImage}
            alt="Preview"
            className="
              max-w-[95vw]
              max-h-[95vh]
              object-contain
              rounded-3xl
              shadow-2xl
            "
          />
        </div>
      )}
    </section>
  );
}