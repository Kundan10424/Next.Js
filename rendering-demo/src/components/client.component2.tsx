"use client"

import { useState } from "react";

export const ClientComponent2 = () => {
    const[name, setName] = useState("Client Component 2");

    return <h1>client component 2</h1>;
}