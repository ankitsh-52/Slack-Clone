// import { 
//     convexAuthNextjsMiddleware, 
//     createRouteMatcher, 
//     isAuthenticatedNextjs, 
//     nextjsMiddlewareRedirect,
// } from "@convex-dev/auth/nextjs/server";
// // import { NextResponse } from 'next/server';

// const isPublicPage = createRouteMatcher(["/auth"]);

// export default convexAuthNextjsMiddleware(async (request) => {
//     if(!isPublicPage(request) &&  !(await isAuthenticatedNextjs()))
//     {
//         return nextjsMiddlewareRedirect(request, "/auth");
//     }

//     //todo: redirect user away from "/auth" if authenticated.
//     // if(isPublicPage(request)) {
//     //     return;
//     // } else if(!isPublicPage(request) && !(await isAuthenticatedNextjs())) {
//     //     return nextjsMiddlewareRedirect(request, "/signin");
//     // }
// });

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import {
    convexAuthNextjsMiddleware,
    createRouteMatcher,
    nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/auth"]);
const isProtectedRoute = createRouteMatcher(["/", "/test"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
    if (isSignInPage(request) && (await convexAuth.isAuthenticated())) {
        return nextjsMiddlewareRedirect(request, "/");
    }
    if (isProtectedRoute(request) && !(await convexAuth.isAuthenticated())) {
        return nextjsMiddlewareRedirect(request, "/auth");
    }
});

export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
