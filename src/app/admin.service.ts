import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}
  signin ='http://localhost:3000/admin/admin_login';
  public signIn(email:string,password:string):Observable<any> {
    return this.http.post<any>(this.signin, { email: email,password:password });

  }
  sign ='http://localhost:3000/admin/admin_register';

  public signUp(formData:FormData):Observable<any> {
    return this.http.post<any>(this.sign,formData);

  }
  // addCategory(formData:FormData){
    
  //   return this._category.post(this.add_category,formData);
  // }
}
