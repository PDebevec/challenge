import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit{
  produts: Product[] = []

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
      this.productService.getProducts().subscribe((produts) => {
        this.produts = produts
      })
  }
}
