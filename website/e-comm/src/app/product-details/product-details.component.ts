import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{
  productId: number | null = null;

  constructor(private route: ActivatedRoute, private reroute: Router){}

  ngOnInit(): void {
      const prodid = this.route.snapshot.paramMap.get('id');

      if(prodid !== null){
        this.productId = +prodid;
      }else{
        this.reroute.navigate(['/'])
      }
  }
}
