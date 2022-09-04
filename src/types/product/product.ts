export interface ProductInterface {
  id: string;
  name: string;
  proteins: number;
  carbohydrates: number;
  fats: number;
  calories: number;
  amount: number;
}

export type ProductInterfaceResponse =
  | {
      products: ProductInterface[];
      success: true;
    }
  | {
      success: false;
    };
