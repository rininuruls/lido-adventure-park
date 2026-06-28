"use client";

import { useState } from "react";

export default function Outbound() {
const [activeTab, setActiveTab] = useState("outdoor");
const [selectedItem, setSelectedItem] = useState<any>(null);
const [zoomImage, setZoomImage] = useState(false);

const outdoorData = [
{
  title: "High Rope",
  price: "IDR 165K,-nett/pax",
  image: "/images/high-rope.webp",
},
{ title: "Flying Fox", price: "IDR 165K,-nett/pax/slide", image: "/images/flying-fox.webp" },
{ title: "Sky Bike", price: "IDR 165K,-nett/pax/one time", image: "/images/sky-bike.webp" },
{ title: "Trekking", price: "IDR 200K,-nett/pax/(3km-min 10 pax)", image: "/images/treking.jpg" },
{ title: "Kayaking", price: "IDR 165K,-nett/pax/45 minutes", image: "/images/kayaking.webp" },
{ title: "ATV 125CC", price: "IDR 275K,-nett/pax/30 minutes", image: "/images/offroad-320cc.jpeg" },
{ title: "ATV Electric", price: "IDR 165K,-nett/pax/30 minutes", image: "/images/atv electric.jpg" },
{ title: "Archery", price: "IDR 115K,-nett/pax/5 arrows", image: "/images/archery.webp" },
{ title: "Paintball", price: "IDR 250K,-nett/pax/2 hours", image: "/images/paint-ball.webp" },
{ title: "Shooting Target", price: "IDR 150K,-nett/pax/25 bullets", image: "/images/shooting-target.webp" },
{ title: "Bicycle", price: "IDR 150K - 200K,-nett/pax/hour", image: "/images/bicyle.jpg" },
];

const outboundData = [
{ title: "Fun Games", price: "IDR 400K,-nett/pax", image: "/images/fungames.jpeg" },
{ title: "Team Building", price: "IDR 450K,-nett/pax", image: "/images/teambuilding.jpeg" },
{ title: "Inflatable Program", price: "IDR 450K,-nett/pax", image: "/images/inflatble.jpeg" },
{ title: "Kids Adventure Race", price: "IDR 175K,-nett/pax", image: "/images/kids.race.webp" },
{ title: "Kids Fun Games", price: "IDR 225K,-nett/pax", image: "/images/kidsfunsgames.jpeg" },
];

const data =
activeTab === "outdoor"
? outdoorData
: outboundData;

return ( <section
   id="outbound"
   className="py-28 px-6 bg-gradient-to-br from-[#F6FBF5] via-[#EEF7EC] to-[#E4F3D5]"
 > <div className="max-w-7xl mx-auto">


    <span className="uppercase tracking-[8px] text-lime-500 text-sm font-semibold">
      Explore
    </span>

    <h2 className="mt-4 text-6xl font-black text-green-950">
      Activities
    </h2>

    <div className="mt-14 grid lg:grid-cols-[280px_1fr] gap-10">

      <div className="space-y-4">

        <button
          onClick={() => setActiveTab("outdoor")}
          className={`
            w-full
            rounded-3xl
            px-6
            py-5
            text-left
            font-bold
            transition-all
            duration-300
            ${
              activeTab === "outdoor"
                ? "bg-lime-400 text-black shadow-xl"
                : "bg-white text-green-900 hover:bg-lime-50"
            }
          `}
        >
          Outdoor Activities
        </button>

        <button
          onClick={() => setActiveTab("outbound")}
          className={`
            w-full
            rounded-3xl
            px-6
            py-5
            text-left
            font-bold
            transition-all
            duration-300
            ${
              activeTab === "outbound"
                ? "bg-lime-400 text-black shadow-xl"
                : "bg-white text-green-900 hover:bg-lime-50"
            }
          `}
        >
          Outbound
        </button>

      </div>

      <div
        className="
          rounded-[36px]
          bg-white/70
          backdrop-blur-xl
          border
          border-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          p-8
        "
      >

        <div className="flex items-center justify-between mb-8">

          <div>
            <h3 className="text-4xl font-black text-green-950">
              {activeTab === "outdoor"
                ? "Outdoor Activities"
                : "Outbound Programs"}
            </h3>

            <p className="mt-2 text-green-700">
              Explore exciting adventures and experiences.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="h-16 w-16 rounded-full bg-lime-400/20"></div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {data.map((item, index) => (
            <div
              key={index}
                onClick={() => setSelectedItem(item)}
              
              className="
                group
                    cursor-pointer
                rounded-[28px]
                border
                border-green-100
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-lime-400
                hover:shadow-2xl
              "
            >

              <div className="mb-5 h-1 w-14 rounded-full bg-lime-400"></div>

              <h4
                className="
                  text-2xl
                  font-bold
                  text-green-950
                  transition
                  group-hover:text-lime-600
                "
              >
                {item.title}
              </h4>

              <p className="mt-4 text-sm text-green-600">
                Adventure Experience
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-base font-medium text-lime-500">
                  {item.price}
                </span>

                <span
                  className="
                    rounded-full
                    bg-green-50
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-green-800
                  "
                >
                  Available
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
    {selectedItem && (
  <div
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
    onClick={() => setSelectedItem(null)}
  >
    <div
      className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <img
  src={selectedItem.image}
  alt={selectedItem.title}
  onClick={() => setZoomImage(true)}
  className="
    w-full
    h-64
    object-cover
    cursor-zoom-in
    transition-all
    duration-300
    hover:scale-105
  "
/>

      <div className="p-8">
        <h3 className="text-4xl font-black tracking-tight text-green-950">
          {selectedItem.title}
        </h3>

        <p className="mt-3 text-2xl font-black text-lime-500">
          {selectedItem.price}
        </p>

        <p className="mt-4 text-green-700 leading-relaxed">
  Aktivitas outbound di ketinggian yang penuh tantangan melewati rintangan dengan berbagai pilihan tingkat kesulitan
</p>
<a
  href={`https://wa.me/6285723842743?text=Halo%20saya%20tertarik%20dengan%20aktivitas%20${selectedItem.title}`}
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
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 8.003 0C3.58 0 0 3.582 0 8a7.95 7.95 0 0 0 1.146 4.118L0 16l4.02-1.125A7.967 7.967 0 0 0 8.003 16C12.42 16 16 12.418 16 8a7.95 7.95 0 0 0-2.399-5.674zM8.003 14.545a6.5 6.5 0 0 1-3.311-.91l-.237-.14-2.386.667.637-2.327-.154-.24A6.52 6.52 0 1 1 8.003 14.545zm3.582-4.877c-.196-.098-1.16-.572-1.34-.637-.18-.066-.311-.098-.442.098-.131.196-.507.637-.621.768-.115.131-.229.147-.425.05-.196-.099-.827-.304-1.576-.97-.583-.52-.976-1.16-1.09-1.356-.115-.196-.012-.302.086-.4.088-.087.196-.229.294-.344.098-.114.131-.196.196-.327.066-.131.033-.245-.016-.344-.049-.098-.442-1.065-.605-1.457-.16-.384-.323-.332-.442-.338h-.377c-.131 0-.344.05-.524.245-.18.196-.688.672-.688 1.638s.704 1.9.802 2.031c.098.131 1.387 2.119 3.361 2.97.47.202.837.322 1.123.412.472.15.902.129 1.242.078.379-.056 1.16-.474 1.324-.932.163-.458.163-.85.114-.932-.05-.082-.18-.131-.377-.229z"/>
  </svg>

  Konsultasi & Booking
</a>
      </div>
    </div>
  </div>
  
)}
{zoomImage && selectedItem && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/95
      flex
      items-center
      justify-center
      p-6
    "
    onClick={() => setZoomImage(false)}
  >
    <button
      className="
        absolute
        top-6
        right-8
        text-white
        text-6xl
        font-bold
      "
    >
      ×
    </button>

    <img
      src={selectedItem.image}
      alt={selectedItem.title}
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

  </div>
</section>




);
}
