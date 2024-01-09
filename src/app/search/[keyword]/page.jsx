import ListDetail from "../../../components/ListDetail";
import Search from "../../../components/Search";
import HeaderSection from "../../../components/HeaderSection";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const search = await response.json();
  console.log(response);

  return (
    <>
      <Search />

      <section>
        <HeaderSection
          title={`Pencarian untuk ${decodeKeyword}...`}
          linkTitle="Kembali"
          linkHref="/"
        />
        <ListDetail api={search} />
      </section>
    </>
  );
};

export default Page;
