import fs from "fs";
import { ServerComponent2 } from "./server.component2";
import { ClientComponent1 } from "./client.component1";

export const ServerComponent1 = () => {
    fs.readFileSync("src/components/server.component1.tsx", "utf-8");
    return (
        <>
            <h1>Server Component 1</h1>
            {/* <ClientComponent1/> */}
            <ServerComponent2 />
        </>
    )
}