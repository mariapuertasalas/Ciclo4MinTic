import { TestBed } from '@angular/core/testing';

import { UsuariosMascotasService } from './usuarios-mascotas.service';

describe('UsuariosMascotasService', () => {
  let service: UsuariosMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
