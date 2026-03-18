export const fetchData = async (page, type) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`,
    type,
  );
  const data = await res.json();

  return data;
};
