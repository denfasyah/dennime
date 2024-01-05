import { fetchData } from "../../services/apiService";
import HeaderMenu from "../../components/HeaderMenu";
import ListDetail from "../../components/ListDetail";

const Page = async () => {
  const { seasonNow } = await fetchData();

  return (
    <>
      <HeaderMenu title="Musim Sekarang" linkHref={"/"} linkTitle={"Kembali"} />
      <ListDetail api={seasonNow} />
    </>
  );
};

export default Page;
