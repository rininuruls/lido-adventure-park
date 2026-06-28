"use client";

const testimonials = [
  {
    name: "Andi Saputra",
    city: "Jakarta",
    review:
      "Tempat adventure terbaik dengan view pegunungan yang luar biasa. Cocok untuk healing dan aktivitas outdoor.",
  },
  {
    name: "Ara Putri",
    city: "Bogor",
    review:
      "Flying Fox dan ATV-nya seru banget. Staff ramah dan fasilitas lengkap.",
  },
  {
    name: "Rini Nurulsona",
    city: "Sukabumi",
    review:
      "Cocok untuk gathering perusahaan dan family trip. Pengalaman yang sangat menyenangkan.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#F8FCF6] via-[#EEF7EC] to-[#E6F4DD]">
      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[8px] text-lime-500 text-sm font-semibold">
          TESTIMONIAL
        </span>

        <h2 className="mt-4 text-6xl font-black text-green-950">
          What Visitors Say
        </h2>

        <p className="mt-5 text-xl text-green-700 max-w-3xl">
          Pengalaman nyata dari pengunjung yang telah menikmati
          berbagai aktivitas seru di Lido Adventure Park.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-black text-lime-500">
              10K+
            </h3>
            <p className="mt-2 text-green-700">
              Happy Visitors
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-black text-lime-500">
              20+
            </h3>
            <p className="mt-2 text-green-700">
              Adventure Activities
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-black text-lime-500">
              4.9★
            </h3>
            <p className="mt-2 text-green-700">
              Visitor Rating
            </p>
          </div>

        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
              "
            >

              <div className="text-yellow-400 text-2xl mb-6">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-green-800 leading-relaxed italic text-lg">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-lime-400
                    flex
                    items-center
                    justify-center
                    text-lg
                    font-black
                    text-black
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-green-950 text-lg">
                    {item.name}
                  </h4>

                  <p className="text-green-600">
                    {item.city}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}