"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminQueriesPage() {
  const [queries, setQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [updating, setUpdating] = useState(false)

  const fetchQueries = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/queries')
      if (!response.ok) throw new Error('Failed to fetch queries')
      const data = await response.json()
      setQueries(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQueries()
  }, [])

  const updateStatus = async (id, newStatus) => {
    try {
      setUpdating(true)
      const response = await fetch(`/api/queries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!response.ok) throw new Error('Failed to update status')
      
      // Update local state
      setQueries(queries.map(q => q._id === id ? { ...q, status: newStatus } : q))
      if (selectedQuery && selectedQuery._id === id) {
        setSelectedQuery({ ...selectedQuery, status: newStatus })
      }
    } catch (err) {
      alert(err.message)
    } finally {
      setUpdating(false)
    }
  }

  const deleteQuery = async (id) => {
    if (!confirm('Are you sure you want to delete this query?')) return
    try {
      setUpdating(true)
      const response = await fetch(`/api/queries/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete query')
      
      setQueries(queries.filter(q => q._id !== id))
      if (selectedQuery?._id === id) setSelectedQuery(null)
    } catch (err) {
      alert(err.message)
    } finally {
      setUpdating(false)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/Logo.png" alt="Logo" width={100} height={26} className="h-auto" />
            </Link>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={fetchQueries}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="Refresh queries"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={loading ? 'animate-spin' : ''}>
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24L21 8"/>
                <path d="M21 3v5h-5"/>
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* List Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Queries ({queries.length})</h2>
            </div>
            
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-16rem)]">
              {loading && queries.length === 0 ? (
                Array(5).fill(0).map((_, i) => (
                  <div key={i} className="h-20 bg-white border border-slate-200 rounded-xl animate-pulse" />
                ))
              ) : error ? (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              ) : queries.length === 0 ? (
                <div className="p-8 text-center bg-white border border-dashed border-slate-300 rounded-xl">
                  <p className="text-slate-400 text-sm">No queries found</p>
                </div>
              ) : (
                queries.map((q) => (
                  <button
                    key={q._id}
                    onClick={() => setSelectedQuery(q)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 group ${
                      selectedQuery?._id === q._id 
                        ? 'bg-white border-slate-900 shadow-lg shadow-slate-200 ring-1 ring-slate-900' 
                        : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{q._id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${getStatusColor(q.status)}`}>
                        {q.status}
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900 truncate">{q.first_name} {q.last_name}</p>
                    <p className="text-xs text-slate-500 truncate">{q.subject}</p>
                    <p className="text-[10px] text-slate-400 mt-2">
                       {new Date(q.createdAt).toLocaleDateString()}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Details View */}
          <div className="flex-1">
            {selectedQuery ? (
              <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden sticky top-24">
                <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedQuery.subject}</h2>
                    <p className="text-slate-500 text-sm mt-1">From: {selectedQuery.first_name} {selectedQuery.last_name} ({selectedQuery.email})</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Pending', 'Under Review', 'Completed'].map((status) => (
                      <button
                        key={status}
                        disabled={updating || selectedQuery.status === status}
                        onClick={() => updateStatus(selectedQuery._id, status)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                          selectedQuery.status === status
                            ? 'bg-slate-950 text-white border-slate-950 shadow-md'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-900 hover:text-slate-900 disabled:opacity-50'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Message</h3>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {selectedQuery.message}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-100">
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase mb-1">Entry ID</h4>
                      <p className="font-mono text-sm text-slate-700">{selectedQuery._id}</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase mb-1">Received Date</h4>
                      <p className="text-sm text-slate-700">{new Date(selectedQuery.createdAt).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a 
                      href={`mailto:${selectedQuery.email}?subject=RE: ${selectedQuery.subject}`}
                      className="flex-1 min-w-[200px] bg-slate-950 text-white text-center py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Reply via Email
                    </a>
                    <button 
                      onClick={() => window.print()}
                      className="px-5 py-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
                      title="Print Query"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                    </button>
                    <button 
                      onClick={() => deleteQuery(selectedQuery._id)}
                      className="px-5 py-3.5 border border-red-200 rounded-xl hover:bg-red-50 transition-colors text-red-600"
                      title="Delete Query"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[60vh] bg-white border border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7"/><path d="m7 8 5 3 5-3"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Select a Query</h3>
                <p className="text-slate-500 max-w-xs">Pick a query from the list on the left to view detailed information and manage its status.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer / Info */}
      <footer className="py-8 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400">Econova Greentech • Admin Portal • Next.js React 19</p>
        </div>
      </footer>
    </div>
  )
}
