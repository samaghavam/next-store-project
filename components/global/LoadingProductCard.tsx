import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingProductCard() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full"/>
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/4 mt-4" />
      </CardContent>
    </Card>
  );
}
export default LoadingProductCard;
