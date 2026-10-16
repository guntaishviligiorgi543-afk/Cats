import { Injectable } from '@angular/core';

export interface CartCat {
  id: number;
  stock: number;
  name: string;
  weight: number;
  color: string;
  origin: string;
  image: string;
  price: number;
}

export interface CartItem {
  cat: CartCat;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartStore {
  readonly items: CartItem[] = [];
}
