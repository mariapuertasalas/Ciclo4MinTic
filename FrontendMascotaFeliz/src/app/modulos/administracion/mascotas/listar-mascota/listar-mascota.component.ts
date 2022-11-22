import { Component, OnInit } from '@angular/core';
import { MascotaModel } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { UsuarioMascotaService } from 'src/app/services/usuarios-mascotas.service';
declare var $: any;

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit {

  lista: MascotaModel[] = [];
  datos: any;

  constructor(private mascotaService: MascotaService,
              private seguridadService: SeguridadService,
              private usuarioMascotaService: UsuarioMascotaService) {
                this.datos =  this.seguridadService.getDataFromSession();
              }

  ngOnInit(): void {
    this.getList();
  }

  getList(){

      if(this.datos['datos']['rol'] != 'Cliente'){
        this.mascotaService.list().subscribe((datos: MascotaModel[])=>{
            this.lista = datos;
        });
      }else{
        this.usuarioMascotaService.list(this.datos['datos']['id']).subscribe((datos: MascotaModel[])=>{
          this.lista = datos;
      });
      }

  }

  getById(id:any){
      this.mascotaService.get(id.toString()).subscribe((datos: MascotaModel)=>{
          $('#hdnId').val(datos.id);
          $('#txt_nombre').val(datos.nombre);
          $('#txt_foto').val(datos.foto);
          $('#txt_especie').val(datos.especie);
          $('#lst_estado').val(datos.estado);
          $('#txt_comentario').val(datos.comentario);
          $('#btnActualizar').prop('disabled', false);
      });
  }

  deleteById(id:any){
    if (window.confirm("¿Realmente deseas eliminar este registro?")) {
      this.mascotaService.delete(id).subscribe((datos: MascotaModel)=>{
        alert('¡Registro eliminado exitosamente!');
        this.getList();
      });
    }
  }

}
