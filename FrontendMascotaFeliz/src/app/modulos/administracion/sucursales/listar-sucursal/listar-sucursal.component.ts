import { Component, ElementRef, OnInit } from '@angular/core';
import { SucursalModel } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
declare var $: any;

@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {

  lista: SucursalModel[] = [];

  constructor(private SucursalService: SucursalService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
      this.SucursalService.list().subscribe((datos: SucursalModel[])=>{
          this.lista = datos;
      });
  }


  getById(id:any){
      this.SucursalService.get(id.toString()).subscribe((datos: SucursalModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_departamento').val(datos.departamento);
          $('#txt_ciudad').val(datos.ciudad);
          $('#txt_direccion').val(datos.direccion);
          $('#txt_telefono').val(datos.telefono);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.SucursalService.delete(id).subscribe((datos: SucursalModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }
}
