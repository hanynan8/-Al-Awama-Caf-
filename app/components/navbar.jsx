'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE } from '../siteConfig';

const navLinks = [
  { label: 'الرئيسية',    href: '#home'    },
  { label: 'المنيو',      href: '#menu'    },
  { label: 'قصتنا',      href: '#story'   },
  { label: 'تواصل معانا', href: '#footer' },
];

// ملحوظة: اللوجو مقصوص من صورة منشور على الفيسبوك (جودة محدودة) — استبدل public/logo.png بنسخة عالية الجودة.
const GEDO_AVATAR_URL = '/logo.png';

/* ─── Hamburger Icon ─────────────────────────────────────────────────────────── */
function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center gap-[6px] w-7 h-7">
      <span className={`block h-[2px] bg-[#24364F] rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`block h-[2px] bg-[#24364F] rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
      <span className={`block h-[2px] bg-[#24364F] rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
    </div>
  );
}

/* ─── Logo (صورة دائرية + اسم في سطر واحد جمبها) ────────────────────────────── */
function GedoLogo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={GEDO_AVATAR_URL}
        alt={SITE.name}
        className="h-[76px] w-[76px] rounded-full object-cover flex-shrink-0 drop-shadow-md"
      />
      <span
        className="whitespace-nowrap text-[26px] font-bold text-[color:var(--brand-primary)]"
        style={{ fontFamily: "'Amiri', serif" }}
      >
        {SITE.name}
      </span>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      dir="rtl"
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-md shadow-black/10' : ''}`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-[90px] items-center justify-between">

          {/* ── اللوجو ── */}
          <Link href="#home" className="shrink-0 flex items-center">
            <GedoLogo />
          </Link>

          {/* ── لينكات الشاشات الكبيرة (في النص) ── */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                dir="rtl"
                className="text-[16px] text-[#24364F]/80 transition-colors duration-200 hover:text-[color:var(--brand-primary)]"
                style={{ fontFamily: 'var(--font-arabic, "Cairo", system-ui, sans-serif)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── زرار الـ hamburger (موبايل فقط) ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'قفل القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}
            className="md:hidden p-2 -mr-2 transition-opacity duration-200 hover:opacity-60"
          >
            <HamburgerIcon open={isOpen} />
          </button>

        </div>
      </nav>

      {/* ── القائمة المنسدلة (موبايل فقط) ── */}
      <div className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-[#24364F]/10' : 'max-h-0'}`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              dir="rtl"
              className="border-b border-[#24364F]/10 py-3 text-[18px] text-[#24364F]/80 last:border-0 transition-colors duration-200 hover:text-[color:var(--brand-primary)]"
              style={{ fontFamily: 'var(--font-arabic, "Cairo", system-ui, sans-serif)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}