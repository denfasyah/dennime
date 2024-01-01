import Animelist from "./components/Animelist";
import Search from "./components/Search";
import Genre from "./components/Genre";
import Link from "next/link";

const Home = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
    );
    const anime = await response.json();

    return (
      <>
        <Search />
        <h1 className="lg:container text-2xl ml-10 my-8 text-White font-medium">
          Genre
        </h1>
        <Genre />
        <div className="flex items-center">
          <h1 className="lg:container text-2xl ml-10 my-8 text-White font-medium">
            Popular
          </h1>
          <Link href={`/popular`} className="mr-40 underline">More </Link>
        </div>
        <div className="lg:container grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 mx-8">
          {anime.data.map(({ mal_id, title, images, score }) => (
            <div key={mal_id} className="shadow-xl">
              <Animelist
                id={mal_id}
                title={title}
                images={images.webp.large_image_url}
                rate={score}
              />
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Home;
