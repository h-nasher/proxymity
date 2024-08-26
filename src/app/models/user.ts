import { Address } from './address';

export interface User {
  id: number;
  name: string | null;
  username: string | null;
  email: string | null;
  address: Address | null;
}
