import Link from "next/link"

const Navigation = () => {
  return (
    <>
      <header className="flex gap-6 font-bold text-blue-700 mb-4">
        <div>Diksha Logo</div>
        <ul className="flex text-xs  mt-1 gap-2 text-gray-600 w-[250px] justify-between">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Navigation
