export async function GET() {
  try {
    const res = await fetch(`${process.env.URL}images/search?`, {
      method: "GET",
      headers: { "x-api-key": `${process.env.API_KEY}` },
    });

    if (res.ok) {
      const data = await res.json();
      return Response.json(data);
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { value } = reqBody;

    if (value === 1 || value === -1) {
      const res = await fetch(`${process.env.URL}votes`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": `${process.env.API_KEY}`,
        },
        body: JSON.stringify(reqBody),
      });

      if (res.ok) {
        const data = await res.json();
        return Response.json(data);
      }
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
