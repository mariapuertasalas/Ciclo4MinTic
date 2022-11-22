import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanModel } from '../models/plan.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'http://localhost:3000';
  entity = 'planes';
  token: String = '';

  constructor(private http:HttpClient, private seguridadService:SeguridadService) {
      this.token = seguridadService.getToken();
  }

  list(): Observable<PlanModel[]>{
    return this.http.get<PlanModel[]>(`${this.url}/${this.entity}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  create(param: PlanModel):Observable<PlanModel>{
    return this.http.post<PlanModel>(`${this.url}/${this.entity}`, param,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }


  update(param: PlanModel, id:string):Observable<PlanModel>{
    return this.http.put<PlanModel>(`${this.url}/${this.entity}/${id}`, param,{
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

  get(id:String):Observable<PlanModel>{
    return this.http.get(`${this.url}/${this.entity}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
