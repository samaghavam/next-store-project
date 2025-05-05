import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return(
    <div>
      <h1 className="font-bold">home page</h1>
      <Button asChild size='lg' variant='outline' className="m-8">
        <Link href='/products'>products</Link>
      </Button>
    </div>
  )} 