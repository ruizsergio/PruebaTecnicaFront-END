import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs"
import { Crud } from '../models/crud';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
       public url : string
  constructor( private http:HttpClient) {
     this.url = "http://localhost:2000/api/v1/"

   }
   hola(){
    return "saludo"
  }
    getResquest():Observable<any>{
    return this.http.get(this.url)
    
  }
   getIdResquest(id):Observable<any>{
    return this.http.get(this.url+id)
    
  }
 
   postResquest(date):Observable<any>{
     return this.http.post(this.url,date)
   }

  putResquest(id,data:Crud){
    return this.http.put(this.url+id,data)
   }

   deleteResquest(_id):Observable<any>{
  
     return this.http.delete(this.url+_id)
   }
}
