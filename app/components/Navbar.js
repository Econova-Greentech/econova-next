import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/product" },
  { label: "Sustainability", href: "/sustainablibty" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between px-6 py-3.5 lg:px-8">
        <a className="shrink-0" href="#" aria-label="Econova home">
          <Image
            src="/Logo.png"
            alt="Econova logo"
            width={128}
            height={34}
            priority
          />
        </a>

        <nav
          className="hidden items-center gap-8 text-[13px] font-medium text-slate-600 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="rounded-lg bg-slate-950 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-slate-800"
          href="/contact"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}
