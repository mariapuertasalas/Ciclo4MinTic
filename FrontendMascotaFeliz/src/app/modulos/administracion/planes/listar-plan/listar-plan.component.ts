import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanService } from 'src/app/services/plan.service';
declare var $: any;

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {

  lista: PlanModel[] = [];

  constructor(private PlanService: PlanService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
      this.PlanService.list().subscribe((datos: PlanModel[])=>{
          this.lista = datos;
      });
  }


  getById(id:any){
      this.PlanService.get(id.toString()).subscribe((datos: PlanModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_nombre').val(datos.nombre);
          $('#txt_descripcion').val(datos.descripcion);
          $('#txt_precio').val(datos.precio);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.PlanService.delete(id).subscribe((datos: PlanModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }

}
