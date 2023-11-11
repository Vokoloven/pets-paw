export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { imageId } = reqBody;

    const res = await fetch(`${process.env.URL}images/${imageId}`, {
      method: "GET",
    });

    if (res.ok) {
      const data = await res.json();
      return Response.json(data);
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
