import db from "@/utils/db";

export const featuredProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({search = ''}:{search:string}) => {
  const products = await db.product.findMany({
    where:{
      OR:[
        {name: {contains: search , mode: 'insensitive'}},
        {company: {contains: search , mode: 'insensitive'}}
      ]
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
