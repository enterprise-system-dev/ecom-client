import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {CookieManagerService} from "../services/coockie/cookie-manager.service";

export const httpmanagerInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieService = inject(CookieManagerService);
  let router = inject(Router);
  const token = cookieService.getToken();
  req = req.clone({
    headers: req.headers.set('Authorization', token),
  });

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error?.status == 413) {
        alert("Your file is too large please select an another file");
      }
      console.log(error)
      let code = error?.error?.code;
      let message = error?.error?.message;
      if (req.url.includes('/signup')) {
        if (code == 409) {
          alert(message);
        }
      }
      if (req.url.includes('/forgot-password-request-code')) {
        if (code == 404) {
          alert(message);
        }
      }

      if (code == 409) {
        alert(message);
      }


      if (code == 500) {
        alert('Something went wrong, please try again later!');
      }
      if (code == 401) {
        cookieService.logout();
        router.navigateByUrl('/security/login');
      }
      if (error?.status == 401) {
        cookieService.logout();
        router.navigateByUrl('/security/login');
      }
      return throwError(() => error);
    }),
  );
};
