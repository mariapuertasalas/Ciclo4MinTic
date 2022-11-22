import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3000';
  entity = 'productos-servicios';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
      this.token = seguridadService.getToken();
  }

  list(): Observable<ProductoModel[]>{
    return this.http.get<ProductoModel[]>(`${this.url}/${this.entity}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  create(param: ProductoModel):Observable<ProductoModel>{
    return this.http.post<ProductoModel>(`${this.url}/${this.entity}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


  update(param: ProductoModel, id:string):Observable<ProductoModel>{
    return this.http.put<ProductoModel>(`${this.url}/${this.entity}/${id}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  delete(id:String):Observable<any>{
    return this.http.delete(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  get(id:String):Observable<ProductoModel>{
    return this.http.get(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
