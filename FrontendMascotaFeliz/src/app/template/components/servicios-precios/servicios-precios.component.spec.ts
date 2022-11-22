import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPreciosComponent } from './servicios-precios.component';

describe('ServiciosPreciosComponent', () => {
  let component: ServiciosPreciosComponent;
  let fixture: ComponentFixture<ServiciosPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosPreciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
