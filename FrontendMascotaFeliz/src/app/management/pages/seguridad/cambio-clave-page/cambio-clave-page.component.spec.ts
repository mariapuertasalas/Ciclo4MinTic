import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioClavePageComponent } from './cambio-clave-page.component';

describe('CambioClavePageComponent', () => {
  let component: CambioClavePageComponent;
  let fixture: ComponentFixture<CambioClavePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioClavePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioClavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
