export async function GET() {
  try {
    const req = await fetch(`${process.env.URL}votes/`, {
      headers: { "x-api-key": `${process.env.API_KEY}` },
    });

    return req;
  } catch (error: any) {
    Response.json({ error: error.message }, { status: 500 });
  }
}
