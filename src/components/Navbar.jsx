import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-neutral-800" />
            <span className="font-semibold text-neutral-900">Farah Najwa</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-neutral-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-2 py-2 rounded hover:bg-neutral-100 text-neutral-800"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
