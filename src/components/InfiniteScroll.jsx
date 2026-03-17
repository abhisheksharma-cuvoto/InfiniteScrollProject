"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "@/hooks/fetchData";
import Loader from "./Loader";

function InfiniteScroll() {
  const [catData, setCatData] = useState([]);
  const [page, setPage] = useState(2);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = () => {
    const totalScreenHeight = document.documentElement.scrollHeight; // total height of the entire webpage
    const viewScreenHeight = window.innerHeight; // height of the visible part of the webpage
    let scrollHeight = window.scrollY; // amount of pixels the user has scrolled down the page

    if (viewScreenHeight + scrollHeight + 1 >= totalScreenHeight) {
      setPage((prev) => prev + 1);
      setLoadMore(true);
      setIsLoading(true);
      // alert("Load more data");
    }
  };

  useEffect(() => {
    if (loadMore) {
      async function fetchMoreData() {
        const res = await fetchData(page);
        const data = res.slice(0, 9);

        setCatData((prev) => [...prev, ...data]);
        if (!data) {
          setLoadMore(false);
        }
        setIsLoading(false);
      }
      fetchMoreData();
    }
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", handleFetchData);

    return () => document.removeEventListener("scroll", handleFetchData);
  }, []);

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-5 px-6">
        {catData?.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </section>
      {isLoading && <Loader />}
    </>
  );
}

export default InfiniteScroll;
