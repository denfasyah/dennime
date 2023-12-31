import Navbar from "./components/Navbar";
import Animelist from "./components/Animelist";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  console.log(anime);
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl ml-10 my-10 text-White font-medium">Popular</h1>
      <div className="grid grid-cols-3 gap-4">
        {anime.data.map((data) => {
          return (
            <Animelist title={data.title} images={data.images.webp.image_url} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
