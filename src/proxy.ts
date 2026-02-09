import { monoCloud } from "@/monocloud";

export default monoCloud.authMiddleware();

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
