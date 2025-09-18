import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./auth/server";


export const middleware = async (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    console.log("Pathname ====>>", pathname)

    const user = await getUser();
    console.log("User in middleware ====>", user);

    const PUBLIC_PATHS = ['/login', '/signup']

    const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
    if(!user && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }else if(user && isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
}


export const config = {
    matcher : [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
}