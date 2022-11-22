import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000';
  entity = 'usuarios';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
    
      this.token = seguridadService.getToken();
  }

  list(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.url}/${this.entity}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  create(param: UsuarioModel):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.url}/${this.entity}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


  update(param: UsuarioModel, id:String):Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`${this.url}/${this.entity}/${id}`, param,{
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

  get(id:String):Observable<UsuarioModel>{
    return this.http.get(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

}
