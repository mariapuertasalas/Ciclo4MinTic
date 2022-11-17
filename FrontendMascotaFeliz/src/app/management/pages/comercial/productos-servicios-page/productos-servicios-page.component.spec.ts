import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiciosPageComponent } from './productos-servicios-page.component';

describe('ProductosServiciosPageComponent', () => {
  let component: ProductosServiciosPageComponent;
  let fixture: ComponentFixture<ProductosServiciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiciosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosServiciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
