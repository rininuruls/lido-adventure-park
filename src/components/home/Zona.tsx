"use client";

import { useState } from "react";

export default function Zona() {
const [showMap, setShowMap] = useState(false);


const zones = [
{
icon: "🏝️",
title: "Pulau Khayangan",
desc: "Zona dengan panorama danau yang indah untuk aktivitas keluarga, wisata alam, dan rekreasi santai.",
},
{
icon: "🏕️",
title: "Pulau Bidadari",
desc: "Area petualangan dengan berbagai kegiatan outbound, gathering, dan team building.",
},
{
icon: "🚣",
title: "Pulau Biola",
desc: "Destinasi favorit untuk aktivitas outdoor seperti kayaking, fun games, dan edukasi alam.",
},
{
icon: "🌳",
title: "Soekarno Park",
desc: "Kawasan hijau yang memadukan wisata sejarah, ruang terbuka, dan aktivitas keluarga.",
},
];

const [selectedFacility, setSelectedFacility] = useState<any>(null);

const facilities = [
  {
    title: "Mini Zoo",
    image: "/images/minizoo.webp",
    desc: "Area edukasi satwa yang cocok untuk keluarga dan anak-anak dengan berbagai koleksi hewan yang menarik.",
  },
  {
    title: "Lido Suspension Bridge",
    image: "/images/lido bridge.webp",
    desc: "Jembatan gantung ikonik yang menawarkan panorama danau dan pegunungan yang menakjubkan.",
  },
  {
    title: "Main Entrance",
    image: "/images/main e.jpg",
    desc: "Gerbang utama kawasan Lido Adventure Park dengan desain yang modern dan representatif.",
  },
  {
    title: "Bird Sanctuary",
    image: "/images/bird s.jpg",
    desc: "Kawasan konservasi dan edukasi berbagai jenis burung dalam lingkungan alami.",
  },
  {
    title: "Rest Corner",
    image: "/images/rest corner.png",
    desc: "Area istirahat nyaman untuk bersantai setelah menikmati aktivitas petualangan.",
  },
  {
    title: "Wetland Arena Lido",
    image: "/images/hijau.png",
    desc: "Kawasan wisata alam terbuka dengan panorama danau dan area hijau yang luas.",
  },
  {
    title: "Argo Field",
    image: "/images/argo.jpg",
    desc: "Area pertanian edukatif yang memberikan pengalaman belajar di alam terbuka.",
  },
  {
    title: "Durian Farm",
    image: "/images/durian.jpg",
    desc: "Kebun durian dengan berbagai varietas unggulan yang dapat dinikmati pengunjung.",
  },
  {
    title: "Amphitheater",
    image: "/images/amphit.png",
    desc: "Area pertunjukan dan gathering outdoor dengan kapasitas besar.",
  },
];

return ( <section
   id="zona"
   className="py-20 md:py-32 bg-gradient-to-br from-[#F8FCF6] via-[#EEF7EC] to-[#E6F4DD]"
 > <div className="max-w-7xl mx-auto px-6">

```
    {/* HEADING */}
    <div className="text-center mb-16">
      <span className="uppercase tracking-[4px] md:tracking-[8px] text-lime-500 text-sm font-semibold">
        Explore
      </span>

      <h2 className="mt-4 text-3xl
sm:text-4xl
lg:text-6xl font-black text-green-950">
        Adventure Zona
      </h2>

      <p className="mt-5 text-sm
sm:text-base
lg:text-xl
leading-7 text-green-700 max-w-4xl mx-auto">
        Lido Adventure Park terdiri dari beberapa pulau atau zona adventure,
        yakni Pulau Khayangan seluas 1.836 meter persegi, Pulau Bidadari
        seluas 1.064 meter persegi, Pulau Biola seluas 5.681 meter persegi,
        dan terintegrasi dengan Soekarno Park seluas 3.478 meter persegi.
        Keempat zona tersebut menjadi bagian dari Lido Adventure Park yang
        memadukan konsep wisata alam terbuka, wisata kuliner, wisata sejarah,
        dan wisata outbound.
      </p>
    </div>

    <div className="text-sm
sm:text-base
lg:text-xl
leading-7">

      {/* MAP */}
      <div
        onClick={() => setShowMap(true)}
        className="
          overflow-hidden
          rounded-[36px]
          bg-white
          border
          border-green-100
          shadow-xl
          cursor-pointer
        "
      >
        <img
          src="/images/zona.webp"
          alt="Zona Lido Adventure Park"
          className="
            w-full
            h-full
            object-cover
            transition-all
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* ZONES */}
      <div className="grid sm:grid-cols-2 gap-6">
        {zones.map((zone, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-[28px]
              p-5
md:p-7
              border
              border-green-100
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
            "
          >
            <div className="text-4xl
md:text-5xl mb-4">
              {zone.icon}
            </div>

            <h3 className="text-xl
md:text-2xl font-black text-green-950">
              {zone.title}
            </h3>

            <p className="mt-3 text-green-700 leading-relaxed">
              {zone.desc}
            </p>
          </div>
        ))}
      </div>

    </div>

    {<div className="grid
grid-cols-2
md:grid-cols-4 gap-6 mt-20">
  {facilities.map((facility, index) => (
    <button
      key={index}
      onClick={() => setSelectedFacility(facility)}
      className="
        bg-white
        rounded-2xl
        p-5
        text-center
        shadow-lg
        border
        border-green-100
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <p className="font-semibold text-green-900">
        {facility.title}
      </p>
    </button>
  ))}
</div>}
    {/* STATS */}
    <div className="grid md:grid-cols-4 gap-6 mt-20">

      <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
        <h3 className="text-3xl
md:text-4xl font-black text-lime-500">4</h3>
        <p className="mt-2 text-green-800">Adventure Zones</p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
        <h3 className="text-4xl font-black text-lime-500">20+</h3>
        <p className="mt-2 text-green-800">Outdoor Activities</p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
        <h3 className="text-4xl font-black text-lime-500">1000+</h3>
        <p className="mt-2 text-green-800">Visitors Monthly</p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
        <h3 className="text-4xl font-black text-lime-500">100%</h3>
        <p className="mt-2 text-green-800">Nature Experience</p>
      </div>

    </div>

  </div>

  {/* MODAL MAP */}
  {showMap && (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/90
        flex
        items-center
        justify-center
        p-6
      "
      onClick={() => setShowMap(false)}
    >
      <div className="relative max-w-7xl w-full">

        <button
          onClick={() => setShowMap(false)}
          className="
            absolute
            -top-14
            right-0
            text-white
            text-5xl
            font-bold
          "
        >
        </button>

        <img
          src="/images/zona.webp"
          alt="Zona Lido Adventure Park"
          className="
            w-full
            rounded-3xl
            shadow-2xl
            max-h-[90vh]
            text-sm
md:text-base
            object-contain
          "
        />
      </div>
    </div>
    
    
  )}
  {selectedFacility && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/80
      flex
      items-center
      justify-center
      p-6
    "
    onClick={() => setSelectedFacility(null)}
  >
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        max-w-2xl
        w-full
        shadow-2xl
      "
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedFacility.image}
        alt={selectedFacility.title}
        className="w-full h-[h-56
md:h-[400px] object-cover"
      />

      <div className="p-5
md:p-8">
        <h3 className="text-2xl
md:text-4xl font-black text-green-950">
          {selectedFacility.title}
        </h3>

        <p className="mt-4 text-green-700 leading-relaxed">
          {selectedFacility.desc}
        </p>

        <a
          href={`https://wa.me/6285723842743?text=Halo%20saya%20ingin%20bertanya%20tentang%20${selectedFacility.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            w-full
            rounded-2xl
            bg-[#25D366]
            py-4
            text-white
            font-bold
            hover:scale-105
            transition-all
          "
        >
          💬 Konsultasi & Booking
        </a>
      </div>
    </div>
  </div>
)}
</section>

);
}