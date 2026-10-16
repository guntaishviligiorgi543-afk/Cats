import { Component } from '@angular/core';
import { CartCat, CartItem, CartStore } from '../cart/cart-store';

@Component({
  imports: [],
  selector: 'app-allcats',
  styleUrl: './allcats.css',
  templateUrl: './allcats.html',
})
export class Allcats {
  readonly cart: CartItem[];

  constructor(private readonly cartStore: CartStore) {
    this.cart = cartStore.items;
  }

  readonly cats: CartCat[] = [
    {
      id: 1,
      stock: 8,
      price: 1200,
      name: 'Lion',
      weight: 190,
      color: 'Golden tan',
      origin: 'Sub-Saharan Africa',
      image:
        'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 2,
      stock: 0,
      price: 1800,
      name: 'Tiger',
      weight: 220,
      color: 'Orange with black stripes',
      origin: 'Asia',
      image:
        'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      stock: 14,
      price: 950,
      name: 'Leopard',
      weight: 60,
      color: 'Golden with rosettes',
      origin: 'Africa and Asia',
      image:
        'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 4,
      stock: 3,
      price: 1100,
      name: 'Jaguar',
      weight: 90,
      color: 'Golden with rosettes',
      origin: 'Central and South America',
      image:
        'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 5,
      stock: 0,
      price: 850,
      name: 'Cheetah',
      weight: 50,
      color: 'Golden with black spots',
      origin: 'Africa',
      image:
        'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 6,
      stock: 6,
      price: 1300,
      name: 'Snow Leopard',
      weight: 45,
      color: 'Pale gray with dark rosettes',
      origin: 'Central Asian mountains',
      image:
        'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 7,
      stock: 0,
      price: 900,
      name: 'Cougar',
      weight: 65,
      color: 'Tawny brown',
      origin: 'The Americas',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 8,
      stock: 11,
      price: 780,
      name: 'Clouded Leopard',
      weight: 20,
      color: 'Gray-brown with cloud-shaped markings',
      origin: 'Southeast Asia',
      image:
        'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 9,
      stock: 2,
      price: 700,
      name: 'Eurasian Lynx',
      weight: 24,
      color: 'Gray-brown spotted coat',
      origin: 'Europe and Asia',
      image:
        'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 10,
      stock: 5,
      price: 650,
      name: 'Serval',
      weight: 12,
      color: 'Golden with black spots',
      origin: 'Sub-Saharan Africa',
      image:
        'https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?auto=format&fit=crop&w=900&q=80',
    },
  ];

  cartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  addtoCart(id: number): void {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat || cat.stock < 1) return;

    const item = this.cart.find((item) => item.cat.id === id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cart.push({ cat, quantity: 1 });
    }
    cat.stock -= 1;
  }

  increaseQuantity(item: CartItem): void {
    if (item.cat.stock < 1) return;
    item.quantity += 1;
    item.cat.stock -= 1;
  }

  decreaseQuantity(item: CartItem): void {
    item.quantity -= 1;
    item.cat.stock += 1;
    if (item.quantity === 0) this.removeItem(item);
  }

  removeItem(item: CartItem): void {
    item.cat.stock += item.quantity;
    this.cart.splice(this.cart.indexOf(item), 1);
  }

  emptyCart(): void {
    for (const item of this.cart) item.cat.stock += item.quantity;
    this.cart.length = 0;
  }
}
