import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMangaComponent } from './register-manga.component';

describe('RegisterMangaComponent', () => {
  let component: RegisterMangaComponent;
  let fixture: ComponentFixture<RegisterMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
