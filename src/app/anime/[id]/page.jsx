import Link from "next/link";
import Image from "next/image";
import { fetchData } from "../../../services/apiService";
import Banner from "../../../components/anime_id/Banner";
import Card from "../../../components/anime_id/Card";
import AnimeTitle from "../../../components/anime_id/AnimeTitle";
import AnimeDetails from "../../../components/anime_id/AnimeDetails";
import Rating from "../../../components/anime_id/Rating";
import Genre from "../../../components/anime_id/Genre";
import VideoPlayer from "../../../components/anime_id/VideoPlayer";
import NotFound from "../../not-found";

const Page = async ({ params: { id } }) => {
  const { detailAnime, characters, episodes } = await fetchData(id);
  if (!detailAnime.data) {
    return <NotFound />;
  }

  return (
    <>
      <Banner data={detailAnime.data.images.webp.large_image_url} />
      <Card data={detailAnime.data.images.webp.large_image_url} />
      <AnimeTitle
        ori={detailAnime.data.title}
        japanese={detailAnime.data.title_japanese}
      />
      <div className="lg:container mx-8 mt-10">
        <Rating
          score={detailAnime.data.score === null ? "?" : detailAnime.data.score}
        />
        <p className="text-White mb-2">{detailAnime.data.duration}</p>
        <div className="flex flex-wrap">
          {detailAnime.data.genres.map((genre) => (
            <Genre key={genre.mal_id} title={genre.name} />
          ))}
        </div>
      </div>
      <AnimeDetails
        eps={
          detailAnime.data.episodes === null ? "?" : detailAnime.data.episodes
        }
        type={detailAnime.data.type === null ? "?" : detailAnime.data.type}
        studio={
          detailAnime.data &&
          detailAnime.data.studios &&
          detailAnime.data.studios[0] &&
          detailAnime.data.studios[0].name !== null
            ? detailAnime.data.studios[0].name
            : "?"
        }
        aired={
          detailAnime.data.aired.string === null
            ? "?"
            : detailAnime.data.aired.string
        }
        season={
          detailAnime.data.season === null ? "?" : detailAnime.data.season
        }
        stat={detailAnime.data.status === null ? "?" : detailAnime.data.status}
        year={detailAnime.data.year === null ? "" : detailAnime.data.year}
        source={
          detailAnime.data.source === null ? "?" : detailAnime.data.source
        }
        broadcast={
          detailAnime.data.broadcast.day === null
            ? "?"
            : detailAnime.data.broadcast.day
        }
        producer={
          detailAnime.data.producers &&
          detailAnime.data.producers[0] &&
          detailAnime.data.producers[0].name !== null
            ? detailAnime.data.producers[0].name
            : "?"
        }
        licensors={
          detailAnime.data.licensors &&
          detailAnime.data.licensors[0] &&
          detailAnime.data.licensors[0].name !== null
            ? detailAnime.data.licensors[0].name
            : "?"
        }
      />

      <div className="lg:container mx-8 mt-10">
        <p className="text-2xl text-White font-semibold mb-5">Synopsis</p>
        <p className="text-md line-clamp-5">{detailAnime.data.synopsis}</p>
      </div>

      <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
      </div>

      {/* episode */}
      <div className="lg:container mx-8 mt-10 ">
        <p className="text-2xl text-White font-semibold mb-5">Episodes</p>
        <div className="gap-2  overflow-x-auto h-80">
          <table className="table table-pin-rows">
            {episodes.data.length > 0 ? (
              episodes.data.map((episode) => (
                <thead key={episode.mal_id}>
                  <tr>
                    <th>Episode {episode.mal_id}</th>
                    <th className="text-right">
                      {episode.aired ? episode.aired.slice(0, 10) : "?"}
                    </th>
                  </tr>
                </thead>
              ))
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="2"
                    className="text-center text-3xl font-bold text-yellow-500"
                  >
                    Maaf, data episode belum tersedia.{" "}
                    <Image
                      src="/img/luffy.png"
                      alt="Anime Image"
                      width={100}
                      height={200}
                      className="mx-auto"
                    />
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>

      {/* karakter */}

      <div className="lg:container mt-10 mx-8">
        <p className="text-2xl text-White font-semibold mb-5">Characters</p>
        <div className="container carousel gap-5 p-2">
          {characters.data.map((anime) => (
            <div
              key={anime.character.mal_id}
              className="carousel-item cursor-pointer"
            >
              <div className="relative h-48 md:h-64 lg:h-64 sm:h-64 overflow-hidden">
                {/* Gambar */}
                <Image
                  src={anime.character.images.webp.image_url}
                  width={300}
                  height={300}
                  alt={anime.character.name}
                  className="rounded-md object-cover h-full w-full"
                />

                {/* Gradient Overlay */}
                <div className="absolute flex items-center justify-center w-full h-full inset-0 bg-gradient-to-b from-20% from-transparent to-black rounded-md">
                  <h3 className="absolute bottom-2 text-sm mx-5 mb-2 text-center text-white line-clamp-1 hover:line-clamp-none transition-all duration-300 ease-in-out">
                    {anime.character.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
