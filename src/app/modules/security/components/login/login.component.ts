import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {SecuritryService} from "../../../../services/security/securitry.service";
import {CookieManagerService} from "../../../../services/coockie/cookie-manager.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private cookieManager:CookieManagerService,
    private securityService:SecuritryService, private router:Router) {
  }

  form= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
  })

  login() {
    this.securityService.login(
      this.form.value.email!,
      this.form.value.password!
    ).subscribe(resp=>{
      this.cookieManager.setToken(resp?.data?.access_token);
      this.router.navigateByUrl('/home/process/products');
    },error=>{
      console.log(error)
    })
  }
}
