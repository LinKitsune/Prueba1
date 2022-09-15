import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioaComponent } from './formularioa.component';

describe('FormularioaComponent', () => {
  let component: FormularioaComponent;
  let fixture: ComponentFixture<FormularioaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
