export const runtime = "edge";

export async function GET() {
  return Response.json({ now: new Date().toISOString() });
}
