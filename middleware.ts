// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('authToken'); // Replace with your auth logic

//   const protectedRoutes = ['/login']; // Define routes that don’t need authentication
//   const currentPath = request.nextUrl.pathname;

//   // If the user is NOT authenticated and is trying to access any protected route
//   if (!token && !protectedRoutes.includes(currentPath)) {
//     const redirectUrl = new URL('/login', request.url);
//     redirectUrl.searchParams.set('redirect', currentPath); // Preserve the intended route
//     return NextResponse.redirect(redirectUrl); // Redirect to login with `redirect` query
//   }

//   return NextResponse.next(); // Allow the request if authorized
// }
