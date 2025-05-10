import { Skeleton } from "@/components/ui/skeleton";

function SingleProductSkeleton() {
  return (
    <section>
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
      
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE SKELETON */}
        <div className="relative h-96 w-full">
          <Skeleton className="h-full w-full rounded-md" />
        </div>
        
        {/* PRODUCT INFO SKELETON */}
        <div>
          <div className="flex gap-x-8 items-center">
            <Skeleton className="h-8 w-64" /> {/* Product name */}
            <Skeleton className="h-8 w-8 rounded-full" /> {/* Favorite button */}
          </div>
          
          {/* Rating skeleton */}
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4" />
            ))}
            <Skeleton className="h-4 w-16 ml-2" />
          </div>
          
          {/* Company name */}
          <Skeleton className="h-6 w-32 mt-2" />
          
          {/* Price */}
          <Skeleton className="h-8 w-24 mt-3 rounded-md" />
          
          {/* Description - multiple lines */}
          <div className="mt-6 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          
          {/* Add to cart button */}
          <Skeleton className="h-10 w-32 mt-6 rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default SingleProductSkeleton;