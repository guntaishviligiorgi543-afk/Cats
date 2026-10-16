import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Allcats } from './components/allcats/allcats';
import { Error } from './components/error/error';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home, title: 'Home | Cats' },
  { path: 'cats', component: Allcats, title: 'All Cats | Cats' },
  { path: 'cart', component: Cart, title: 'Cart | Cats' },
  { path: '**', component: Error, title: 'Error | Cats' },
];
