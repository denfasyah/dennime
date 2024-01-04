import Animelist from "../components/Animelist";
import Search from "../components/Search";
import HeaderSection from "../components/HeaderSection";
import Genre from "../components/Genre";
import RecentEps from "../components/RecentEps";
import SeasonNow from "../components/SeasonNow";
const Home = async () => {
  try {
    const resTopAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
    );
    const topAnime = await resTopAnime.json();

    // const resGenres = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`
    // );
    // const Genres = await resGenres.json();

    return (
      <>
        <Search />
       
        {/* <section>
          <HeaderSection title="Genre" />
          <Animelist api={Genres} />
        </section> */}

        <section>
          <HeaderSection title="Genre" linkTitle="" linkHref="" />
          <Genre/>
        </section>

        <section>
          <HeaderSection title="Musim Sekarang" linkTitle="" linkHref="" />
          <SeasonNow/>
        </section>

        <section>
          <HeaderSection title="Episode Terbaru" linkTitle="" linkHref="" />
          <RecentEps/>
        </section>

        <section>
          <HeaderSection title="Populer" linkTitle="" linkHref=""/>
          <Animelist api={topAnime} />
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Home;
