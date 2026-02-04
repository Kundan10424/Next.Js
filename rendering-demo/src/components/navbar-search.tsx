"use client" //it will also affect the child component as a client component so we mved it to leaf level
import { useState } from "react"

export const NavSearch = () => {
    console.log('Rendering NavSearch component')
    const [search, setSearch] = useState("")

    return(
        <div>NavSearch Component</div>
    )
}