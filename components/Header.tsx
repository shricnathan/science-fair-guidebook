import Link from 'next/link'
import { BRAND, NAVIGATION } from '@/lib/constants'

export default function Header() {
  return (
    <header className="bg-navy text-white border-b border-cyan/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
          {BRAND.name}
        </Link>
        <nav className="hidden md:flex gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-cyan transition-colors font-medium"
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
