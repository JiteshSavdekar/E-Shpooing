import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }
}
