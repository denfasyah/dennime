import Animelist from "../../../components/Animelist";
import Search from "../../../components/Search";
import HeaderSection from "../../../components/HeaderSection";

const Page = async ({ params }) => {
  try {
    const { keyword } = params;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
    );
    const search = await response.json();
    console.log(response);

    return (
      <>
        <Search />

        <section>
          <HeaderSection
            title={`Pencarian untuk ${keyword}...`}
            linkTitle="more"
            linkHref="/popular"
          />
          <Animelist api={search} />
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Page;
