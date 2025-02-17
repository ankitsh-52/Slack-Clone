import { 
    convexAuthNextjsMiddleware, 
    createRouteMatcher, 
    isAuthenticatedNextjs, 
    nextjsMiddlewareRedirect 
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware(async (request) => {
    if(!isPublicPage(request) &&  !(isAuthenticatedNextjs()))
    {
        return nextjsMiddlewareRedirect(request, "/signin");
    }

    //todo: redirect user away from signin if authenticated.
    // if(isPublicPage(request)) {
    //     return;
    // } else if(!isPublicPage(request) && !(await isAuthenticatedNextjs())) {
    //     return nextjsMiddlewareRedirect(request, "/signin");
    // }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};