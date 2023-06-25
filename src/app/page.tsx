import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Link
        href="/lists/new"
        className="w-24 text-2xl text-center border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        New
      </Link>
      <Link
        href="/lists"
        className="w-24 text-2xl text-center border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Lists
      </Link>
    </div>
  )
}
