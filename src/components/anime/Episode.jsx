import { fetchData } from "../../services/apiService";

const Episode = async ({ params: { id } }) => {
  const {episodes} = await fetchData(id);
  return (
    <div className="lg:container mx-8 mt-10 ">
      <p className="text-2xl text-White font-semibold mb-5">Episodes</p>
      <div className="gap-2  overflow-x-auto h-80">
        <table className="table table-pin-rows">
          {episodes.data.map((episode) => (
            <thead key={episode.mal_id}>
              <tr>
                <th>Episode {episode.mal_id}</th>
                <th className="text-right">{episode.aired.slice(0, 10)}</th>
              </tr>
            </thead>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Episode;
