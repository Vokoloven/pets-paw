export async function GET() {
  try {
    const res = await fetch(`${process.env.URL}breeds`);
    if (res.ok) return res;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { breedId, perPage } = reqBody;

    if (breedId === "all") {
      const res = await fetch(
        `${process.env.URL}images/search?limit=${perPage}`,
        { headers: { "x-api-key": `${process.env.API_KEY}` } }
      );

      return res;
    }

    const res = await fetch(
      `${process.env.URL}images/search?limit=${perPage}&breed_ids=${breedId}&api_key=${process.env.API_KEY}`
    );

    return res;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
