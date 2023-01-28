export interface ProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string | number;
  createdAt: string;
  updatedAt: string;
}

export interface IshooppingCart extends Product {
  quantity: number;
}
