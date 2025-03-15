import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Hakkımızda</h1>
      <Link href="/" className="underline">Ana sayfaya dön</Link>
    </div>
  );
}
