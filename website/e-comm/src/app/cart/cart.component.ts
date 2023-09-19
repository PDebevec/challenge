import { Component } from '@angular/core';
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartitems: any[] = [];
  products: any[] = [];
  cartTotal: number = 0;

  constructor(private productsService: ProductsService){}

  qunatityChange(product: any): void{
    let index = this.cartitems.findIndex((element: any) => {
      return element.title == product[0].cardTitle
    })
    
    this.products[index][1].quantity = product[1].quantity

    localStorage.setItem('cart', JSON.stringify(this.cartitems))

    this.cartTotal = 0
    this.products.forEach(element => {
      this.cartTotal += element[0].listOfPlans[0].price.amount * element[1].quantity / 100
    })
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
            this.products.unshift([element, item])
            this.cartTotal += element.listOfPlans[0].price.amount * item.quantity / 100;
          }
        });
      });
    });
  }
}
