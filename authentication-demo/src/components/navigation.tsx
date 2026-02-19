


import {
    SignInButton, 
    SignOutButton,
    // UserButton
    SignedIn,
    SignedOut,
    SignUpButton
} from "@clerk/nextjs"
import Link from "next/link"
export const Navigation = () => {
    return(
        <nav className="bg-background border-b border-foreground/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0">
                        <h1 className="text-xl font-semibold text-foreground">NEXT.Js App</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        
                        <SignedOut>
                            <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                                <SignInButton mode="modal"/>                            
                            </div>

                            <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                                <SignUpButton mode="modal"/>                            
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                                <SignOutButton />
                                {/* <UserButton /> */}
                            </div>
                            <div className="bg-white rounded-md text-black font-medium hover:bg-gray-300 hover:scale-105 transition duration-300">
                                {/* <UserButton /> */}
                                <Link href='/user-profile'>Profile</Link>
                            </div>
                        </SignedIn>
                     </div>
                </div>
            </div>
        </nav>
    )
}