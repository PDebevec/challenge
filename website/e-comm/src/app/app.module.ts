import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './product-list/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductlistComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    ProductlistComponent,
    ProductFilterComponent
  ]
})

export class AppModule { }