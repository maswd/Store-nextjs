import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0

const Navbar = async () => {
    const categories = await getCategories()
    return (
        <header className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center" >
                    <Link href="/" className="ml-4 flex  gap-x-5 ">
                        <p className="font-bold text-xl">فروشگاه</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </header>
    );
}

export default Navbar;