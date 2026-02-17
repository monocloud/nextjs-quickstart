import { getSession } from "@monocloud/auth-nextjs";

export default async function ServerPage() {
  const session = await getSession();

  if (!session?.user) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <p>Hi {session.user.email}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
