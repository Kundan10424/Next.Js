import fs from "fs";

export const ServerComponent2 = () => {
    fs.readFileSync("src/components/server.component2.tsx", "utf-8");
    return <h1>Server Component 2</h1>;
}