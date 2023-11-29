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

export async function DELETE(req: Request) {
  try {
    const reqBody = await req.json();
    const { vote_id } = reqBody;

    const res = await fetch(`${process.env.URL}votes/${vote_id}`, {
      method: "DELETE",
      headers: { "x-api-key": `${process.env.API_KEY}` },
    });

    return res;
  } catch (error: any) {
    Response.json({ error: error.message }, { status: 500 });
  }
}
