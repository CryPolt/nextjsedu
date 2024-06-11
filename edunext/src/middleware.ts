import type { NextRequest} from "next/server";
import { NextResponse} from "next/server";
import {cookies, headers} from "next/headers";

export function middleware(request: NextRequest) {



/*    cookies().get('token')*/

/*    const isAbout = request.url.includes('about')

    if (isAbout) {
        if (true) return NextResponse.next()
        else return NextResponse.redirect(new URL('/home', request.url))
    }
    console.log(isAbout)*/

    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: ['/about/:path', '/dashboard/:path'],
}