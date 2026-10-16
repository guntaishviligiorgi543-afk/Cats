import { Component } from '@angular/core';
import { CartItem, CartStore } from './cart-store';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  readonly cartItems: CartItem[];

  constructor(private readonly cartStore: CartStore) {
    this.cartItems = cartStore.items;
  }

  totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.cat.price * item.quantity, 0);
  }

  increaseQuantity(item: CartItem): void {
    if (item.cat.stock < 1) return;
    item.quantity += 1;
    item.cat.stock -= 1;
  }

  decreaseQuantity(item: CartItem): void {
    item.quantity -= 1;
    item.cat.stock += 1;
    if (item.quantity === 0) this.removeFromCart(item);
  }

  removeFromCart(item: CartItem): void {
    item.cat.stock += item.quantity;
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

  emptyCart(): void {
    for (const item of this.cartItems) item.cat.stock += item.quantity;
    this.cartItems.length = 0;
  }
}
