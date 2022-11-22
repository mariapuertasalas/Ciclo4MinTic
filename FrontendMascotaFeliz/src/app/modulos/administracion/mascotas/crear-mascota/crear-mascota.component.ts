import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaModel } from 'src/app/models/mascota.model';
import { PlanModel } from 'src/app/models/plan.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { PlanService } from 'src/app/services/plan.service';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var $: any;

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'comentario':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'estado':['' ,[Validators.required]],
    'foto':['', [Validators.required]],

});

listaPlanes: PlanModel[] = [];
listaUsuarios: UsuarioModel[] = [];
opcion: boolean = false;
datos: any;

constructor(private fb: FormBuilder,
            private usuarioService: UsuarioService,
            private planService: PlanService,
            private seguridadService: SeguridadService,
            private mascotaService: MascotaService,
  ) {
    this.datos =  this.seguridadService.getDataFromSession();
  }

ngOnInit(): void {
  this.fillUsuarioSelect();
  this.fillPlanSelect();
  if($('#isClient')){
    setTimeout(function(){
      let isClient = $('#isClient').val();
      $('#lst_cliente option:eq(1)').prop("selected",isClient);
  }, 500);
}
}

fillUsuarioSelect(){
  if(this.datos['datos']['rol'] == 'Cliente'){
    this.usuarioService.get(this.datos['datos']['id']).subscribe((datos: UsuarioModel)=>{
      this.listaUsuarios[0] = datos;
      this.opcion = true;
  });
  }else{
    this.usuarioService.list().subscribe((datos: UsuarioModel[])=>{
        this.listaUsuarios = datos;

    });
  }
}

fillPlanSelect(){
  this.planService.list().subscribe((datos: PlanModel[])=>{
      this.listaPlanes = datos;
      console.log(this.listaPlanes);
  });
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
  let registro = new MascotaModel();
  registro.nombre = $('#txt_nombre').val();
  registro.comentario = $('#txt_comentario').val();
  registro.especie = $('#txt_especie').val();
  registro.estado = $('#lst_estado').val();
  registro.foto = $('#txt_foto').val();
  registro.planId = $('#lst_plan').val();
  registro.usuarioId = $('#lst_cliente').val();
  this.mascotaService.create(registro).subscribe((datos: MascotaModel)=>{
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
        let registro = new MascotaModel();
        registro.nombre = $('#txt_nombre').val();
        registro.comentario = $('#txt_comentario').val();
        registro.especie = $('#txt_especie').val();
        registro.estado = $('#lst_estado').val();
        registro.foto = $('#txt_foto').val();
        registro.planId = $('#lst_plan').val();
        registro.usuarioId = $('#lst_cliente').val();
        console.log(registro);
        this.mascotaService.update(registro, id).subscribe((datos: MascotaModel)=>{
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
