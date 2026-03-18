"use client";

import React, { useState } from "react";

function Pagination({ onFetch }) {
  const [totalPage, setTotalPage] = useState(10); // set default totalpage
  const [currPage, setCurrPage] = useState(1);

  return (
    <section className="flex items-center gap-2">
      <button
        disabled={currPage == 1}
        onClick={() => {
          const newPage = currPage - 1;
          setCurrPage(newPage);
          onFetch(newPage);
        }}
        className="px-3 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600 cursor-pointer"
      >
        Prev
      </button>
      {Array.from({ length: totalPage }, (_, i) => (
        <button
          key={i}
          className={`w-[50px] px-3 py-2 ${currPage - 1 == i ? "bg-blue-500" : "bg-zinc-500"} text-white rounded-sm hover:bg-blue-500 cursor-pointer`}
          onClick={() => {
            const newPage = i + 1;
            setCurrPage(newPage);
            onFetch(newPage, currPage);
          }}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={currPage == totalPage}
        onClick={() => {
          const newPage = currPage + 1;
          setCurrPage(newPage);
          onFetch(newPage);
        }}
        className="px-3 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 cursor-pointer"
      >
        Next
      </button>
    </section>
  );
}

export default Pagination;
