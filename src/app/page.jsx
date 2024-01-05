import { fetchData } from "../services/apiService";
import Animelist from "../components/Animelist";
import Search from "../components/Search";
import HeaderSection from "../components/HeaderSection";
import Genre from "../components/Genre";
import RecentEps from "../components/RecentEps";
const Home = async () => {
  const { topAnime, seasonNow} = await fetchData();

  return (
    <>
      <Search />
      
      <section>
        <HeaderSection title="Genre" linkTitle="" linkHref="" />
        <Genre />
      </section>

      <section>
        <HeaderSection title="Musim Sekarang" linkTitle="Lainnya" linkHref="/season" />
        <Animelist api={seasonNow} />
      </section>

      <section>
        <HeaderSection title="Episode Terbaru" linkTitle="Lainnya" linkHref="/recenteps" />
        <RecentEps />
      </section>

      <section>
        <HeaderSection title="Populer" linkTitle="Lainnya" linkHref="/popular" />
        <Animelist api={topAnime} />
      </section>
    </>
  );
};

export default Home;
