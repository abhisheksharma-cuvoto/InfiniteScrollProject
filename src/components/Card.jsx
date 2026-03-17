"use client";

import Image from "next/image";

function Card({ cat }) {
  return (
    <div className="w-[280px] px-4 py-2.5 shadow border rounded-sm">
      <div className="relative w-full h-[300px]">
        <Image src={cat.url} alt={cat.id} fill objectFit="cover"></Image>
      </div>
    </div>
  );
}

export default Card;
