import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {fetchData} from "../services/apiService"
const SeasonNow = async () => {
  const { seasonNow } = await fetchData();
 

    return (
      <div className="lg:container mx-8">
        <div className="container carousel carousel-s gap-5 p-2">
          {seasonNow.data.map((anime) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="carousel-item cursor-pointer"
            >
              <div className="relative h-48 md:h-64 lg:h-64 sm:h-64 overflow-hidden">
                {/* Gambar */}
                <Image
                  src={anime.images.webp.large_image_url}
                  width={300}
                  height={300}
                  alt={anime.title}
                  className="rounded-md object-cover h-full w-full"
                />

                {/* Gradient Overlay */}
                <div className="absolute flex items-center justify-center w-full h-full inset-0 bg-gradient-to-b from-20% from-transparent to-black rounded-md">
                  <h3 className="absolute bottom-2 text-sm mx-5 mb-2 text-center text-white line-clamp-1 hover:line-clamp-none transition-all duration-300 ease-in-out">
                    {anime.title}
                  </h3>
                </div>

                {/* Episode Title */}
                <p className="text-xs flex bg-purple-700 font-bold rounded-br-md items-center gap-2 absolute top-0 pl-2 pb-1 pt-1.5 pr-1 left-0  text-white">
                  {anime.episodes !== null ? `Eps ${anime.episodes}` : "N/A"}
                </p>

                <p className="text-xs flex items-center gap-2 absolute top-0 pr-2 pb-1 pt-1.5 pl-1 right-0 bg-Background text-White">
                  <FaStar className="ml-1" />{" "}
                  {anime.score !== null ? `Ep ${anime.score}` : "?"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
 
};

export default SeasonNow;
