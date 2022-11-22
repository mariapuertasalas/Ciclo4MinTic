import { UsuarioService } from './../../../../services/usuario.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioModel } from '../../../../models/usuario.model';
declare var $: any;

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  lista: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
      this.usuarioService.list().subscribe((datos: UsuarioModel[])=>{
          this.lista = datos;
      });
  }


  getById(id:any){
      this.usuarioService.get(id.toString()).subscribe((datos: UsuarioModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_cedula').val(datos.cedula);
          $('#txt_nombre').val(datos.nombre);
          $('#txt_apellido').val(datos.apellido);
          $('#txt_correo').val(datos.correo);
          $('#txt_telefono').val(datos.telefono);
          $('#lst_rol').val(datos.rol);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.usuarioService.delete(id).subscribe((datos: UsuarioModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }

}
