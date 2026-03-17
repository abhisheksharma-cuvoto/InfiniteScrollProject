import Card from "@/components/Card";
import InfiniteScroll from "@/components/InfiniteScroll";
import { fetchData } from "@/hooks/fetchData";

async function InfiniteScrollPage() {
  const res = await fetchData(1);
  const data = res.slice(0, 9);

  return (
    <main className="min-h-screen flex justify-center pt-10">
      <div>
        <h1 className="text-center font-semibold text-4xl">Cat Images</h1>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-5 px-6">
          {data.map((cat) => (
            <Card key={cat.id} cat={cat} />
          ))}
        </section>
        <InfiniteScroll />
      </div>
    </main>
  );
}

export default InfiniteScrollPage;
