import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SucursalModel } from '../models/sucursal.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  url = 'http://localhost:3000';
  entity = 'sucursales';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
      this.token = seguridadService.getToken();
  }

  list(): Observable<SucursalModel[]>{
    return this.http.get<SucursalModel[]>(`${this.url}/${this.entity}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  create(param: SucursalModel):Observable<SucursalModel>{
    return this.http.post<SucursalModel>(`${this.url}/${this.entity}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


  update(param: SucursalModel, id:string):Observable<SucursalModel>{
    return this.http.put<SucursalModel>(`${this.url}/${this.entity}/${id}`, param,{
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

  get(id:String):Observable<SucursalModel>{
    return this.http.get(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
