"use client"

import { useEffect } from "react";


export default function ErrorPage({error}:{error: Error}){
    useEffect(() => {
        console.log(`${error}`)
    }, [error])

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl bg-amber-300 text-black">⚠Error Fetching Users Data</div>
        </div>
    )
}