"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import PaginationCard from "@/components/Pagination/PaginationCard";
import Loader from "@/components/InfiniteScroll/Loader";
import { fetchData } from "@/hooks/fetchData";

function PaginationPage() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleFetch = async (page, currPage) => {
    if (page == currPage) return;
    setLoading(true);
    try {
      if (hasMore) {
        const data = await fetchData(page);

        if (!data || data.length == 0) {
          setHasMore(false);
          setLoading(false);
          return;
        }

        setData(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetch(1);
  }, []);

  return (
    <main className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center gap-4 py-10">
        <Pagination onFetch={handleFetch} />
        {loading ? (
          <Loader />
        ) : (
          <section className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {data.map((data) => (
              <PaginationCard key={data.id} catData={data} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default PaginationPage;
