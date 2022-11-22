import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'cedula':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'telefono':[''],
    'correo':['', [Validators.required]]
});

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  store(){
    let registro = new UsuarioModel();
    registro.cedula = $('#txt_cedula').val();
    registro.nombre = $('#txt_nombre').val();
    registro.apellido = $('#txt_apellido').val();
    registro.telefono = $('#txt_telefono').val();
    registro.correo = $('#txt_correo').val();
    registro.rol = 'Cliente';
    this.usuarioService.create(registro).subscribe((datos: UsuarioModel)=>{
      alert('¡Registro realizado exitosamente!');
      location.reload();
    },(error:any)=>{
      alert('¡Error al intentar registrar, verifique la información proporcionada!');
    });
  }

}
