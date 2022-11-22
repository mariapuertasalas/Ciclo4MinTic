import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalModel } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
declare var $: any;

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {


  fgValidator: FormGroup = this.fb.group({
    'departamento':['', [Validators.required]],
    'ciudad':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    
});

constructor(private fb: FormBuilder, private sucursalService: SucursalService) { }

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
  let registro = new SucursalModel();

  $('#txt_departamento').val(registro.departamento);
  $('#txt_ciudad').val(registro.ciudad);
  $('#txt_direccion').val(registro.direccion);
  $('#txt_telefono').val(registro.telefono);
  this.sucursalService.create(registro).subscribe((datos: SucursalModel)=>{
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
        let registro = new SucursalModel();
        $('#txt_departamento').val(registro.departamento);
        $('#txt_ciudad').val(registro.ciudad);
        $('#txt_direccion').val(registro.direccion);
        $('#txt_telefono').val(registro.telefono);
        console.log(registro);
        this.sucursalService.update(registro, id).subscribe((datos: SucursalModel)=>{
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
