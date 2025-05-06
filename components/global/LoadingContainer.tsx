import LoadingProductCard from "./LoadingProductCard";
import SectionTitle from "./SectionTitle";

function LoadingContainer() {
  return (
    <div className="mt-24">
      <SectionTitle text="Featured produtcs" />
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </div>
    </div>
  );
}
export default LoadingContainer;
