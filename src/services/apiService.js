export const fetchData = async (id) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const [topAnime, seasonNow, recentEps, search,  detailAnime, characters, episodes] = await Promise.all([
      fetch(`${apiUrl}/top/anime`).then((res) => res.json()),
      fetch(`${apiUrl}/seasons/now`).then((res) => res.json()),
      fetch(`${apiUrl}/watch/episodes`).then((res) => res.json()),
      fetch(`${apiUrl}/watch/anime?q=`).then((res) => res.json()),
      fetch(`${apiUrl}/anime/${id}`).then((res) => res.json()),
      fetch(`${apiUrl}/anime/${id}/characters`).then((res) => res.json()),
      fetch(`${apiUrl}/anime/${id}/episodes`).then((res) => res.json()),
    ]);

    console.log(detailAnime);

    return { topAnime, seasonNow, recentEps, search, detailAnime, characters, episodes };
  } catch (error) {
    console.error("oops:", error);
    throw error;
  }
};

