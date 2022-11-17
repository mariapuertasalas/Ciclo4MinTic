import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMgmtComponent } from './menu-mgmt.component';

describe('MenuMgmtComponent', () => {
  let component: MenuMgmtComponent;
  let fixture: ComponentFixture<MenuMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
