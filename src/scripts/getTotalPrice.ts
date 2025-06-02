import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const getTotalPrice = async (): Promise<string> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const prices: number[] = products.map((product) => Number(product.price));

    const totalPrice: string = prices
      .reduce((acc, price) => acc + price, 0)
      .toFixed(2);
    console.log(`Total price of the products: ${totalPrice}$`);

    return totalPrice;
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : String(error));
    return '0';
  }
};

getTotalPrice();
