import { PlanModel } from "./plan.model";
import { UsuarioModel } from "./usuario.model";

export class MascotaModel{
  id?:string
  nombre?:string;
  foto?:string;
  estado?:string;
  especie?:string;
  comentario?:string;
  usuarioId?:UsuarioModel;
  planId?:PlanModel;
}
