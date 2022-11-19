import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMgmtComponent } from './contacto-mgmt.component';

describe('ContactoMgmtComponent', () => {
  let component: ContactoMgmtComponent;
  let fixture: ComponentFixture<ContactoMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
