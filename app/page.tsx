import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
  const products = await FeaturedProducts();
  console.log(products);
  
  return (
    <>
      <Hero />
      <FeaturedProducts />


    </>
  );
}
