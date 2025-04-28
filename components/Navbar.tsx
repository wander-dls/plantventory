import { Sprout, HomeIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const  Navbar = () => {
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
                    {/* Navbar  */}
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
                    </div>
                </div>
            </div>
         </nav>
   </>
  )
}
export default  Navbar