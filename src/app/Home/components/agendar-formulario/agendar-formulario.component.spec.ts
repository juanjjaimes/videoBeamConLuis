import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarFormularioComponent } from './agendar-formulario.component';

describe('AgendarFormularioComponent', () => {
  let component: AgendarFormularioComponent;
  let fixture: ComponentFixture<AgendarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
