export async function getNow() {
  const res = await fetch(new URL("/api/time", `${process.env.HOST}`).href);
  const { now } = await res.json();
  return now;
}
