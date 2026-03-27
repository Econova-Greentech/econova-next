import { NextResponse } from 'next/server'
import connectMongoDB from '../../../lib/mongodb'
import Queries from '../../../models/queries'

// Get all Queries
export async function GET() {
  try {
    await connectMongoDB()
    const queries = await Queries.find().sort({ createdAt: -1 })
    return NextResponse.json(queries, { status: 200 })
  } catch (error) {
    console.error("ERROR:", error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// POST (Submit) a Query
export async function POST(req) {
  try {
    await connectMongoDB();
    const body = await req.json()
    const newQuery = await Queries.create({
      ...body,
      status: "Pending"
    })
    return NextResponse.json(newQuery, { status: 201 })
  } catch (error) {
    console.error("ERROR:", error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}