import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
export const revalidate = 0;
const HomePage = async () => {
    const billboards = await getBillboards("b4d2d0d9-bce9-4af1-9d1a-0e2daf36a4fb")
    const products = await getProducts({ isFeatured: true })
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="محصولات برتر" items={products} />
            </div>
        </Container>
    );
}

export default HomePage;