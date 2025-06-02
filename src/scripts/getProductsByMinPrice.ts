import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';
import fs from 'node:fs/promises';

const getProductsByMinPrice = async (price: number): Promise<Product[]> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');

    const products: Product[] = JSON.parse(data);

    const productsByMinPrice: Product[] = products.filter(
      (product) => Number(product.price) >= price,
    );

    console.log(`Products with a price less than or equal to ${price}:`);
    console.table(productsByMinPrice);

    return productsByMinPrice;
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : String(error));
    return [];
  }
};

getProductsByMinPrice(13.4);
