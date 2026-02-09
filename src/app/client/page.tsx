"use client";

import { useAuth } from "@monocloud/auth-nextjs/client";

export default function ClientPage() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <p>Hi {user?.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
