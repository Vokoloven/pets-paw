export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { image_id } = reqBody;

    const res = await fetch(`${process.env.URL}favourites/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
      body: JSON.stringify({ image_id }),
    });

    return res;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
