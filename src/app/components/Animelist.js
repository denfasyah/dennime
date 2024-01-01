import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Animelist = ({ title, images, rate, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <div className="relative md:h-64 lg:h-64 sm:h-64">
        {/* Gambar */}
        <Image
          src={images}
          width={300}
          height={300}
          alt={title}
          className="rounded-md object-cover h-full w-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute flex items-center justify-center w-full h-full inset-0 bg-gradient-to-b from-transparent to-black rounded-md">
          <h3 className="absolute bottom-2 text-center text-white">{title}</h3>
        </div>

        {/* Rating */}
        <p className="text-sm flex items-center gap-2 absolute top-0 right-0 bg-Background text-white">
          <FaStar className="ml-1" />
          {rate}
        </p>
      </div>
    </Link>
  );
};

export default Animelist;
