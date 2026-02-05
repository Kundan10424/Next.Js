import { ClientComponent1 } from "@/src/components/client.component1";
import { ServerComponent1 } from "@/src/components/server.component1";



export default function InterleavingPage(){
    return(
        <>
            <h1>Interleaving Page</h1>
            
            <ClientComponent1>
                <ServerComponent1 />
            </ClientComponent1>
        </>
    )
}