import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SecuritryService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + 'user-service/api/v1/users/login', {
        email: email, password: password
      });
  }

  public registerUser(
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ): Observable<any> {
    return this.http.post(this.url + 'user-service/api/v1/users/signup', {
      email: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
  }
}
