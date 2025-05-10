import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddtoCart from "@/components/single-product/AddtoCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await fetchSingleProduct(productId);
  const { name, company, price, image, description } = product;
  const dollarAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
      {/* PRODUCT INFO SECOND COL */}
      <div>
        <div className="flex gap-x-8 items-center">
          <h1 className="capitalize text-3xl font-bold">{name}</h1>
          <FavoriteToggleButton productId={productId} />
        </div>
        <ProductRating productId={productId} />
        <h4 className="text-xl mt-2">{company}</h4>
        <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
          {dollarAmount}
        </p>
        <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        <AddtoCart productId={productId} />
      </div>
    </section>
  );
}
export default SingleProductPage;
