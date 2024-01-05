import { fetchData } from "../../services/apiService";
import HeaderMenu from "../../components/HeaderMenu";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const { recentEps } = await fetchData();

  return (
    <>
      <HeaderMenu
        title="Episode Terbaru"
        linkHref={"/"}
        linkTitle={"Kembali"}
      />
      <div className="lg:container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 mx-8">
        {recentEps.data.map((anime) => (
          <Link
            href={`/anime/${anime.entry.mal_id}`}
            key={anime.entry.mal_id}
            className="cursor-pointer"
          >
            <div className="relative h-60 md:h-64 lg:h-64 sm:h-60 overflow-hidden  hover:scale-110 transition-transform duration-300 ">
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
                E
                {anime.episodes[0].title.replace(/[iode ]/gi, "").slice(0, 2) +
                  ""}{" "}
                {anime.episodes[0].title.replace(/[episode ]/gi, "")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
