import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosPageComponent } from './quienes-somos-page.component';

describe('QuienesSomosPageComponent', () => {
  let component: QuienesSomosPageComponent;
  let fixture: ComponentFixture<QuienesSomosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesSomosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
