import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MascotaModel } from '../models/mascota.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url = 'http://localhost:3000';
  entity = 'mascotas';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
      this.token = seguridadService.getToken();
  }

  list(): Observable<MascotaModel[]>{
    return this.http.get<MascotaModel[]>(`${this.url}/${this.entity}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  create(param: MascotaModel):Observable<MascotaModel>{
    return this.http.post<MascotaModel>(`${this.url}/${this.entity}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


  update(param: MascotaModel):Observable<MascotaModel>{
    return this.http.put<MascotaModel>(`${this.url}/${this.entity}`, param,{
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

  get(id:String):Observable<MascotaModel>{
    return this.http.get(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
