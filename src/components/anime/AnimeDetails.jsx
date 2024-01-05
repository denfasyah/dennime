
const AnimeDetails = ({type,eps,stat,aired, season, year, source, studio, broadcast,producer,licensors}) => {
  return (
    <div className="lg:container  mx-8 flex items-center mt-10">
    <div className="rounded-md text-White">
      <h1 className="text-2xl text-White font-semibold mb-5">
        Anime Information
      </h1>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
        <div>
          <p className="font-semibold">Type:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {type}
          </p>
        </div>

        <div>
          <p className="font-semibold">Episodes:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {eps}
          </p>
        </div>

        <div>
          <p className="font-semibold">Status:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {stat}
          </p>
        </div>

        <div>
          <p className="font-semibold">Aired:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {aired}
          </p>
        </div>

        <div>
          <p className="font-semibold">Premiered:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {season} {year}
          </p>
        </div>
        <div>
          <p className="font-semibold">Source:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {source}
          </p>
        </div>
        <div>
          <p className="font-semibold">Studios:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {studio}
          </p>
        </div>
        <div>
          <p className="font-semibold">Broadcast:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {broadcast}
          </p>
        </div>
        <div>
          <p className="font-semibold">Producers:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {producer}
            {/* <br />
              {detailAnime.data.producers[1].name} */}
          </p>
        </div>
        <div>
          <p className="font-semibold">Licensors:</p>
          <p className="mt-1 border-2 border-purple-700 rounded-r-2xl rounded-bl-2xl inline-block min-w-[min-width] p-1.5">
            {licensors}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AnimeDetails