import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("easy-buyDB"); // Specify DB name
  const products = await db.collection("products").find().toArray();
  return NextResponse.json(products);
}

export async function POST(req) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db("easy-buyDB"); // Specify DB name
  await db.collection("products").insertOne(data);
  return NextResponse.json({ message: "Product added" });
}
