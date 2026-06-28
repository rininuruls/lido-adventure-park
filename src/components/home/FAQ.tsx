"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah perlu reservasi sebelum datang?",
      answer:
        "Ya, kami menyarankan reservasi terlebih dahulu untuk memastikan ketersediaan aktivitas dan fasilitas.",
    },
    {
      question: "Apakah tersedia paket untuk grup atau perusahaan?",
      answer:
        "Ya, tersedia paket gathering, outing, team building, corporate event, dan family gathering dengan harga khusus.",
    },
    {
      question: "Jam operasional Lido Adventure Park?",
      answer:
        "Lido Adventure Park buka setiap hari pukul 08.00 – 17.00 WIB.",
    },
    {
      question: "Apakah tersedia area parkir?",
      answer:
        "Ya, tersedia area parkir yang luas untuk motor, mobil pribadi, dan bus pariwisata.",
    },
    {
      question: "Apakah aktivitas aman untuk anak-anak?",
      answer:
        "Ya, beberapa aktivitas dirancang khusus untuk anak-anak dengan pengawasan instruktur profesional.",
    },
    {
      question: "Bagaimana cara melakukan booking?",
      answer:
        "Booking dapat dilakukan melalui WhatsApp atau formulir reservasi yang tersedia di website.",
    },
    {
      question: "Apakah tersedia fasilitas makan dan minum?",
      answer:
        "Ya, tersedia restoran dan berbagai pilihan paket konsumsi untuk individu maupun rombongan.",
    },
    {
      question: "Bagaimana jika cuaca hujan?",
      answer:
        "Beberapa aktivitas tetap dapat berjalan, namun aktivitas tertentu dapat dijadwalkan ulang demi keselamatan pengunjung.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-32 bg-gradient-to-br from-[#F8FCF6] via-[#EEF7EC] to-[#E6F4DD]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <span className="uppercase tracking-[8px] text-lime-500 text-sm font-semibold">
          FAQ
        </span>

        <h2 className="mt-4 text-6xl font-black text-green-950">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-xl text-green-700">
          Temukan jawaban atas pertanyaan yang paling sering diajukan oleh pengunjung.
        </p>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-green-100
                shadow-lg
                overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  p-7
                  text-left
                "
              >
                <span className="text-2xl font-bold text-green-950">
                  {faq.question}
                </span>

                <span className="text-3xl font-bold text-lime-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-7 pb-7">
                  <p className="text-lg text-green-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}