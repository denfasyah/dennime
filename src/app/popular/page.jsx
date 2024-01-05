import { fetchData } from "../../services/apiService";
import HeaderMenu from "../../components/HeaderMenu";
import ListDetail from "../../components/ListDetail";

const Page = async () => {
  const { topAnime } = await fetchData();

  return (
    <>
      <HeaderMenu title="Populer" linkHref={"/"} linkTitle={"Kembali"} />
      <ListDetail api={topAnime} />
    </>
  );
};

export default Page;
