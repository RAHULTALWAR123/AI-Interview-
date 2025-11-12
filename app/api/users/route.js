import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), { status: 500 });
  }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {name,email} = body;

        const user = await prisma.user.create({
            data :{
                name,
                email
            }
        })

        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
    }
}
