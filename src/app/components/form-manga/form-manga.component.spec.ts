import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMangaComponent } from './form-manga.component';

describe('FormMangaComponent', () => {
  let component: FormMangaComponent;
  let fixture: ComponentFixture<FormMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
