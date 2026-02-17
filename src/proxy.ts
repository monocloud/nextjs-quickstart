import { authMiddleware } from "@monocloud/auth-nextjs";

export default authMiddleware();

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
