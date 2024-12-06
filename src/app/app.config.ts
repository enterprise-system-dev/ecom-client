import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {httpmanagerInterceptor} from "./interceptors/httpmanager.interceptor";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(withFetch(),
      withInterceptors([httpmanagerInterceptor])),
    provideAnimationsAsync(),
    provideAnimations(),
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    provideAnimations()]
}
