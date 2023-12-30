import Link from "next/link"
import { TOP_NAVIGATION_LINKS } from "@/constants"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const Navbar = () => {
    // Add logo here
  return (
    <div className="grid justify-items-stretch">
        <nav className="flex space-x-10 flexBetween max-container justify-self-center padding-container relative z-30 py-5">
            <Link href="/" >
                UFGP
            </Link>
                    <ul className="h-full gap-12 flex justify-self-center">
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
            <div className=" lg:flexCenter justify-self-end"> 
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    </div>
  )
}

export default Navbar