import Link from "next/link"
import Image from "next/image";
import { TOP_NAVIGATION_LINKS } from "@/constants"
import Button from "./Button"


const Navbar = () => {
    // Add logo here
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            UFGP
        </Link>
            <div className="grid justify-items-stretch">
                <ul className="h-full gap-12 flex justify-self-center">
                    {TOP_NAVIGATION_LINKS.map((link) => (
                        <Link href={link.href} key={link.key}
                        className="regular-16 text-blue-900 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        <div className="lg:flexCenter hidden"> 
        </div>
    </nav>
  )
}

export default Navbar