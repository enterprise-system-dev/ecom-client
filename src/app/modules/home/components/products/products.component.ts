import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductsService} from "../../../../services/products/products.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(private productService:ProductsService) {
  }
  products: any[] =[];
  ngOnInit(): void {
      this.productService.loadAll().subscribe(resp=>{
        this.products = resp.data.dataList;
      })
  }


  addToCart(productId: any) {

  }
}
