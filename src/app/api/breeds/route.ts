export async function GET() {
  try {
    const res = await fetch(`${process.env.URL}breeds`);
    if (res.ok) return res;
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
