import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';
import fs from 'node:fs/promises';

const getProductsByMinPrice = async (price: string) => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');

    const products: Product[] = JSON.parse(data);

    const productsByMinPrice: Product[] = products.filter(
      (product) => parseFloat(product.price) >= parseFloat(price),
    );

    console.log(`Products with a price less than or equal to ${price}:`);
    console.table(productsByMinPrice);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
};

getProductsByMinPrice('25');
