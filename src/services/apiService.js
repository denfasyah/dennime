export const fetchData = async (id) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const [detailAnime, characters, episodes] = await Promise.all([
      fetch(`${apiUrl}/anime/${id}`).then((res) => res.json()),
      fetch(`${apiUrl}/anime/${id}/characters`).then((res) => res.json()),
      fetch(`${apiUrl}/anime/${id}/episodes`).then((res) => res.json()),
    ]);

    console.log(detailAnime);

    return { detailAnime, characters, episodes };
  } catch (error) {
    console.error("oops:", error);
    throw error;
  }
};
