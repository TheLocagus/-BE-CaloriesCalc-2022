import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductInterfaceResponse } from '../types';

@Injectable()
export class ProductService {
  async getAllProducts(): Promise<ProductInterfaceResponse> {
    try {
      const products = await Product.find();
      return {
        products,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  }
}
