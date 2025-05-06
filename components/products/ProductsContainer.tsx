import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const serachTerm = search ? `&search=${search}` : "";
  if (totalProducts === 0) {
    return (
      <h5 className="text-2xl mt-16">
        Sorry, no products matched your search...
      </h5>
    );
  }
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} produsc{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
            >
              <Link href={`/products?layout=grid${serachTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
            >
              <Link href={`/products?layout=list${serachTerm}`}>
                {" "}
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* PRODUCTS */}
      <div>
        {layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
