import React, { useMemo, useState } from "react";

// === Quick customization ===
const BRAND = {
  name: "AR Web Studio",
  tagline: "Stylish websites. Transparent pricing.",
  phone: "+91 6302168006",
  whatsapp: "916302168006", // numeric with country code for wa.me
  email: "praveen.uppada1812@gmail.com",
  city: "India",
};

const SERVICES = [
  {
    key: "business",
    icon: "💼",
    title: "Business / Company Website",
    price: "₹10,000 – ₹20,000",
    bullets: [
      "Company profile, services, gallery",
      "Contact form + Google Map",
      "Mobile responsive & fast",
    ],
    badge: "Most Popular",
  },
  {
    key: "ecom",
    icon: "🛒",
    title: "E-Commerce Website",
    price: "₹25,000 – ₹60,000",
    bullets: [
      "Product catalog + Cart + Payments",
      "Order & inventory management",
      "Instagram/WhatsApp share links",
    ],
  },
  {
    key: "booking",
    icon: "📅",
    title: "Appointment / Booking",
    price: "₹20,000 – ₹40,000",
    bullets: [
      "Online appointment calendar",
      "Email/SMS confirmations",
      "Advance/UPI payments (optional)",
    ],
  },
  {
    key: "portfolio",
    icon: "🎨",
    title: "Portfolio / Personal",
    price: "₹7,000 – ₹15,000",
    bullets: [
      "Showcase work, resume, testimonials",
      "One-click WhatsApp lead capture",
      "Custom domain & SEO basics",
    ],
  },
  {
    key: "landing",
    icon: "🚀",
    title: "Landing Page (One-Pager)",
    price: "₹5,000 – ₹10,000",
    bullets: [
      "Campaign/offer landing page",
      "Lead form + pixel ready",
      "Lightning-fast load",
    ],
  },
  {
    key: "lms",
    icon: "📚",
    title: "Educational / LMS",
    price: "₹30,000 – ₹80,000",
    bullets: [
      "Courses, video, quizzes, fees",
      "Student login & progress",
      "Secure content delivery",
    ],
  },
  {
    key: "directory",
    icon: "🏠",
    title: "Real Estate / Directory",
    price: "₹40,000 – ₹1,00,000",
    bullets: [
      "Listings with search & filters",
      "Maps, enquiries, WhatsApp share",
      "Monetize via ads/listing fees",
    ],
  },
];

const ADDONS = [
  {
    icon: "🌍",
    title: "Domain + Hosting Setup",
    price: "₹3,000 / year",
    note: "Fast, secure, 99.9% uptime",
  },
  { icon: "🔍", title: "SEO Starter Pack", price: "₹5,000", note: "On-page SEO + Google setup" },
  { icon: "🎯", title: "Logo & Branding Kit", price: "₹2,500", note: "Logo + color palette + fonts" },
];

