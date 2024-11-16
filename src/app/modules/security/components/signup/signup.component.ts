import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

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
  form= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required)
  })

  signup() {

  }
}
