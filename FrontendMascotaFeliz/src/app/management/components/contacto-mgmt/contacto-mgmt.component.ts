
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { ContactoModel } from 'src/app/models/contacto.model';
declare var $: any;


@Component({
  selector: 'app-contacto-mgmt',
  templateUrl: './contacto-mgmt.component.html',
  styleUrls: ['./contacto-mgmt.component.css']
})
export class ContactoMgmtComponent implements OnInit {

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

  doOperation(){
    let action = $('#hdnAction').val();
    if(action == 'registrar'){
      this.store();
    }else if(action == 'actualizar'){
      this.update();
    }
  }

  markAction(action: string){
    $('#hdnAction').val(action);
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

  update(){
    let id = $('#hdnId').val();
    if(id != ''){
      if (window.confirm("¿Realmente deseas actualizar este registro?")) {
          let registro = new ContactoModel();
          registro.nombre = $('#txt_nombre').val();
          registro.apellido = $('#txt_apellido').val();
          registro.correo = $('#txt_correo').val();
          registro.telefono = $('#txt_telefono').val();
          registro.asunto = $('#txt_asunto').val();
          registro.comentarios = $('#txt_comentarios').val();
          console.log(registro);
          this.contactoService.update(registro, id).subscribe((datos: ContactoModel)=>{
            alert('¡Registro actualizado exitosamente!');
            location.reload();
          },(error:any)=>{
            alert('¡Error al intentar actualizar, verifique la información proporcionada!');
          });
      }
  }else{
    alert('¡Error al intentar actualizar, por favor primero consulte el registro a actualizar!');
  }

  }

}






