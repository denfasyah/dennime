import Link from "next/link";
const Genre = async ({api}) => {
  
    return (
      <div className="lg:container mx-9">
        <div className="container carousel carousel-s rounded-box gap-4">
          {api.data.map(({ mal_id, name }) => (
            <Link href={`genres/${name}`} 
              key={mal_id}
              className="carousel-item rounded-r-lg rounded-tl-lg bg-Grey p-2"
            >
              <p className="text-Purple text-md font-medium">{name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
 
};

export default Genre;
