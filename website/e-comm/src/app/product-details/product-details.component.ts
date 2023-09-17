import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  products: Product[] = [];
  product: Product | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
    ) {}

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
