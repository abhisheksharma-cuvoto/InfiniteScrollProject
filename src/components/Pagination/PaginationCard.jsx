import Image from "next/image";

function PaginationCard({ catData }) {
  return (
    <div className="w-[150px] h-[150px] p-2 border">
      <div className="relative w-full h-full">
        <Image
          src={catData.url}
          alt={catData.id}
          fill
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
}

export default PaginationCard;
