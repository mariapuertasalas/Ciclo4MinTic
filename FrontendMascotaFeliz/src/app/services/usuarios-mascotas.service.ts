import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MascotaModel } from '../models/mascota.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMascotaService {

  url = 'http://localhost:3000';
  entity_mascotas = 'mascotas';
  entity_usuarios = 'usuarios';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
      this.token = seguridadService.getToken();
  }

  list(id:String): Observable<MascotaModel[]>{
    return this.http.get<MascotaModel[]>(`${this.url}/${this.entity_usuarios}/${id}/${this.entity_mascotas}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

}
