import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent{
  products: Product[] = [];
  product: Product | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  addToCart() : void{
    if(localStorage.getItem('cart')){
      var cart = JSON.parse(localStorage['cart'])
      //dodamo notr v cart
      //ne vem glede ya disable button
    }else{
      localStorage.setItem('cart', JSON.stringify([{title: this.product?.cardTitle, quantity: 1}]))
    }
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
  
    if (productId !== null) {
      this.productsService.getProducts().subscribe((products) => {
        this.products = products;
        var val = false;
        this.products.forEach(element => {
          if (element.cardTitle.at(-1) == productId){
            val = !val;
            this.product = element;
          }
        });
        if(val){
          const id = +productId;
        }else{
          this.router.navigate(['/'])
        }
      });
    }else{
      this.router.navigate(['/'])
    }
  }
}
