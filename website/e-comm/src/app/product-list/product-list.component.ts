import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface'
import { ProductsService } from '../products.service'
import { MatSliderModule } from '@angular/material/slider'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  standalone: true,
  imports: [
    MatSliderModule,
    CommonModule,
    FormsModule,
  ],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductlistComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  sortOrder = 'asc';

  constructor(private productsService: ProductsService) {}

  applyFiltersAndSort(): void {
    let filteredList = this.products.filter((product) => {
      const meetsSearchCriteria =
        product.cardTitle.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.cardDescription.toLowerCase().includes(this.searchText.toLowerCase());

      const meetsPriceRangeCriteria =
        (this.minPrice === null || product.listOfPlans[0].price.amount/100 >= this.minPrice) &&
        (this.maxPrice === null || product.listOfPlans[0].price.amount/100 <= this.maxPrice);

      return meetsSearchCriteria && meetsPriceRangeCriteria;
    });

    if (this.sortOrder === 'asc') {
      filteredList = filteredList.sort((a, b) => a.cardTitle.localeCompare(b.cardTitle));
    } else if (this.sortOrder === 'desc') {
      filteredList = filteredList.sort((a, b) => b.cardTitle.localeCompare(a.cardTitle));
    }

    this.filteredProducts = filteredList;
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.minPrice = 0
      this.maxPrice = 100
      this.applyFiltersAndSort();
    });
  }
}
