import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService, private router:Router) {

  }

  public setToken(token: string) {
    this.cookieService.set('token', token, 1);
  }

  public tokenIsExists(name: string):boolean {
    return this.cookieService.check(name);
  }
  public getToken():string {
    return this.cookieService.get('token');
  }

  public setPersonalData(data:any){
    this.cookieService.set('data',JSON.stringify(data),1);
  }

  public personalDataIsExists():boolean{
    return this.cookieService.check('data');
  }
  public getPersonalData():string {
    return this.cookieService.get('data');
  }

  public developerIdIsExists():boolean{
    return this.cookieService.check('developerId');
  }
  public getDeveloperId():string {
    return this.cookieService.get('developerId');
  }

  public setStudentId(id:string){
    this.cookieService.set('studentId',id,1);
  }

  public studentIdIsExists():boolean{
    return this.cookieService.check('studentId');
  }
  public getStudentId():string {
    return this.cookieService.get('studentId');
  }

  //----------------------------------

  public setClaimState(){
    this.cookieService.set('claim-state','closed',1);
  }

  public claimStateIsExists():boolean{
    return this.cookieService.check('claim-state');
  }
  public getClaimState():string {
    return this.cookieService.get('claim-state');
  }

  //----------------------------------


  logout(){
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/security/login');
    // setTimeout(()=>{
    //   window.location.reload();
    // },1000);
  }

  public tokenIsExistsWithPromise(name: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const exists = this.cookieService.check(name);
        resolve(exists);
      } catch (error) {
        reject(error);
      }
    });
  }

}
