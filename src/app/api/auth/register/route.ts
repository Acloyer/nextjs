import { NextResponse } from "next/server";
import { usersDB } from "../usersDb";

// база
// let usersDB: { email: string; password: string }[] = [
//   { email: "admin@example.com", password: "adminpass" },
// ];

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // провекра на то есть ли чел
  const existingUser = usersDB.find((user) => user.email === email);
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 }
    );
  }

  usersDB.push({ email, password });

  console.log("Current usersDB:", usersDB);

  return NextResponse.json({ message: "User registered successfully" });
}
