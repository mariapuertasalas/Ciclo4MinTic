import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000/';

  userDataInSession = new BehaviorSubject<loginModel>(new loginModel());

  constructor(private http:HttpClient) {
    this.verifyCurrentSession();
  }

  loginUser(usuario: string, clave:string): Observable<loginModel>{
    return this.http.post<loginModel>(`${this.url}identificarUsuario`, {
      user: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    });
  }


  sessionStorage(datos:loginModel){
    datos.isIdentified = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSession", stringDatos);
    this.refreshSessionData(datos);
  }

  getDataFromSession(){
    let datosString = localStorage.getItem("datosSession");
    if(datosString){
      return JSON.parse(datosString);
    }else{
      return '';
    }
  }

  deleteDataFromSession(){
    localStorage.removeItem("datosSession");
    this.refreshSessionData(new loginModel());
  }

  sessionHasStarted(){
    return localStorage.getItem("datosSession");
  }

  verifyCurrentSession(){
    let datos = this.getDataFromSession();
    if(datos){
      this.refreshSessionData(datos);
    }
  }

  refreshSessionData(datos: loginModel){
    this.userDataInSession.next(datos);
  }

  getUserDataInSession(){
    return this.userDataInSession.asObservable();
  }

  getToken(){
    let userSession = this.getDataFromSession();
    return userSession.tk;
  }

}
