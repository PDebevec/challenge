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

  qunatityChange(productId: string): void{

  }

  removeProduct(productId: string): void{
    this.cartitems.splice(
      this.cartitems.findIndex((element: any) => {
        return element.title == productId
    }), 1)
    localStorage.setItem('cart', JSON.stringify(this.cartitems))
    window.location.reload()
  }

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
