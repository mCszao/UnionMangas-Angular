import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuNavbarComponent } from './manu-navbar.component';

describe('ManuNavbarComponent', () => {
  let component: ManuNavbarComponent;
  let fixture: ComponentFixture<ManuNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
