import Card from "@/components/InfiniteScroll/Card";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import { fetchData } from "@/hooks/fetchData";

async function InfiniteScrollPage() {
  const data = await fetchData(1, { cache: "no-store" });

  return (
    <main className="min-h-screen flex justify-center pt-10">
      <div>
        <h1 className="text-center font-semibold text-4xl">Cat Images</h1>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-5 px-6">
          {data.map((cat) => (
            <Card key={cat.id} cat={cat} />
          ))}
          <InfiniteScroll />
        </section>
      </div>
    </main>
  );
}

export default InfiniteScrollPage;
