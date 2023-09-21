import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser'

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
  product: any;
  inCart: boolean | false = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Porduct details')
  }

  addToCart() : void{
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([{ title: this.product.cardTitle, quantity: 1 }]))
      this.router.navigate(['/'])
    }else{
      var temp = JSON.parse(localStorage['cart'])
      temp.push({ title: this.product.cardTitle, quantity: 1 })
      localStorage.setItem('cart', JSON.stringify(temp))
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
  
    if (productId !== null) {
      this.productsService.getProducts().subscribe((products) => {
        this.products = products;
        var val = false;

        this.products.forEach(element => {
          if (element.cardTitle == productId){
            val = !val
            this.product = element
          }
        });

        if(val){
          const id = +productId;
          if(localStorage.getItem('cart')){
            JSON.parse(localStorage['cart']).forEach((element: any ) => {
              if(element.title == this.product?.cardTitle){
                this.inCart = true;
              }
            });
          }
        }else{
          this.router.navigate(['/'])
        }
      });
    }else{
      this.router.navigate(['/'])
    }
  }
}
