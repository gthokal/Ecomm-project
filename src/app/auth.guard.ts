import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {

  const navRouter = inject(Router);
  const sellerService = inject(SellerService);

  if(localStorage.getItem('seller')){
    return true;
  }

  return sellerService.isSellerLoggedIn;
};
