import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanService } from 'src/app/services/plan.service';
declare var $: any;

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'precio':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    
});

constructor(private fb: FormBuilder, private planService: PlanService) { }

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
  let registro = new PlanModel();
  registro.nombre = $('#txt_nombre').val();
  registro.precio = $('#txt_precio').val();
  registro.descripcion = $('#txt_descripcion').val();
  this.planService.create(registro).subscribe((datos: PlanModel)=>{
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
        let registro = new PlanModel();
        registro.nombre = $('#txt_nombre').val();
        registro.precio = $('#txt_precio').val();
        registro.descripcion = $('#txt_descripcion').val();
        console.log(registro);
        this.planService.update(registro, id).subscribe((datos: PlanModel)=>{
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
