import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "api/uploadthing",
    "/assets/images/favicon.ico",
    "/assets/images/dotteted-pattern.png",
    "api/uploadthing",
  ],
  ignoredRoutes: ["/api/webhook/clerk", "/api/webhook/stripe"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
