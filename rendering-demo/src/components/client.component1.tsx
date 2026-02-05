"use client"

import { useState } from "react";
import { ClientComponent2 } from "./client.component2";
// import { ServerComponent1 } from "./server.component1";

export const ClientComponent1 = ({children}: {children: React.ReactNode}) => {
    const[name, setName] = useState("Client Component 1");

    return(
        <>
            <h1>Client Component 1</h1>
                {children}
            {/* <ServerComponent1/>  give an error because of on client side ther is no fs module
             or a server component can't be interleaved into a client component    */}
            <ClientComponent2/>   
        </>
    )
}