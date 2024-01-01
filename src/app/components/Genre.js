import Link from "next/link";
const Genre = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`
    );
    const genres = await response.json();

    return (
      <div className="lg:container mx-9">
        <div className="container carousel carousel-s rounded-box gap-4">
          {genres.data.map(({ mal_id, name }) => (
            <Link href={``} 
              key={mal_id}
              className="carousel-item rounded-r-lg rounded-tl-lg bg-Grey p-2"
            >
              <p className="text-Purple text-md font-medium">{name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Genre;
