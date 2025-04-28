import { Sprout, HomeIcon, LogIn, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/ModeToggle"
import { stackServerApp } from "@/stack"
import  {UserButton}  from "@stackframe/stack"
import { getUserDetails } from "@/actions/user.actions"

const  Navbar = async () => {
    const user = await stackServerApp.getUser()
    const app = stackServerApp.urls
    const userProfile = await getUserDetails(user?.id)
  return (
   <>
         <nav className="sticky tpo-0 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider flex gap-1">
                        🌱Plantventory
                        </Link>
                    </div>
                    {/* Navbar buttons */}

                    { userProfile?.name && <span className="text-[14px] text-gray-600 dark:text-gray-300">{`Hello, ${userProfile?.name.split(' ')[0]}`}</span> }
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="flex items-center gap-2" asChild>
                            <Link href="/plants">
                                <Sprout className="h-4 w-4" />
                                <span className="hidden lg:inline">Plants</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-2" asChild>
                            <Link href="/">
                                <HomeIcon className="h-4 w-4" />
                                <span className="hidden lg:inline">Home</span>
                            </Link>
                        </Button>
                        {/* Dark mode toggle */}
                        <ModeToggle />

                        {user ? (
                            <>
                                {/* Sign in button */}
                           <Button variant="ghost" className="flex items-center gap-2" asChild>
                            <Link href={app.signOut}>
                                <LogOut className="h-4 w-4" />
                                <span className="hidden lg:inline">Sign Out</span>
                            </Link>
                        </Button>

                        <UserButton />
                            </>

                        ) : (
                            <>
                                {/* Sign in button */}
                                <Button variant="ghost" className="flex items-center gap-2" asChild>
                                    <Link href={app.signIn}>
                                        <LogIn className="h-4 w-4" />
                                        <span className="hidden lg:inline">Sign In</span>
                                    </Link>
                                </Button>
                            </>
                        )}         
                    </div>
                </div>
            </div>
         </nav>
   </>
  )
}
export default  Navbar