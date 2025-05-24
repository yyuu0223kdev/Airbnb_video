'use client';


import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UseMenu from "./UseMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps{
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="
                py-4                
            "
            >
                <Container>
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    "
                    >
                        <Logo />
                        <Search />
                        <UseMenu  currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;