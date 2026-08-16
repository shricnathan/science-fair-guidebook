import Link from 'next/link'
import { BRAND, NAVIGATION } from '@/lib/constants'

export default function Header() {
  return (
    <header className="bg-indigo/80 backdrop-blur-md border-b border-cyan/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple via-pink to-cyan bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          {BRAND.name}
        </Link>
        <nav className="hidden md:flex gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-off-white hover:text-cyan transition-colors font-medium relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-cyan text-2xl">☰</button>
      </div>
    </header>
  )
}
