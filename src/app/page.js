import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center py-10">
      <div>
        <div className="py-5">
          <h1 className="text-4xl font-semibold text-center">Home</h1>
          <h3 className="text-2xl font-semibold text-center">
            Infinite Scroll
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className={
              "px-6 py-2 border bg-zinc-800 text-white transition duration-100 ease-in hover:bg-zinc-900"
            }
            href="/infinite-scroll"
          >
            Infinite Scroll
          </Link>
        </div>
      </div>
    </main>
  );
}
