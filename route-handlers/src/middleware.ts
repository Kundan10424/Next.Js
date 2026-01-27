import { NextRequest, NextResponse } from "next/server";



export function middleware(req: NextRequest){
    // return NextResponse.redirect(new URL("/", req.url));

    // if(req.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/dashboard", req.url));
    // }

    const response = NextResponse.next();
    const themepreference = req.cookies.get("theme");

    if(!themepreference){
        response.cookies.set("theme", "dark");
    }

    response.headers.set("Custom-Header", "custom value");

    return response;
} 

export const config = {
    // matcher: "/profile"
}

