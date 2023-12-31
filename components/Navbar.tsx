import Link from "next/link"
import { TOP_NAVIGATION_LINKS } from "@/constants"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Navbar = () => {
    // Add logo here
  return (
    <div className="grid justify-items-stretch">
        <nav className="flex space-x-10 flexBetween max-container justify-self-center padding-container relative z-30 py-5">
            <Link href="/" className="pt-2 pr-10" >
                UFGP
            </Link>
                    <ul className="h-full gap-12 flex justify-self-center pt-2">
                        {TOP_NAVIGATION_LINKS.map((link) => (
                            link.main == true && (
                                <Link href={link.href} key={link.key}
                                className="regular-16 text-blue-900 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold">
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </ul>
               
            {/* should be the logging icon but when logged in it should show the avatar */}
            <DropdownMenu>
            <DropdownMenuTrigger>
            <a className=" lg:flexCenter justify-self-end"> 
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </a>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="bold">Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    </div>
  )
}

export default Navbar