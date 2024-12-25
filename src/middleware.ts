import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthenticated = request.cookies.get('signedIn')?.value === 'true';
  if (!isAuthenticated && path !== '/signin') {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
  if (isAuthenticated && path === '/signin') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 