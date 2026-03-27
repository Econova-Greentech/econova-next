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
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
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

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-emerald-50 transform transition-all duration-300 scale-100 flex flex-col items-center text-center scale-up-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-500 mb-8 px-2">
          Thank you for reaching out. We have received your query and will get back to you soon through email.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("General Inquiry")
  const [message, setMessage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const formSubmissionHandler = async (e) => {
    e.preventDefault()
    try {
      setSubmitting(true)
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

      if (!response.ok) throw new Error('Failed to send message')

      setShowSuccess(true)
      // Reset form (optional but recommended)
      e.target.reset()
    } catch (error) {
      alert("There was an error sending your message. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#edf1ef] text-slate-900">
      <Navbar />
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

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
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  }
                />

                <ContactRow
                  title="Call Us"
                  value="+91 91369 07789"
                  hint="Mon - Fri, 9am to 6pm IST."
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
                    </svg>
                  }
                />

                <ContactRow
                  title="Visit Us"
                  value="Mumbai, India"
                  hint=""
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11z" />
                      <circle cx="12" cy="10" r="2" />
                    </svg>
                  }
                />
              </div>
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
                      placeholder="First name"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-700">Last Name</span>
                    <input
                      type="text"
                      placeholder="Last name"
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
                    placeholder="name@example.com"
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

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-10 w-full rounded-lg bg-slate-950 text-xs font-semibold text-white transition hover:bg-slate-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
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