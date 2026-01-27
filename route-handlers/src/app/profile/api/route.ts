import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";


export async function GET(req: NextRequest){
    // const requestHeaders = new Headers(req.headers);
    // console.log("Authorization:", requestHeaders.get("authorization"));

    const allHeaders = await headers();
    console.log("Headers list", allHeaders.get("authorization"));

    const theme = req.cookies.get("theme")
    console.log("Theme Cookie:", theme);

    const cookieStore = await cookies()
    console.log("Results per page cookie:", cookieStore.get("results_per_page")?.value ?? "20");


    return new Response("<h1>Profile API Route</h1>", {
        headers:{
            "content-type":"text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}
