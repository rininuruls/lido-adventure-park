"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div>

            <span className="uppercase ttracking-[4px] md:tracking-[8px] text-lime-500 text-sm font-semibold">
              Welcome To
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-green-950 leading-tight">
              Lido Adventure Park
            </h2>

            <p className="mt-8 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-green-700">
              Lido Adventure Park merupakan destinasi wisata petualangan
              yang berada di kawasan Danau Lido, Bogor. Dikelilingi oleh
              panorama Gunung Salak dan alam yang asri, kawasan ini
              menghadirkan berbagai aktivitas outdoor yang dirancang untuk
              memberikan pengalaman seru, aman, dan berkesan bagi setiap
              pengunjung.
            </p>

            <p className="mt-6 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-green-700">
              Mulai dari Flying Fox, High Rope, ATV, Paintball, Archery,
              Kayak hingga berbagai program Team Building dan Outbound,
              Lido Adventure Park menjadi pilihan ideal untuk keluarga,
              sekolah, komunitas, maupun perusahaan yang ingin menikmati
              petualangan di tengah alam.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white rounded-[32px] p-8 shadow-xl border border-green-100 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🚵</div>
              <h3 className="text-2xl font-black text-green-950">
                Adventure Activities
              </h3>
              <p className="mt-3 text-green-700">
                Lebih dari 20 aktivitas outdoor seru mulai dari ATV,
                Flying Fox, High Rope, Paintball hingga Kayak.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-xl border border-green-100 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-black text-green-950">
                Team Building
              </h3>
              <p className="mt-3 text-green-700">
                Program outbound profesional untuk perusahaan,
                sekolah, komunitas dan berbagai instansi.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-xl border border-green-100 hover:-translate-y-2 transition-all duration-300">
              <div className="text text-4xl md:text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-black text-green-950">
                Nature Experience
              </h3>
              <p className="mt-3 text-green-700">
                Nikmati petualangan di tengah panorama Danau Lido
                dan udara pegunungan yang menyegarkan.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-xl border border-green-100 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl md:text-4xl md:text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-black text-green-950">
                Family Destination
              </h3>
              <p className="mt-3 text-green-700">
                Cocok untuk wisata keluarga, gathering,
                outing kantor maupun liburan akhir pekan.
              </p>
            </div>

          </div>

        </div>

        {/* STAYCATION EXPERIENCE */}
        <div className="mt-16 md:mt-24 relative overflow-hidden rounded-[40px]">

          <img
            src="images/staycation.jpg"
            alt="Staycation Danau Lido"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6 py-12 md:px-10 md:py-20 lg:px-20 lg:px-20">

            <span className="uppercase tracking-[8px] text-lime-400 text-sm font-semibold">
              Integrated Experience
            </span>

            <h3 className="mt-4 text-5xl lg:text px-6 py-12 md:px-10 md:py-20 lg:px-20 font-black text-white leading-tight">
              Staycation &
              <br />
              Adventure Experience
            </h3>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Lido Lake Resort by MNC Hotel

              Lengkapi keseruan aktivitas outbound Anda dengan menginap di fasilitas resort berbintang di tengah panorama alam Danau Lido.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-full bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                🏨 Resort Experience
              </div>

              <div className="rounded-full bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                🌄 Lake View
              </div>

              <div className="rounded-full bg-white/10 backdrop-blur-md px-5 py-3 text-white">
                🌿 Nature Escape
              </div>

            </div>

            <a
              href="https://lidolakeresort.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                rounded-full
                bg-lime-400
                px-5 py-3 
                md:px-8
                md:py-4
                
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-lime-500
              "
            >
              Kunjungi Resort →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}