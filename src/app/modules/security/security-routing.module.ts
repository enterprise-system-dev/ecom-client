import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecurityContextComponent} from "./components/security-context/security-context.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [
  {path: '', redirectTo: '/security/process/login', pathMatch: 'full'},
  {
    path: 'process', component: SecurityContextComponent, children: [
      {path: '', redirectTo: '/security/process/login', pathMatch: 'full'},
      {path:'login', component:LoginComponent},
      {path:'signup', component:SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
