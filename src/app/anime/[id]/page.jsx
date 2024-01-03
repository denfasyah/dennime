import Image from "next/image";
import { FaStar } from "react-icons/fa";

const DetailAnime = async ({ params: { id } }) => {
  try {
    const DetailAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
    );
    const detailAnime = await DetailAnime.json();
    // console.log(detailAnime)

    return (
      <>
        {/* hero */}
        <div className="mt-1 blur-sm relative w-full flex justify-center bg-white">
          <Image
            src={detailAnime.data.images.webp.large_image_url}
            width={300}
            height={300}
            alt="..."
            className="w-full brightness-50 h-64 object-cover overflow-hidden"
          />
          <span className="absolute w-full h-full inset-0 bg-gradient-to-b from-10% from-transparent to-black"></span>
        </div>
        <div className="flex justify-center">
          <Image
            src={detailAnime.data.images.webp.large_image_url}
            width={100}
            height={100}
            alt="..."
            className="absolute w-44 h-52 top-40 shadow-md object-cover overflow-hidden rounded-md"
          />
        </div>
        <div className=" text-center text-White font-bold text-3xl mt-20">
          {detailAnime.data.title}
          <span className="block text-center  text-White font-thin text-xs mt-2">
            {detailAnime.data.title_japanese}
          </span>
        </div>

        {/* genres */}

        <div className="lg:container mx-8 mt-10">
          <p className="mb-2 flex text-White text-lg">
            <FaStar className="ml-1 mr-2" />
            {detailAnime.data.score}
          </p>
          <p className="mb-3 text-White text-lg">{detailAnime.data.duration}</p>
          {detailAnime.data.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="text-md border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl px-2 text-White py-1 rounded-md mr-2"
            >
              {genre.name}
            </span>
          ))}
        </div>

        {/* information */}

        <div className="lg:container  mx-8 flex items-center mt-10">
          <div className="rounded-md text-White">
            <h1 className="text-2xl text-White font-semibold mb-5">
              Anime Information
            </h1>

            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
              <div>
                <p className="font-semibold">Type:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-10 p-1.5">
                  {detailAnime.data.type}
                </p>
              </div>

              <div>
                <p className="font-semibold">Episodes:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-10 p-1.5">
                  {detailAnime.data.episodes}
                </p>
              </div>

              <div>
                <p className="font-semibold">Status:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-20 p-1.5">
                  {detailAnime.data.status}
                </p>
              </div>

              <div>
                <p className="font-semibold">Aired:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-32 p-1.5">
                  {detailAnime.data.aired.string}
                </p>
              </div>

              <div>
                <p className="font-semibold">Premiered:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-32 p-1.5">
                  {detailAnime.data.season} {detailAnime.data.year}
                </p>
              </div>
              <div>
                <p className="font-semibold">Source:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-20 p-1.5">
                  {detailAnime.data.source}
                </p>
              </div>
              <div>
                <p className="font-semibold">Rank:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-10 p-1.5">
                  {detailAnime.data.rank}
                </p>
              </div>
              <div>
                <p className="font-semibold">Broadcast:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-28 p-1.5">
                  {detailAnime.data.broadcast.day}
                </p>
              </div>
              <div>
                <p className="font-semibold">Producers:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-28 p-1.5">
                  {detailAnime.data.producers[0].name}
                  {/* <br />
                  {detailAnime.data.producers[1].name} */}
                </p>
              </div>
              <div>
                <p className="font-semibold">Licensors:</p>
                <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-28 p-1.5">
                  {detailAnime.data.licensors[0].name}
                </p>
              </div>

              {/* <div>
                <p className="font-semibold">Producers:</p>
                {detailAnime.data.producers.map((producer) => (
                  <p
                    key={producer.mal_id}
                    className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl w-28 p-1.5"
                  >
                    {producer.name}
                  </p>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="lg:container mx-8 mt-10">
          <p className="text-2xl text-White font-semibold mb-5">Sinopsis</p>
          <p className="text-md line-clamp-5">{detailAnime.data.synopsis}</p>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default DetailAnime;
