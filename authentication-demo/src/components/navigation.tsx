


import {SignInButton, SignOutButton} from "@clerk/nextjs"
export const Navigation = () => {
    return(
        <nav className="bg-background border-b border-foreground/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0">
                        <h1 className="text-xl font-semibold text-foreground">Next.Js App</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                            <SignInButton mode="modal"/>
                            
                        </div>
                        <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                            <SignOutButton />
                        </div>
                     </div>
                </div>
            </div>
        </nav>
    )
}