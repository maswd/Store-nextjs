"use client"

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null
    }

    return (
        <div className="mr-auto flex items-center gap-x-4 ">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
                <ShoppingBag size={20} color="white" />
            </Button>
        </div>
    );
}

export default NavbarActions;