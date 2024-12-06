import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  loadAll():Observable<any>{
    return this.http.get(this.url+'product-service/api/v1/products/search-products?searchText=&page=0&size=10');
  }
  loadById(id:any):Observable<any>{
    return this.http.get(this.url+'product-service/api/v1/products/find-by-id/'+id);
  }
}
