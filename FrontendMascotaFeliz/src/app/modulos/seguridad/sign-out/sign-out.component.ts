import { SeguridadService } from './../../../services/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.seguridadService.deleteDataFromSession();
    this.router.navigate(['/home']);
  }

}
