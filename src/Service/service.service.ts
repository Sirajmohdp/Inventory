import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppConfig } from '../Class/AppConfig';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  AppConfig = new AppConfig()

  
  constructor(private http:HttpClient) { }




  GetAllProducts(){
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options ={ headers: headers };
    return this.http.get(this.AppConfig.link+"/Product",options).pipe<any>(map(res=>res));
  } 


  DeleteProd(Id:number){
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options ={ headers: headers };
    return this.http.get(this.AppConfig.link+"/Product?ItemId="+Id,options).pipe<any>(map(res=>res));
  } 

  AddProduct(prod:any){
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options ={ headers: headers };
    return this.http.post(this.AppConfig.link+"/Product",prod,options).pipe<any>(map(res=>res));
  } 

  Login(UserName:any,PassWord:any){
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options ={ headers: headers };
    return this.http.get(this.AppConfig.link+"/Login?UserName="+UserName+'&PassWord='+PassWord,options).pipe<any>(map(res=>res));
    
  } 

  // (prod:any){
  //   return this.http.get('https://fakestoreapi.com/products/category/'+prod);
  // }
}
