import Image from "next/image";
import Link from "next/link";


const RecentEps = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/watch/episodes`
    );
    const recentEps = await response.json();

    return (
      <div className="lg:container mx-8">
        <div className="container carousel gap-5 p-2">
          {recentEps.data.map((anime) => (
            <Link
              href={`/anime/${anime.entry.mal_id}`}
              key={anime.entry.mal_id}
              className="carousel-item cursor-pointer"
            >
              <div className="relative h-48 md:h-64 lg:h-64 sm:h-64 overflow-hidden">
                {/* Gambar */}
                <Image
                  src={anime.entry.images.webp.large_image_url}
                  width={300}
                  height={300}
                  alt={anime.entry.title}
                  className="rounded-md object-cover h-full w-full"
                />

                {/* Gradient Overlay */}
                <div className="absolute flex items-center justify-center w-full h-full inset-0 bg-gradient-to-b from-20% from-transparent to-black rounded-md">
                  <h3 className="absolute bottom-2 text-sm mx-5 mb-2 text-center text-white line-clamp-1 hover:line-clamp-none transition-all duration-300 ease-in-out">
                    {anime.entry.title}
                  </h3>
                </div>

                {/* Episode Title */}
                <p className="text-xs flex bg-purple-700 font-bold rounded-br-md items-center gap-2 absolute top-0 pl-2 pb-1 pt-1.5 pr-1 left-0  text-white">
                  E{ anime.episodes[0].title.replace(/[iode ]/gi, '').slice(0,2) + ''} {anime.episodes[0].title.replace(/[episode ]/gi, '')}
                </p>

                
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div className="container text-red-500">Error fetching data</div>;
  }
};

export default RecentEps;
