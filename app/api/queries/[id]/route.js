import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../lib/mongodb'
import Queries from '../../../../models/queries'

// Get a Query by ID
export async function GET(req, { params }) {
  try {
    await connectMongoDB();

    const { id } = await params; // ✅ IMPORTANT (Next.js async params)

    const query = await Queries.findById(id);

    if (!query) {
      return NextResponse.json(
        { error: "Query not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(query, { status: 200 });

  } catch (error) {
    console.error("ERROR:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Update Status of a Query
export async function PUT(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = await params
    const body = await req.json()
    const { status } = body
    const allowedStatuses = [
      "Pending",
      "Under Review",
      "Approved",
      "Rejected"
    ]
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      )
    }
    const updatedQuery = await Queries.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: 'after' }
    )
    if (!updatedQuery) {
      return NextResponse.json(
        { error: "Query not found" },
        { status: 404 }
      )
    }
    return NextResponse.json(updatedQuery, { status: 200 })
  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}