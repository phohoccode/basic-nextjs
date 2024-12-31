import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className="text-3xl font-bold underline" href="/blog">Bài viết</Link>
    </div>
  );
}
