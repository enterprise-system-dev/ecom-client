import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {SecuritryService} from "../../../../services/security/securitry.service";

@Component({
  selector: 'app-signup',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private securityService:SecuritryService, private router:Router) {
  }
  form= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required)
  })

  signup() {
    this.securityService.registerUser(
      this.form.value.email!,
      this.form.value.fName!,
      this.form.value.lName!,
      this.form.value.password!
    ).subscribe(res=>{
      this.router.navigateByUrl('/security/process/login')
    }, error=>{
      console.log(error)
    })
  }
}
