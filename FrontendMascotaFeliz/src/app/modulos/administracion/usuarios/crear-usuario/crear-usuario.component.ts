import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
declare var $: any;


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
      'cedula':['', [Validators.required]],
      'nombre':['', [Validators.required]],
      'apellido':['', [Validators.required]],
      'telefono':[''],
      'correo':['', [Validators.required]],
      'rol':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

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
    let registro = new UsuarioModel();
    registro.cedula = $('#txt_cedula').val();
    registro.nombre = $('#txt_nombre').val();
    registro.apellido = $('#txt_apellido').val();
    registro.telefono = $('#txt_telefono').val();
    registro.correo = $('#txt_correo').val();
    registro.rol = $('#txt_rol').val();
    this.usuarioService.create(registro).subscribe((datos: UsuarioModel)=>{
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
          let registro = new UsuarioModel();
          registro.cedula = $('#txt_cedula').val();
          registro.nombre = $('#txt_nombre').val();
          registro.apellido = $('#txt_apellido').val();
          registro.telefono = $('#txt_telefono').val();
          registro.correo = $('#txt_correo').val();
          registro.rol = $('#txt_rol').val();
          console.log(registro);
          this.usuarioService.update(registro, id).subscribe((datos: UsuarioModel)=>{
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
