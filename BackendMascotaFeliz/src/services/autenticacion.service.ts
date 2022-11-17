import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/Llaves';
import {Usuario} from '../models/usuario.model';
import {UsuarioRepository} from '../repositories';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository
  ) { }

  /*
   * Add service methods here
   */

  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarUsuario(user: string, clave: string) {
    try {
      let pass = cryptoJS.MD5(clave).toString();
      let u = this.usuarioRepository.findOne({where: {correo: user, contrasena: pass}});
      if (u) {
        return u
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data:{
      id: usuario.id,
      correo: usuario.correo,
      rol: usuario.rol
      }
    },
    Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token:string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }
}
