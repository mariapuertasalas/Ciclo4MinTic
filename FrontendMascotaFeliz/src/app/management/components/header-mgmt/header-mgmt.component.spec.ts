import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMgmtComponent } from './header-mgmt.component';

describe('HeaderMgmtComponent', () => {
  let component: HeaderMgmtComponent;
  let fixture: ComponentFixture<HeaderMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
