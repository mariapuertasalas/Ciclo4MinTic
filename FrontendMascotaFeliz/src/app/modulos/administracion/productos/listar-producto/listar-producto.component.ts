import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
declare var $: any;

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  lista: ProductoModel[] = [];

  constructor(private ProductoService: ProductoService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
      this.ProductoService.list().subscribe((datos: ProductoModel[])=>{
          this.lista = datos;
      });
  }


  getById(id:any){
      this.ProductoService.get(id.toString()).subscribe((datos: ProductoModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_nombre').val(datos.nombre);
          $('#txt_descripcion').val(datos.descripcion);
          $('#txt_precio').val(datos.precio);
          $('#lst_tipo').val(datos.tipo);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.ProductoService.delete(id).subscribe((datos: ProductoModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }

}
