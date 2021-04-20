import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }


  addBook(user:any){

    return this._http.post<any>("http://localhost:3000/admin/add",user)
    .subscribe((data)=>{
      (console.log(data))
    })
  }

  addAuthor(user:any){
    return this._http.post<any>("http://localhost:3000/addauthor/add",user)
    .subscribe((data)=>{
      (console.log(data))
    })
  }




  signUpUser(user:any){

    return this._http.post<any>("http://localhost:3000signup/adduser",user)
    .subscribe((data)=>{
      (console.log('Success'))
    })
  }

}
