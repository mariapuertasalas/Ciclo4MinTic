import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegistrarseComponent } from './header-registrarse.component';

describe('HeaderRegistrarseComponent', () => {
  let component: HeaderRegistrarseComponent;
  let fixture: ComponentFixture<HeaderRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRegistrarseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
