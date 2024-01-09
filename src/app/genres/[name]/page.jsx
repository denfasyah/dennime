import { fetchData } from "../../../services/apiService";
import HeaderMenu from "../../../components/HeaderMenu";
import ListDetail from "../../../components/ListDetail";

const Page = async ({ params: { name } }) => {
  const { topAnime} = await fetchData(name);

  return (
    <>
      <HeaderMenu title={name} linkHref={"/"} linkTitle={"Kembali"} />
      <ListDetail api={topAnime} />
    </>
  );
};

export default Page;
