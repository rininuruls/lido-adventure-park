type Props = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function AdventureCard({
  title,
  description,
  price,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900">
          {title}
        </h2>

        <p className="mt-3 text-green-600">
          {description}
        </p>

        <p className="mt-4 font-semibold text-lime-600">
          {price}
        </p>

        <button
          className="
            mt-5
            rounded-full
            bg-gradient-to-r
            from-green-500
            to-lime-400
            px-5
            py-2
            font-bold
            text-white
          "
        >
          Reservasi 
        </button>
      </div>

    </div>
  );
}