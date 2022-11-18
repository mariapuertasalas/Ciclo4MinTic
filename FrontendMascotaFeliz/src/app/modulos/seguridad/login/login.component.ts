import { SeguridadService } from './../../../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
      'usuario': ['', [Validators.required, Validators.email]],
      'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private serviceSeguridad: SeguridadService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();

    this.serviceSeguridad.loginUser(usuario, claveCifrada).subscribe(
    (datos:any)=>{
      this.serviceSeguridad.sessionStorage(datos);
      this.router.navigate(['/usuarios-page']);
    },
    (error:any)=>{
      alert('Datos Invalidos');
      console.log(error);
    });

  }

}
