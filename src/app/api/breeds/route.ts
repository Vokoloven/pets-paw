export async function GET() {
  try {
    const res = await fetch(`${process.env.URL}breeds`);
    if (res.ok) {
      return res;
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { breedId, perPage, mimeTypes, order } = reqBody;

    const queryParams = new URLSearchParams({
      mime_types: mimeTypes,
      limit: perPage,
      order,
    });
    if (breedId) {
      queryParams.append("breed_ids", breedId);
    }

    const res = await fetch(
      `${process.env.URL}images/search?${queryParams.toString()}`,
      { headers: { "x-api-key": `${process.env.API_KEY}` } }
    );

    if (res.ok) {
      return res;
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
