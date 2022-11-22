import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Usuario,
  Mascota,
} from '../models';
import {UsuarioRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
@authenticate('admin')
export class UsuarioMascotaController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @authenticate.skip()
  @get('/usuarios/{id}/mascotas/', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Mascota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascota)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Mascota>,
  ): Promise<Mascota[]> {
    return this.usuarioRepository.mascotas(id).find(filter);
  }
}
