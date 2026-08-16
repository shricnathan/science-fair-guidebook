import Link from 'next/link'
import { BRAND, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-cyan mb-4">{BRAND.name}</h3>
            <p className="text-gray-300">{BRAND.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4">Product</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-cyan">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-cyan">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-cyan">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
