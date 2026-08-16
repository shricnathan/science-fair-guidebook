import Link from 'next/link'
import { BRAND, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-indigo border-t border-cyan/20 mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple via-pink to-cyan bg-clip-text text-transparent mb-4">{BRAND.name}</h3>
            <p className="text-cool-gray leading-relaxed">{BRAND.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4 uppercase tracking-wide text-sm">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cool-gray hover:text-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4 uppercase tracking-wide text-sm">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cool-gray hover:text-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-cyan mb-4 uppercase tracking-wide text-sm">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cool-gray hover:text-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan/10 pt-8 text-center text-cool-gray">
          <p>&copy; 2024 {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
