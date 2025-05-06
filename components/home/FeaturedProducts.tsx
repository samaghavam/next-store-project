import { featuredProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await featuredProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className="pt-20">
      <SectionTitle text="Featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
