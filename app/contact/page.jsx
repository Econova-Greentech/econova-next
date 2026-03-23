"use client"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react"

function LabelPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      We are hiring!
    </span>
  );
}

function ContactRow({ icon, title, value, hint }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">{title}</p>
        <p className="mt-1 text-lg font-semibold leading-6 text-slate-900">{value}</p>
        <p className="mt-1 text-xs text-slate-500">{hint}</p>
      </div>
    </div>
  );
}

function FaqCard({ question, answer }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{question}</h3>
      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">{answer}</p>
    </article>
  );
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("General Inquiry")
  const [message, setMessage] = useState("")

  const formSubmissionHandler = async (e) => {
  try {
    e.preventDefault()
    const response = await fetch('/api/queries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        subject: subject,
        message: message
      })
    })
    alert("Message sent successfully! We will get back to you shortly.")
  } catch (error) {
    alert("There was an error sending your message. Please try again later.")
  }
}

  return (
    <div className="min-h-screen bg-[#edf1ef] text-slate-900">
      <Navbar />

      <main className="w-full">
        <section className="w-full px-6 pb-8 pt-8 lg:px-12 lg:pb-10 lg:pt-10">
          <LabelPill />

          <div className="mt-4 flex items-start justify-between gap-5">
            <div>
              <h1 className="text-4xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Let&apos;s build a
                <br />
                <span className="text-emerald-500">greener future</span>
                <br />
                together.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:w-[58%]">
                Have questions about our sustainable materials or green tech
                solutions? Our team is ready to help you make the switch to
                eco-friendly alternatives.
              </p>
            </div>

            <span className="mt-14 hidden h-4 w-10 rounded-full bg-emerald-100 lg:block" />
          </div>
        </section>

        <section className="w-full px-6 py-2 lg:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-2xl bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] lg:p-7">
              <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">Contact Information</h2>
              <p className="mt-2 text-sm text-slate-500 lg:text-base">
                Reach out to us directly through any of these channels.
              </p>

              <div className="mt-6 space-y-6">
                <ContactRow
                  title="Email Us"
                  value="contact@econova.in"
                  hint="We typically reply within 2 hours."
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18v12H3z" />
                      <path d="M3 8l9 6 9-6" />
                    </svg>
                  }
                />

                <ContactRow
                  title="Call Us"
                  value="+91 98765 43210"
                  hint="Mon - Fri, 9am to 6pm IST."
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2L9.1 10.5a16 16 0 0 0 4.4 4.4l1.2-1.2a2 2 0 0 1 2-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  }
                />

                <ContactRow
                  title="Visit Us"
                  value="123 Green Tech Park, Bangalore, India"
                  hint=""
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  }
                />
              </div>

              <button className="mt-6 rounded-lg bg-slate-100 px-5 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                View on Map
              </button>
            </article>

            <article
              className="rounded-2xl bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] lg:p-7"
              style={{
                backgroundImage:
                  "linear-gradient(125deg, rgba(255,255,255,1) 55%, rgba(221,245,230,0.8))",
              }}
            >
              <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-500 lg:text-base">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <form className="mt-6 space-y-4" onSubmit={formSubmissionHandler}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-700">First Name</span>
                    <input
                      type="text"
                      placeholder="John"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-700">Last Name</span>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-700">Email Address</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-700">Subject</span>
                  <select className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100" onChange={(e) => setSubject(e.target.value)} required>
                    <option>General Inquiry</option>
                    <option>Product Details</option>
                    <option>Bulk Pricing</option>
                    <option>Partnership</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-700">Message</span>
                  <textarea
                    rows={4}
                    placeholder="How can we help you today?"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                <input
                  type="submit"
                  className="h-10 w-full rounded-lg bg-slate-950 text-xs font-semibold text-white transition hover:bg-slate-800 cursor-pointer" value="Send Message ▶" />
              </form>
            </article>
          </div>
        </section>

        <section className="w-full px-6 pb-12 pt-12 lg:px-12 lg:pb-14 lg:pt-14">
          <h2 className="text-center text-2xl font-bold text-slate-900 lg:text-3xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 lg:grid-cols-2">
            <FaqCard
              question="What sustainable materials do you use?"
              answer="We primarily use recycled polymers, bamboo composites, and bio-based resins sourced directly from certified farms across India."
            />
            <FaqCard
              question="What is the response time for quotes?"
              answer="Our sales team strives to respond to all quote requests within 24 business hours with a detailed breakdown."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}