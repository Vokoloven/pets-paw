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

export async function GET() {
  try {
    const req = await fetch(`${process.env.URL}favourites/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
    });

    return req;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(res: Response) {
  try {
    const resBody = await res.json();
    const { favourites_id } = resBody;

    const req = await fetch(`${process.env.URL}favourites/${favourites_id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": `${process.env.API_KEY}`,
      },
    });

    console.log(req.status);

    return req;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
