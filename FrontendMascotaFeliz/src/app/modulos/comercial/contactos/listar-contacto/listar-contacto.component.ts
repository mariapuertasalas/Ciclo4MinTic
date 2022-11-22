import { Component, OnInit } from '@angular/core';
import { ContactoModel } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
declare var $: any;

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit {


  lista: ContactoModel[] = [];

  constructor(private ContactoService: ContactoService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
      this.ContactoService.list().subscribe((datos: ContactoModel[])=>{
          this.lista = datos;
      });
  }


  getById(id:any){
      this.ContactoService.get(id.toString()).subscribe((datos: ContactoModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_nombre').val(datos.nombre);
          $('#txt_apellido').val(datos.apellido);
          $('#txt_correo').val(datos.correo);
          $('#txt_telefono').val(datos.telefono);
          $('#txt_asunto').val(datos.asunto);
          $('#txt_comentarios').val(datos.comentarios);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.ContactoService.delete(id).subscribe((datos: ContactoModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }

}
