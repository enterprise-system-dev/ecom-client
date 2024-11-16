import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'/security/process/login', pathMatch:'full'},
  {path:'home', loadChildren:()=> import('./modules/home/home.module')
      .then(e=>e.HomeModule)
  },
  {path:'security', loadChildren:()=> import('./modules/security/security.module')
      .then(e=>e.SecurityModule)
  }
];
