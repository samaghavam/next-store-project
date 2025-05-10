import { Button } from "@/components/ui/button";
function AddtoCart({ productId }: { productId: string }) {
  return (
    <Button className="capitilize mt-8" size="lg">
      add to cart
    </Button>
  );
}
export default AddtoCart;
