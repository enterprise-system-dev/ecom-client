import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../../services/products/products.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute) {

  }
  product: any;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(resp=>{
      let x = resp.get('id');

      this.productService.loadById(x).subscribe(resp=>{
        this.product = resp.data;
      })
    })

  }


  placeOrder() {

  }
}
