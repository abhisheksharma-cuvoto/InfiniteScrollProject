"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "@/hooks/fetchData";
import Loader from "./Loader";

function InfiniteScroll() {
  const [catData, setCatData] = useState([]);
  const [page, setPage] = useState(1);
  const [loadDataOnFirstScroll, setLoadDataOnFirstScroll] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleFetchData = () => {
    if (loading || !hasMore) return; // To stop multiple api calls and stop when no more data is available
    const totalScreenHeight = document.documentElement.scrollHeight; // total height of the entire webpage
    const viewScreenHeight = window.innerHeight; // height of the visible part of the webpage
    let scrollHeight = window.scrollY; // amount of pixels the user has scrolled down the page

    if (viewScreenHeight + scrollHeight + 1 >= totalScreenHeight) {
      setPage((prev) => prev + 1);
      setLoading(true);
      setLoadDataOnFirstScroll(true);
      // alert("Load more data");
    }
  };

  useEffect(() => {
    if (loadDataOnFirstScroll) {
      async function fetchMoreData() {
        const data = await fetchData(page);

        if (!data || data.length == 0) {
          setHasMore(false);
          setLoading(false);
          return;
        }

        setCatData((prev) => [...prev, ...data]);
        setLoading(false);
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
      {catData?.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
      {loading && <Loader />}
    </>
  );
}

export default InfiniteScroll;
