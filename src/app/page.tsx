import Link from "next/link";
import { SignOut } from "@monocloud/auth-nextjs/components";

export default function Home() {
  return (
    <main>
      <h1>MonoCloud Next.js Quickstart</h1>

      <nav>
        <Link href="/server">Server Page</Link>
        <br />
        <Link href="/client">Client Page</Link>
      </nav>

      <SignOut>Sign out</SignOut>
    </main>
  );
};
