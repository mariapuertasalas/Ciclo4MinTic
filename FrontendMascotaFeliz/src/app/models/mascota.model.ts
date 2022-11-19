import { PlanModel } from "./plan.model";
import { UsuarioModel } from "./usuario.model";

export class MascotaModel{
  id?:string
  nombre?:string;
  foto?:string;
  estado?:string;
  especie?:string;
  comentario?:string;
  usuario?:UsuarioModel;
  plan?:PlanModel;
}
