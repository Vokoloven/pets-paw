export async function POST(req: Request) {
  try {
    const file = await req.formData();

    const res = await fetch(`${process.env.URL}images/upload`, {
      method: "POST",
      headers: {
        "x-api-key": `${process.env.API_KEY}`,
      },
      body: file,
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await fetch(`${process.env.URL}images/`, {
      method: "GET",
      headers: {
        "x-api-key": `${process.env.API_KEY}`,
      },
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
