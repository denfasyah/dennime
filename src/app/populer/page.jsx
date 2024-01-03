import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import HeaderMenu from "../../components/HeaderMenu";

const Page = async () => {
  try {
    const resTopAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
    );
    const topAnime = await resTopAnime.json();

    return (
      <>
      <HeaderMenu title="Populer" linkHref={"/"} linkTitle={"Kembali"}/>
        <div className="lg:container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mx-8">
          {topAnime.data.map((anime) => {
            return (
              <Link href={`/${anime.mal_id}`} className="cursor-pointer">
                <div className="relative h-60 md:h-64 lg:h-64 sm:h-60 overflow-hidden  hover:scale-110 transition-transform duration-300 ">
                  {/* Gambar */}
                  <Image
                    src={anime.images.webp.large_image_url}
                    width={300}
                    height={300}
                    alt="..."
                    className="rounded-md object-cover h-full w-full"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute flex items-center justify-center w-full h-full inset-0 bg-gradient-to-b from-20% from-transparent to-black rounded-md">
                    <h3 className="absolute bottom-2 text-center text-white line-clamp-1 hover:line-clamp-none transition-all duration-300 ease-in-out">
                      {anime.title}
                    </h3>
                  </div>

                  {/* Rating */}
                  <p className="text-xs flex bg-purple-700 font-bold rounded-br-md items-center gap-2 absolute top-0 pl-2 pb-1 pt-1.5 pr-1 left-0  text-white">
                    {anime.episodes !== null ? `Eps ${anime.episodes}` : "N/A"}
                  </p>

                  <p className="text-xs flex items-center gap-2 absolute top-0 pr-2 pb-1 pt-1.5 pl-1 right-0 bg-Background text-White">
                    <FaStar className="ml-1" />{" "}
                    {anime.score !== null ? `${anime.score}` : "?"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Page;
