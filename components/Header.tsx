import Link from 'next/link'
import { BRAND, NAVIGATION } from '@/lib/constants'

export default function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan">
          {BRAND.name}
        </Link>
        <nav className="hidden md:flex gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cyan transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-cyan">☰</button>
      </div>
    </header>
  )
}
