"use client"
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface MainNavProps {
    data: Category[]
}
const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const path = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: path === `/category/${route.id}`
    }))
    return (
        <nav className="">
            {routes.map((route) => (
                <Link className={cn("text-sm mx-3 font-medium transition-colors hover:text-black ", route.active ? "text-black" : "text-neutral-500")} key={route.href} href={route.href} >
                    <> {route.label} </>
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;