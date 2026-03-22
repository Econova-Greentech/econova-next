import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="grid w-full gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/Logo.png"
            alt="Econova logo"
            width={126}
            height={34}
          />
          <p className="mt-3 text-base leading-7 text-slate-600">
            Building a sustainable tomorrow with innovative green materials for
            the modern world.
          </p>
          <div className="mt-4 flex items-center gap-3 text-slate-500">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-sm">𝕏</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-sm">in</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-base text-slate-600">
          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
            Company
          </h4>
          <a href="#" className="transition hover:text-slate-900">
            About
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Careers
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-3 text-base text-slate-600">
          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
            Resources
          </h4>
          <a href="#" className="transition hover:text-slate-900">
            Blog
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Case Studies
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Support
          </a>
        </div>

        <div className="flex flex-col gap-3 text-base text-slate-600">
          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
            Contact
          </h4>
          <a href="#" className="transition hover:text-slate-900">
            123 Green Tech Park,
            <br />
            Bangalore, KA 560001
          </a>
          <a href="tel:+918888888888" className="transition hover:text-slate-900">
            +91 98765 43210
          </a>
          <a
            href="mailto:hello@econova.in"
            className="transition hover:text-slate-900"
          >
            hello@econova.in
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="w-full px-6 py-5 text-center text-sm text-slate-500 lg:px-8">
          <p>© 2023 Econova Sustainable Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
