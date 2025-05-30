import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const getTotalPrice = async (): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const prices: number[] = products.map((product) =>
      parseFloat(product.price),
    );

    const totalPrice: string = prices
      .reduce((acc, price) => acc + price, 0)
      .toFixed(2);
    console.log(`Total price of the products: ${totalPrice}$`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
};

getTotalPrice();
