import { loginModel } from './../../../models/login.model';
import { SeguridadService } from './../../../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-menu-mgmt',
  templateUrl: './menu-mgmt.component.html',
  styleUrls: ['./menu-mgmt.component.css']
})
export class MenuMgmtComponent implements OnInit {

  sessionWasStarted: boolean = false;
  roleInSession: String = "";

  subs: Subscription = new Subscription();

  constructor(private seguridadService: SeguridadService,
          private router: Router) { }

  ngOnInit(): void {
     this.subs = this.seguridadService.getUserDataInSession().subscribe(
      (datos:loginModel)=>{
        this.sessionWasStarted = datos.isIdentified;
        this.roleInSession = datos.datos?.rol != undefined?datos.datos?.rol.toUpperCase():'';
      }
    );
  }

}
