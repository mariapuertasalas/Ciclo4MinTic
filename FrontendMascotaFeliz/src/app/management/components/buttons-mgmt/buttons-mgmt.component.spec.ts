import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMgmtComponent } from './buttons-mgmt.component';

describe('ButtonsMgmtComponent', () => {
  let component: ButtonsMgmtComponent;
  let fixture: ComponentFixture<ButtonsMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
