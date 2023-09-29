import { headers } from "next/headers";

export async function getNow() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const res = await fetch(new URL("/api/time", `${protocol}://${host}`).href, {
    cache: "force-cache",
  });
  const { now } = await res.json();
  return now;
}
