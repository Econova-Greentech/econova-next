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
            style={{ height: "auto" }}
          />
          <p className="mt-3 text-base leading-7 text-slate-600">
            Building a sustainable tomorrow with innovative green materials for
            the modern world.
          </p>
          <div className="mt-4 flex items-center gap-3 text-slate-500">
            {/* X (Twitter) — replace href with your profile URL */}
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-sm transition hover:bg-slate-200 hover:text-slate-900"
            >
              𝕏
            </a>
            {/* LinkedIn — replace href with your company page URL */}
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-sm transition hover:bg-slate-200 hover:text-slate-900"
            >
              in
            </a>
            {/* Email — replace with your actual email address */}
            <a
              href="mailto:hello@econova.in"
              aria-label="Send us an email"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-sm transition hover:bg-slate-200 hover:text-slate-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M3 4a2 2 0 0 0-2 2v.217l9 5.25 9-5.25V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.482-8.565 4.997a1 1 0 0 1-.87 0L1 8.482V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.482Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-base text-slate-600">
          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
            Company
          </h4>
          <a href="/about" className="transition hover:text-slate-900">
            About
          </a>
          <a href="/contact" className="transition hover:text-slate-900">
            Careers
          </a>
          <a href="/contact" className="transition hover:text-slate-900">
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
          <a href="/contact" className="transition hover:text-slate-900">
            Support
          </a>
        </div>

        <div className="flex flex-col gap-3 text-base text-slate-600">
          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
            Contact
          </h4>
          <a href="#" className="transition hover:text-slate-900">
            Mumbai, India
          </a>
          <a href="tel:+918888888888" className="transition hover:text-slate-900">
            +91 91369 07789
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
