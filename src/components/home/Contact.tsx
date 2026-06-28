"use client";

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <section
  id="contact"
  className="
    relative
    overflow-hidden
    bg-gradient-to-br from-white via-green-50 to-lime-100
  "

    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/forest-bg.jpg"
          alt="forest"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-4 uppercase tracking-[8px] text-lime-400">
            Contact
          </p>

          <h2
  className="
    mb-10
    text-5xl
    md:text-6xl
    font-black
    bg-gradient-to-r
    from-green-900
    via-green-700
    to-lime-500
    bg-clip-text
    text-transparent
  "
>
            Reservation
          </h2>

          <form className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="
                 w-full
    rounded-2xl
    border
    border-green-200
    bg-white/90
    px-6
    py-5
    text-green-900
    placeholder:text-green-600
    outline-none
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* DATE */}
            {/* DATE */}
<input
  type="date"
  className="
    w-full
    rounded-2xl
    border
    border-green-200
    bg-white/90
    px-6
    py-5
    text-green-900
    outline-none
    focus:border-lime-500
    focus:ring-2
    focus:ring-lime-200
  "
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

            {/* PARTICIPANT */}
            <input
  type="number"
  placeholder="Jumlah Peserta"
  value={participants}
  onChange={(e) => setParticipants(e.target.value)}
  className="
    w-full
    rounded-2xl
    border
    border-green-200
    bg-white/90
    px-6
    py-5
    text-green-900
    placeholder:text-green-600
    outline-none
  "
/>

            {/* PACKAGE */}
            <select
  value={selectedPackage}
  onChange={(e) => setSelectedPackage(e.target.value)}
  className="
    w-full
    rounded-2xl
    border
    border-green-200
    bg-white/90
    px-6
    py-5
    text-green-900
    outline-none
  "
>
          
              <option>Choose Package</option>
              <option>Rafting Adventure</option>
              <option>Rafting Family</option>
              <option>Fun Offroad 200cc</option>
              <option>Fun Offroad 320cc</option>
              <option>Flying Fox</option>
              <option>Paintball</option>
              <option>ATV Adventure</option>
              <option>High Rope</option>
              <option>Archery</option>
              <option>Shooting Target</option>
              <option>Team Building</option>
              <option>Fun Games</option>
              <option>Kayak</option>
              <option>Trekking</option>
              <option>Sky Bike</option>
            </select>



            {/* BUTTON */}
            <a
              
  href={`https://wa.me/6285723842743?text=${encodeURIComponent(
`Halo Admin Lido Adventure Park

Nama: ${name}
Tanggal: ${date}
Jumlah Peserta: ${participants}
Paket: ${selectedPackage}

Saya ingin melakukan reservasi.

Mohon informasi lebih lanjut.
Terima kasih.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    rounded-full
    bg-gradient-to-r
    from-green-500
    to-lime-400
    px-8
    py-4
    text-sm
    font-bold
    text-white
    shadow-[0_0_20px_rgba(34,197,94,0.4)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]
  "
>
  Send WhatsApp
</a>
          </form>

          {/* CONTACT INFO */}
          <div className="mt-14 space-y-6">

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-lime-400" />
              <div>
                <h3 className="font-bold text-green-900">
                  Lokasi Kami
                </h3>

                <a
  href="https://maps.google.com/?q=Lido Adventure Park"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 block text-green-600 hover:text-lime-500 transition"
>
  Lido Adventure Park
</a>
                

                <p className="text-green-600">
                  Jl. Raya Bogor - Sukabumi KM 21 Bogor 16110,
                  Jawa Barat - Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-lime-400" />

              <div>
                <p className="text-green-900">
                  0251 8220922
                </p>

                <p className="text-green-900">
                  0811 1611504
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-lime-400" />

              <p className="text-green-900">
                lap@lidolakeresort.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-lime-400" />

              <p className="text-green-900">
                WhatsApp Reservation
              </p>
            </div>
            {/* SOCIAL MEDIA */}
<div
  className="
    mt-10
    rounded-[30px]
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-md
    shadow-[0_0_40px_rgba(34,197,94,0.08)]
  "
>
  <h3 className="text-green-900 text-4xl font-bold">
  Ikuti Kami
</h3>

  <div className="flex flex-wrap items-center gap-5">

    {/* X */}
    <a
      href="https://x.com/lidoadventure"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-whhite
        transition-all
        duration-300
        hover:scale-110
        hover:border-lime-400
        hover:bg-lime-400
        hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
        alt="X"
        className="w-7 transition duration-300"
      />
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/lidoadventurepark?igsh=MWs2d3YxZWRhZnM2MQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white
        transition-all
        duration-300
        hover:scale-110
        hover:border-lime-400
        hover:bg-lime-400
        hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="Instagram"
        className="w-7 transition duration-300"
      />
    </a>

    {/* FACEBOOK */}
    <a
      href="https://www.facebook.com/share/17JMJfpaBo/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-whhite
        transition-all
        duration-300
        hover:scale-110
        hover:border-lime-400
        hover:bg-lime-400
        hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
        alt="Facebook"
        className="w-7 transition duration-300"
      />
    </a>

    {/* TIKTOK */}
    <a
      href="https://www.tiktok.com/@lidoadventurepark?_r=1&_t=ZS-96jES5uBOk9"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white
        transition-all
        duration-300
        hover:scale-110
        hover:border-lime-400
        hover:bg-lime-400
        hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
        alt="TikTok"
        className="w-7 transition duration-300"
      />
    </a>

    {/* YOUTUBE */}
    <a
      href="https://youtube.com/@lidoadventurepark?si=NQvQSDREC5nXuC3J"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white
        transition-all
        duration-300
        hover:scale-110
        hover:border-lime-400
        hover:bg-lime-400
        hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        alt="YouTube"
        className="w-7 transition duration-300"
      />
    </a>

  </div>

  {/* TEXT */}
  <p className="text-green-800/80">
  Follow official social media
    Lido Adventure Park untuk update
    promo, outbound activities, rafting, offroad adventure,
    dan event terbaru.
  </p>
</div>

          </div>

          {/* LOGO */}
          <div className="mt-10 flex items-center gap-4">

            <img
              src="https://lidoadventurepark.com/Images/Logo/logo_lap.png"
              alt="Lido Adventure Park"
              className="
                w-
                object-contain
                drop-shadow-[0_0_20px_rgba(163,230,53,0.5)]
              "
            />

            <div>
              <h3 className="text-xl font-bold text-green-900">
                Lido Adventure Park
              </h3>

              <p className="text-sm text-green-600">
                The Real Adventure With Nature
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="overflow-hidden rounded-[30px] border border-white/10">

          <iframe
            src="https://maps.google.com/maps?q=Lido%20Adventure%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="h-[420px] w-full"
          />

        </div>

      </div>
    </section>
  );
}