const PORTFOLIO = [
  {
    title: "Harsha ID Solutions",
    tag: "Business",
    url: "https://www.harshaidsolution.co.in/",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return SERVICES.filter(
      (s) => s.title.toLowerCase().includes(q) || s.bullets.some((b) => b.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 overflow-x-hidden">
      <Header />
      <Hero />
      <About />   {/* ← About section */}

      {/* Services (Menu) */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
              <h2 className="text-2xl sm:text-3xl font-bold break-words">Our Website Packages</h2>
            <p className="text-slate-500 mt-1">
              Transparent, India-friendly pricing. Pay only for what you need.
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: e.g. e-commerce, booking, portfolio…"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <span className="absolute right-3 top-2.5">🔎</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((s) => (
            <ServiceCard key={s.key} service={s} />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section id="addons" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Add-On Services</h2>
          <p className="text-slate-500">Bundle these for the best value.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {ADDONS.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{a.icon}</div>
                <h3 className="mt-2 font-semibold text-lg">{a.title}</h3>
                <p className="text-emerald-600 font-semibold">{a.price}</p>
                <p className="text-slate-500 text-sm mt-1">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Recent Work / Demos</h2>
        <p className="text-slate-500">Ask for a live preview link tailored to your business.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {PORTFOLIO.map((p, i) => (
            <a
              key={i}
              href={p.url}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition block"
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 grid place-content-center text-slate-600 font-semibold">
                {p.title}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                    <p className="font-medium break-words">{p.title}</p>
                  <p className="text-xs text-slate-500">{p.tag}</p>
                </div>
                <span className="text-sm text-emerald-600 group-hover:underline">View →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Get a free 10-minute consultation</h3>
            <p className="opacity-90">
              Tell us about your business. We’ll recommend the right package & timeline.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20${encodeURIComponent(
                BRAND.name
              )}%2C%20I%20need%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow hover:shadow-md"
            >
              WhatsApp Us
            </a>
            <a
              href={`mailto:${BRAND.email}?subject=Website%20Inquiry&body=Hi%20${encodeURIComponent(
                BRAND.name
              )}%2C%0A%0AI%20need%20a%20website%20for%20my%20business.%20Please%20contact%20me.`}
              className="rounded-xl border border-white/70 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
        <p className="text-slate-500 mb-6">We usually reply within an hour.</p>
        <ContactCard />
      </section>

      <Footer />
    </div>
  );
}

// === The rest of your components (Header, Hero, About, ServiceCard, ContactCard, Footer) stay the same ===

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
       <a href="#home" className="flex items-center gap-2">
         <img src="/logo.png" alt="AR Web Studio Logo" className="h-9 w-9 rounded-xl" />
         <div>
           <p className="font-bold leading-tight">{BRAND.name}</p>
           <p className="text-xs text-slate-500 -mt-0.5">{BRAND.tagline}</p>
         </div>
       </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#addons" className="hover:text-emerald-700">Add‑ons</a>
          <a href="#portfolio" className="hover:text-emerald-700">Portfolio</a>
          <a href="#about" className="hover:text-emerald-700">About</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
         <a
           href={`https://wa.me/${BRAND.whatsapp}`}
           target="_blank"
           rel="noreferrer"
           className="rounded-xl bg-emerald-600 text-white px-4 py-2 font-semibold shadow hover:shadow-md"
         >
           WhatsApp
         </a>
         <a
           href={`tel:${BRAND.phone.replace(/\\s+/g, "")}`}
           className="rounded-xl bg-emerald-500 text-white px-4 py-2 font-semibold shadow hover:shadow-md"
         >
           Call
         </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border border-slate-200 px-3 py-2">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#addons" onClick={() => setOpen(false)}>Add-ons</a>
            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            {/* Action buttons */}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-emerald-600 text-white px-4 py-2 text-center font-semibold"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="rounded-lg bg-emerald-500 text-white px-4 py-2 text-center font-semibold"
                onClick={() => setOpen(false)}
              >
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d1fae5" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#g)" />
          <circle cx="120" cy="80" r="60" fill="#a7f3d0" />
          <circle cx="700" cy="320" r="90" fill="#bae6fd" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 break-words">
            Get a beautiful website with <span className="text-emerald-700">clear pricing</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">We build fast, mobile‑first websites for Indian businesses: schools, clinics, shops, real estate, creators and more.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:shadow-md">View Packages</a>
            <a href="#portfolio" className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50">See Demos</a>
          </div>
          <p className="mt-3 text-sm text-slate-500">No hidden fees • Quick delivery • Post‑launch support</p>
        </div>
        <div className="rounded-3xl bg-white/70 border border-slate-200 p-6 shadow-sm">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">⚡ Fast delivery</li>
            <li className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">📱 Mobile‑first design</li>
            <li className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">🔒 HTTPS & security setup</li>
            <li className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">🧭 SEO basics included</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">About {BRAND.name}</h2>
          <p className="text-slate-600 mt-3">
            {BRAND.name} is a boutique web team specializing in{" "}
            <strong>Business Websites, E-commerce, Booking systems, and Portfolios</strong>.
            We ship fast, mobile-first sites with clear pricing and post-launch support.
          </p>
          <p className="text-slate-600 mt-3">
            We keep it simple: WhatsApp-first communication, transparent scope, and clean,
            SEO-ready builds. Every project includes responsive design, HTTPS/security, and
            practical tools you’ll actually use.
          </p>

          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="rounded-xl border border-slate-200 bg-white p-3">⚡ Fast delivery</li>
            <li className="rounded-xl border border-slate-200 bg-white p-3">📱 Mobile-first UX</li>
            <li className="rounded-xl border border-slate-200 bg-white p-3">🔍 SEO basics included</li>
            <li className="rounded-xl border border-slate-200 bg-white p-3">🔒 HTTPS & security</li>
            <li className="rounded-xl border border-slate-200 bg-white p-3">🧰 Forms, booking, payments</li>
            <li className="rounded-xl border border-slate-200 bg-white p-3">🤝 Honest pricing</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20${encodeURIComponent(BRAND.name)}%2C%20I'd%20like%20a%20quote.`}
              target="_blank" rel="noreferrer"
              className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:shadow-md"
            >
              Get a Quick Quote
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50"
            >
              See Our Work
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-3xl font-bold text-emerald-700">10+</p>
              <p className="text-xs text-slate-500">Projects</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-3xl font-bold text-emerald-700">7–14</p>
              <p className="text-xs text-slate-500">Day delivery</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-3xl font-bold text-emerald-700">1 mo</p>
              <p className="text-xs text-slate-500">Support</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-slate-50 to-emerald-50 border border-slate-200 p-5">
            <h4 className="font-semibold text-slate-800">Our Stack</h4>
            <p className="text-sm text-slate-600 mt-1">
              React, Tailwind, Next.js, WordPress/WooCommerce, Node/Spring Boot, MySQL/MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function ServiceCard({ service }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      {service.badge && (
        <span className="absolute -top-2 right-3 rounded-full bg-emerald-600 text-white text-xs px-3 py-1 shadow">{service.badge}</span>
      )}
      <div className="text-3xl">{service.icon}</div>
      <h3 className="mt-2 font-semibold text-lg break-words">{service.title}</h3>
      <p className="text-emerald-700 font-semibold">{service.price}</p>
      <ul className="mt-2 text-sm text-slate-600 list-disc ml-5 space-y-1">
        {service.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
       <a
         href={`https://wa.me/${BRAND.whatsapp}?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(service.title)}%20package.`}
         target="_blank"
         rel="noreferrer"
         className="rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold"
       >
         Get Quote
       </a>
        <a href="#contact" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
          Ask Question
        </a>
      </div>
    </div>
  );
}

function ContactCard() {
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [msg, setMsg] = useState("");

  const whatsappHref = useMemo(() => {
    const base = `Hi ${BRAND.name}, I need a website.\nName: ${name}\nBusiness: ${biz}\nMessage: ${msg}`;
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(base)}`;
  }, [name, biz, msg]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <input value={biz} onChange={(e) => setBiz(e.target.value)} placeholder="Business type (e.g., School, Clinic, Shop)" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message / Requirements" rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <div className="flex flex-wrap gap-3">
<a
  href={whatsappHref}
  target="_blank"
  rel="noreferrer"
  className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold"
>
  Send on WhatsApp
</a>
            <a href={`mailto:${BRAND.email}`} className="rounded-xl border border-slate-200 px-5 py-3 font-semibold hover:bg-slate-50">Email Us</a>
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-slate-50 to-emerald-50 border border-slate-200 p-5">
          <h4 className="font-semibold text-slate-800">Why choose us?</h4>
          <ul className="text-sm text-slate-600 mt-2 space-y-2 list-disc ml-5">
            <li>Clear pricing & quick delivery</li>
            <li>Mobile‑first, SEO‑ready builds</li>
            <li>1 month post‑launch support</li>
          </ul>
          <div className="mt-4 text-sm">
            <p>📞 {BRAND.phone}</p>
            <p>✉️ {BRAND.email}</p>
            <p>📍 {BRAND.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AR Logo" className="h-8 w-8 rounded-xl" />
          <div>
            <p className="font-semibold">{BRAND.name}</p>
            <p className="text-slate-500">{BRAND.tagline}</p>
          </div>
        </div>
        <ul className="flex gap-5">
          <li><a href="#services" className="hover:text-emerald-700">Services</a></li>
          <li><a href="#addons" className="hover:text-emerald-700">Add‑ons</a></li>
          <li><a href="#portfolio" className="hover:text-emerald-700">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-emerald-700">Contact</a></li>
        </ul>
        <p className="text-slate-500">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
