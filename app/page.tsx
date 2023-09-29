import Link from "next/link";
import { getNow } from "./now";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export default async function Home() {
  const action = async () => {
    "use server";

    revalidatePath("/");
  };

  const now = await getNow();
  return (
    <main className="m-4 p-4 border-2 border-blue-500">
      <p>PageLayout {now}</p>
      <div className="mt-2">
        <form action={action}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            revalidatePath(&apos;/&apos;)
          </button>
        </form>
      </div>
      <Link href="/dummy" target="_blank">
        go to dummy page
      </Link>
    </main>
  );
}
