import { Component } from '@angular/core';
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartitems: any;
  products: Product[] = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(): void{
    this.cartitems = JSON.parse(localStorage['cart'])
    this.productsService.getProducts().subscribe((products) => {
      products.forEach(element => {
        this.cartitems.forEach((item: any) => {
          if(element.cardTitle == item.title){
            this.products.push(element)
          }
        });
      });
    });
  }
}
