import { NextResponse } from 'next/server';

export function middleware(req) {
  const authHeader = req.headers.get('authorization');

  // Yahan apna username aur password set karein
  const USERNAME = 'manish';
  const PASSWORD = 'manisha123';

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!authHeader) {
      return new NextResponse('Auth Required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
      });
    }

    const auth = authHeader.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    if (user === USERNAME && pwd === PASSWORD) {
      return NextResponse.next();
    }

    return new NextResponse('Galat Password!', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }
}
