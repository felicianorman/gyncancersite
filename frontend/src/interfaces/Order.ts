import { Product } from './Product';

export interface Order {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  products: Product[];
}
