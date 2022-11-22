import { ProductoModel } from 'src/app/models/producto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
declare var $: any;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]],
    'tipo':[''],

});

constructor(private fb: FormBuilder, private productoService: ProductoService) { }

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
  let registro = new ProductoModel();
  registro.nombre = $('#txt_nombre').val();
  registro.descripcion = $('#txt_descripcion').val();
  registro.precio = $('#txt_precio').val();
  registro.tipo = $('#lst_tipo').val();
  this.productoService.create(registro).subscribe((datos: ProductoModel)=>{
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
        let registro = new ProductoModel();
        registro.nombre = $('#txt_nombre').val();
        registro.descripcion = $('#txt_descripcion').val();
        registro.precio = $('#txt_precio').val();
        registro.tipo = $('#lst_tipo').val();
        console.log(registro);
        this.productoService.update(registro, id).subscribe((datos: ProductoModel)=>{
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
