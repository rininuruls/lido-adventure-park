"use client";

import { image } from "framer-motion/client";

const galleryImages = [
  {
    image: "/images/paint-ball.webp",
    title: "Paintball",
    desc:" merupakan aktivitas outbound favorit untuk melatih kerjasama tim di dalam simulasi peperangan.",
  },
  {
    image: "/images/high-rope.webp",
    title: "High Rope",
    desc: "Aktivitas outbound di ketinggian yang penuh tantangan melewati rintangan dengan berbagai pilihan tingkat kesulitan.",
  },
  {
    image: "/images/kidsplay.webp",
    title: "Kids Adventure & Playground",
    desc: "Area bermain Wahana outbound untuk anak-anak, seperti Flying Fox, High Rope, dan lainnya",
  },
  {
    image: "/images/flying-fox.webp",
    title: "Flying Fox",
    desc: "Rasakan sensasi memacu adrenaline melintasi Danau Lido menggunakan tali sepanjang 300 meter",
  },
  {
    image: "/images/kayaking.webp",
    title: "Kayaking",
    desc: "Nikmati pengalaman seru berkeliling menelusuri Danau Lido menggunakan perahu kayak.",
  },
  {
    image: "/images/raft-building.webp",
    title: "Raft Building ",
    desc: "Latih kerjasama tim dengan membangun perahu rakit secara berkelompok untuk menyeberangi Danau Lido.",
  },
  
  {  image: "/images/minizoo.webp",
    title: "Mini Zoo ",
    desc: "Tempat favorit anak-anak berinteraksi dengan berbagai satwa lucu seperti Rusa Tutul, Angsa, Landak dan lainnya.",
  },
  {  image: "/images/lido bridge.webp",
    title: "Lido Suspension Bridge ",
    desc: "Fun River Experience",
  },
{  image: "/images/camping.webp",
    title: "Camping Ground ",
    desc: "Area berkemah di alam terbuka dikelilingi hutan pinus yang cocok untuk Anda dan keluarga",
  }, 
{  image: "/images/treehouse.webp",
    title: "Tree House ",
    desc: "Bersantai di rumah pohon dengan desain unik setelah menikmati berbagai Wahana outbound di Lido Adventure Par",
  },
  {  image: "/images/funoffroad.webp",
    title: "Fun Off Road ",
    desc: "Nikmati keseruan berkeliling Lido Adventure Park menggunakan kendaraan ATV (All Terrain Vehicle).",
  },
  {  image: "/images/bamborafting.webp",
    title: "Bamboo Raft ",
    desc: "keluarga atau orang tercinta menyusuri Danau Lido menggunakan perahu bambu.",
  },
  {  image: "/images/shooting-target.webp",
    title: "Shooting Target",
    desc: "Aktivitas yang melatih konsentrasi dan ketepatan menembak sasaran menggunakan senapan.",
  },
  {  image: "/images/archery.webp",
    title: "Archery",
    desc: "Aktivitas yang melatih konsentrasi dalam mengincar target dengan menggunakan busur dan anak panah.",
  },
  {  image: "/images/sky-bike.webp",
    title: "Sky Bike",
    desc: "Pengalaman unik melintasi Danau Lido dengan bersepeda di atas tali dengan ketinggian 20 meter",
  },
{  image: "/images/lido bridge.webp",
    title: "Lido Suspension Bridge",
    desc: "Jelajahi 3 buah Jembatan gantung melewati Danau Lido sepanjang 200 m, 150 m, dan 120 m",}                                                                                                                    
  


  
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-32 bg-gradient-to-br from-white via-green-50 to-lime-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-lime-500 mb-4">
          Gallery
        </p>

        <h2 className="text-6xl font-black text-green-950 mb-14">
          Adventure Moments
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[380px]
                h-[550px]
                rounded-[32px]
                overflow-hidden
                shadow-xl
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                transition-all
                duration-500
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70">
                  {item.desc}
                </p>
              </div>

              <div
                className="
                  absolute
                  top-6
                  right-6
                  w-12
                  h-12
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-white
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
              >
                →
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}