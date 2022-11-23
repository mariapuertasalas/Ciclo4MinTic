
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { ContactoModel } from 'src/app/models/contacto.model';
declare var $: any;


@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
      'nombre':['', [Validators.required]],
      'apellido':['', [Validators.required]],
      'correo':['', [Validators.required]],
      'telefono':['', [Validators.required]],
      'asunto':['', [Validators.required]],
      'comentarios':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private contactoService: ContactoService) { }

  ngOnInit(): void {
  }


  store(){
    let registro = new ContactoModel();
    registro.nombre = $('#txt_nombre').val();
    registro.apellido = $('#txt_apellido').val();
    registro.correo = $('#txt_correo').val();
    registro.telefono = $('#txt_telefono').val();
    registro.asunto = $('#txt_asunto').val();
    registro.comentarios = $('#txt_comentarios').val();
    this.contactoService.create(registro).subscribe((datos: ContactoModel)=>{
      alert('¡Registro realizado exitosamente!');
      location.reload();
    },(error:any)=>{
      alert('¡Error al intentar registrar, verifique la información proporcionada!');
    });
  }



}
