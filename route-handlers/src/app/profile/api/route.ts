import { NextRequest } from "next/server";
import { headers } from "next/headers";


export async function GET(req: NextRequest){
    // const requestHeaders = new Headers(req.headers);
    // console.log("Authorization:", requestHeaders.get("authorization"));

    const allHeaders = await headers();
    console.log("Headers list", allHeaders.get("authorization"));
    return new Response("Profile API data");
}
