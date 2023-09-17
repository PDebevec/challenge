import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './product-list/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '', component: ProductlistComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}